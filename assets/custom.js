document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------------------
     GLOBAL LAZY-LOADING
  ---------------------------------------- */

  document.querySelectorAll("img").forEach(img => {
    img.loading = img.loading || "lazy";
  });

  document.querySelectorAll("iframe").forEach(frame => {
    frame.loading = frame.loading || "lazy";
  });


  /* ----------------------------------------
     BBCODE: [quote] ... [/quote]
  ---------------------------------------- */

  // First pass: mark opening [quote=@User] paragraphs
  document.querySelectorAll("p").forEach(p => {
    const raw = p.textContent.trim();

    if (raw.startsWith("[quote=")) {
      const match = raw.match(/\[quote=(.*?)\]/);
      const user = match ? match[1] : "User";

      const quote = document.createElement("div");
      quote.className = "comp-quote";
      quote.innerHTML = `<div class="quote-user">@${user}</div>`;

      quote.dataset.collectingQuote = "true";
      p.replaceWith(quote);
    }
  });

  // Second pass: move following siblings into the quote block until [/quote]
  const quoteBlocks = Array.from(document.querySelectorAll(".comp-quote"));
  quoteBlocks.forEach(block => {
    let sibling = block.nextSibling;

    while (sibling && sibling.textContent && sibling.textContent.trim() !== "[/quote]") {
      const next = sibling.nextSibling;
      block.appendChild(sibling);
      sibling = next;
    }

    if (sibling && sibling.textContent && sibling.textContent.trim() === "[/quote]") {
      sibling.remove();
    }
  });


  /* ----------------------------------------
     IMAGE COMPARISON VIEWER (Legacy img-compare)
  ---------------------------------------- */

  document.querySelectorAll(".img-compare").forEach(block => {
    const urls = JSON.parse(block.dataset.images);
    const images = [];

    // Create stacked images
    urls.forEach((url, i) => {
      const img = document.createElement("img");
      img.src = url;
      if (i === 0) img.classList.add("active");
      block.appendChild(img);
      images.push(img);
    });

    // Mouse movement controls the visible image
    block.addEventListener("mousemove", e => {
      const rect = block.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const index = Math.floor(pos * images.length);

      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === index);
      });
    });

    // Reset to first frame on mouse leave
    block.addEventListener("mouseleave", () => {
      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === 0);
      });
    });

  });

  /* ----------------------------------------
     BBCODE COMPARISON SCENES (Mouse slider + keyboard)
  ---------------------------------------- */

  const comparisonScenes = [];
  let currentSceneIndex = 0;
  let currentImageIndex = 0;
  let isFullscreen = false;
  let fullscreenScene = null;
  let comparisonContainers = [];

  // Initialize all comparison containers
  document.querySelectorAll(".comparison-container").forEach((container) => {
    const scenes = container.querySelectorAll(".comparison-scene");
    const sceneSelect = container.querySelector(".comparison-scene-select");
    const scenesData = [];

    // Initialize all scenes in this container
    scenes.forEach((scene, sceneIdx) => {
    const labels = JSON.parse(scene.dataset.labels);
    const urls = JSON.parse(scene.dataset.images);
    const slider = scene.querySelector(".comparison-slider");
    const labelBar = scene.querySelector(".comparison-label-bar");
    const images = [];

    // Create stacked images
    urls.forEach((url, i) => {
      const img = document.createElement("img");
      img.src = url;
      img.loading = "lazy";
      if (i === 0) img.classList.add("active");
      slider.appendChild(img);
      images.push(img);
    });

    // Create label indicator
    const labelIndicator = document.createElement("div");
    labelIndicator.className = "comparison-label-indicator";
    labelIndicator.textContent = labels[0];
    labelBar.appendChild(labelIndicator);

      // Store scene data
      const sceneData = {
        element: scene,
        slider,
        labelBar,
        labelIndicator,
        labels,
        images,
        currentIndex: 0,
        container: container
      };
      scenesData.push(sceneData);

      // Mouse movement controls the visible image
      slider.addEventListener("mousemove", e => {
        if (isFullscreen && fullscreenScene !== sceneData) return;
        
        const rect = slider.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const index = Math.min(Math.floor(pos * images.length), images.length - 1);
        
        sceneData.currentIndex = index;
        updateSceneDisplay(sceneData);
      });

      // Reset to first frame on mouse leave (only if not fullscreen)
      slider.addEventListener("mouseleave", () => {
        if (!isFullscreen || fullscreenScene !== sceneData) {
          sceneData.currentIndex = 0;
          updateSceneDisplay(sceneData);
        }
      });

      // Click to toggle fullscreen
      slider.addEventListener("click", (e) => {
        // Don't toggle fullscreen if user is tapping navigation buttons on mobile
        if (e.target.classList.contains("mobile-nav-button")) {
          return;
        }
        toggleFullscreen(sceneData);
      });

      // Touch events for mobile interaction
      let touchStartX = null;
      let touchStartY = null;
      let touchStartTime = null;

      slider.addEventListener("touchstart", (e) => {
        if (isFullscreen && fullscreenScene !== sceneData) return;
        
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchStartTime = Date.now();
      }, { passive: true });

      slider.addEventListener("touchmove", (e) => {
        if (isFullscreen && fullscreenScene !== sceneData) return;
        if (touchStartX === null) return;
        
        const touch = e.touches[0];
        const rect = slider.getBoundingClientRect();
        const pos = (touch.clientX - rect.left) / rect.width;
        const index = Math.min(Math.max(0, Math.floor(pos * images.length)), images.length - 1);
        
        sceneData.currentIndex = index;
        updateSceneDisplay(sceneData);
      }, { passive: true });

      slider.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        const deltaTime = Date.now() - touchStartTime;
        const isSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30;
        const isQuickTap = deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;
        
        if (isSwipe) {
          // Swipe left = next image, swipe right = previous image
          if (deltaX > 0 && sceneData.currentIndex > 0) {
            sceneData.currentIndex--;
            updateSceneDisplay(sceneData);
          } else if (deltaX < 0 && sceneData.currentIndex < sceneData.images.length - 1) {
            sceneData.currentIndex++;
            updateSceneDisplay(sceneData);
          }
        } else if (isQuickTap && !isFullscreen) {
          // Quick tap toggles fullscreen
          toggleFullscreen(sceneData);
        }
        
        touchStartX = null;
        touchStartY = null;
        touchStartTime = null;
      }, { passive: true });

      // Create mobile navigation buttons (only visible on mobile)
      const prevButton = document.createElement("button");
      prevButton.className = "mobile-nav-button mobile-nav-button-prev";
      prevButton.innerHTML = "←";
      prevButton.setAttribute("aria-label", "Previous image");
      prevButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (sceneData.currentIndex > 0) {
          sceneData.currentIndex--;
          updateSceneDisplay(sceneData);
        }
      });

      const nextButton = document.createElement("button");
      nextButton.className = "mobile-nav-button mobile-nav-button-next";
      nextButton.innerHTML = "→";
      nextButton.setAttribute("aria-label", "Next image");
      nextButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (sceneData.currentIndex < sceneData.images.length - 1) {
          sceneData.currentIndex++;
          updateSceneDisplay(sceneData);
        }
      });

      scene.appendChild(prevButton);
      scene.appendChild(nextButton);

      // Store button references in sceneData
      sceneData.prevButton = prevButton;
      sceneData.nextButton = nextButton;

      // Make scene tabbable for keyboard focus
      scene.setAttribute("tabindex", "0");
    });

    // Store container data
    const containerData = {
      container,
      scenes: scenesData,
      sceneSelect,
      currentSceneIndex: 0
    };
    comparisonContainers.push(containerData);
    comparisonScenes.push(...scenesData);

    // Dropdown change handler
    sceneSelect.addEventListener("change", (e) => {
      const newIndex = parseInt(e.target.value);
      switchScene(containerData, newIndex);
    });

    // Initialize: show first scene
    switchScene(containerData, 0);
  });

  function switchScene(containerData, newIndex) {
    // Hide all scenes
    containerData.scenes.forEach((sceneData, idx) => {
      sceneData.element.classList.toggle("active", idx === newIndex);
    });
    
    containerData.currentSceneIndex = newIndex;
    containerData.sceneSelect.value = newIndex;
    
    // Update current scene index for keyboard navigation
    const globalIndex = comparisonScenes.indexOf(containerData.scenes[newIndex]);
    if (globalIndex !== -1) {
      currentSceneIndex = globalIndex;
    }
  }

  function updateSceneDisplay(sceneData) {
    // Update images
    sceneData.images.forEach((img, idx) => {
      img.classList.toggle("active", idx === sceneData.currentIndex);
    });

    // Update label
    if (sceneData.currentIndex < sceneData.labels.length) {
      sceneData.labelIndicator.textContent = sceneData.labels[sceneData.currentIndex];
    }

    // Update mobile navigation buttons visibility (only on mobile devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    
    if (sceneData.prevButton) {
      if (isTouchDevice && isSmallScreen) {
        sceneData.prevButton.style.display = sceneData.currentIndex > 0 ? "flex" : "none";
      } else {
        sceneData.prevButton.style.display = "none";
      }
    }
    if (sceneData.nextButton) {
      if (isTouchDevice && isSmallScreen) {
        sceneData.nextButton.style.display = sceneData.currentIndex < sceneData.images.length - 1 ? "flex" : "none";
      } else {
        sceneData.nextButton.style.display = "none";
      }
    }
  }

  function toggleFullscreen(sceneData) {
    if (isFullscreen && fullscreenScene === sceneData) {
      // Exit fullscreen
      sceneData.element.classList.remove("fullscreen");
      document.body.style.overflow = "";
      isFullscreen = false;
      fullscreenScene = null;
      currentSceneIndex = -1;
      sceneData.element.blur();
    } else {
      // Enter fullscreen
      // Exit any existing fullscreen first
      if (fullscreenScene) {
        fullscreenScene.element.classList.remove("fullscreen");
        fullscreenScene.element.blur();
      }
      
      sceneData.element.classList.add("fullscreen");
      document.body.style.overflow = "hidden";
      isFullscreen = true;
      fullscreenScene = sceneData;
      currentSceneIndex = comparisonScenes.indexOf(sceneData);
      currentImageIndex = sceneData.currentIndex;
      
      // Focus the scene for keyboard events
      setTimeout(() => sceneData.element.focus(), 100);
    }
  }

  // Helper function to find the comparison visible in viewport
  function findVisibleComparison() {
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    const viewportCenter = viewportTop + (window.innerHeight / 2);
    
    let bestContainer = null;
    let bestScene = null;
    let bestDistance = Infinity;
    
    // Find the comparison container that's most visible in the viewport
    for (const containerData of comparisonContainers) {
      const containerRect = containerData.container.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerBottom = containerTop + containerRect.height;
      const containerCenter = containerTop + (containerRect.height / 2);
      
      // Check if container is visible in viewport
      const isVisible = containerBottom > viewportTop && containerTop < viewportBottom;
      
      if (isVisible) {
        // Find active scene in this container
        const activeSceneInContainer = containerData.scenes.find(s => s.element.classList.contains("active"));
        if (activeSceneInContainer) {
          // Calculate distance from viewport center to container center
          const distance = Math.abs(containerCenter - viewportCenter);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestContainer = containerData;
            bestScene = activeSceneInContainer;
          }
        }
      }
    }
    
    return { container: bestContainer, scene: bestScene };
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Find the container that contains the focused element or fullscreen scene
    let activeContainer = null;
    let activeScene = null;
    
    if (isFullscreen && fullscreenScene) {
      activeScene = fullscreenScene;
      activeContainer = comparisonContainers.find(c => c.scenes.includes(fullscreenScene));
    } else {
      // Find container with focused scene
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.classList.contains("comparison-scene")) {
        activeScene = comparisonScenes.find(s => s.element === focusedElement);
        activeContainer = comparisonContainers.find(c => c.scenes.includes(activeScene));
      } else {
        // Find the comparison that's actually visible in the viewport
        const visible = findVisibleComparison();
        if (visible.container && visible.scene) {
          activeContainer = visible.container;
          activeScene = visible.scene;
        } else {
          // Fallback: find first active scene
          for (const containerData of comparisonContainers) {
            const activeSceneInContainer = containerData.scenes.find(s => s.element.classList.contains("active"));
            if (activeSceneInContainer) {
              activeContainer = containerData;
              activeScene = activeSceneInContainer;
              break;
            }
          }
        }
      }
    }

    if (!activeContainer || !activeScene) return;

    switch(e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (isFullscreen) {
          // Navigate images in fullscreen
          if (activeScene.currentIndex > 0) {
            activeScene.currentIndex--;
            updateSceneDisplay(activeScene);
          }
        } else {
          // Navigate images when not in fullscreen
          if (activeScene.currentIndex > 0) {
            activeScene.currentIndex--;
            updateSceneDisplay(activeScene);
          }
        }
        break;
      
      case "ArrowRight":
        e.preventDefault();
        if (isFullscreen) {
          // Navigate images in fullscreen
          if (activeScene.currentIndex < activeScene.images.length - 1) {
            activeScene.currentIndex++;
            updateSceneDisplay(activeScene);
          }
        } else {
          // Navigate images when not in fullscreen
          if (activeScene.currentIndex < activeScene.images.length - 1) {
            activeScene.currentIndex++;
            updateSceneDisplay(activeScene);
          }
        }
        break;
      
      case "ArrowUp":
        e.preventDefault();
        if (isFullscreen) {
          // Navigate to previous scene in fullscreen
          const sceneIndex = activeContainer.scenes.indexOf(activeScene);
          if (sceneIndex > 0) {
            const prevScene = activeContainer.scenes[sceneIndex - 1];
            toggleFullscreen(prevScene);
          }
        } else {
          // Navigate to previous scene when not in fullscreen
          const sceneIndex = activeContainer.scenes.indexOf(activeScene);
          if (sceneIndex > 0) {
            switchScene(activeContainer, sceneIndex - 1);
            // Focus the new scene
            activeContainer.scenes[sceneIndex - 1].element.focus();
          }
        }
        break;
      
      case "ArrowDown":
        e.preventDefault();
        if (isFullscreen) {
          // Navigate to next scene in fullscreen
          const sceneIndex = activeContainer.scenes.indexOf(activeScene);
          if (sceneIndex < activeContainer.scenes.length - 1) {
            const nextScene = activeContainer.scenes[sceneIndex + 1];
            toggleFullscreen(nextScene);
          }
        } else {
          // Navigate to next scene when not in fullscreen
          const sceneIndex = activeContainer.scenes.indexOf(activeScene);
          if (sceneIndex < activeContainer.scenes.length - 1) {
            switchScene(activeContainer, sceneIndex + 1);
            // Focus the new scene
            activeContainer.scenes[sceneIndex + 1].element.focus();
          }
        }
        break;
      
      case "Escape":
        if (isFullscreen) {
          e.preventDefault();
          toggleFullscreen(fullscreenScene);
        }
        break;
      
      case "f":
      case "F":
        // Only trigger if not typing in an input/textarea
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && !e.target.isContentEditable) {
          // Check for Ctrl+F or Cmd+F (two-button combination) - always toggle
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            toggleFullscreen(activeScene);
          } else if (!isFullscreen) {
            // Also allow just 'F' key when comparison is focused/active (only enter fullscreen)
            e.preventDefault();
            toggleFullscreen(activeScene);
          } else if (isFullscreen && fullscreenScene === activeScene) {
            // When in fullscreen, F key also exits
            e.preventDefault();
            toggleFullscreen(activeScene);
          }
        }
        break;
    }
  });

  /* ----------------------------------------
     CLIPBOARD NOTIFICATION STYLING
  ---------------------------------------- */

  // Watch for clipboard notification dialog and force dark theme styling
  const observer = new MutationObserver((mutations) => {
    const dialog = document.querySelector('.md-dialog[data-md-component="dialog"]');
    if (dialog) {
      const inner = dialog.querySelector('.md-dialog__inner');
      if (inner) {
        // Outer dialog - make transparent
        dialog.style.backgroundColor = 'transparent';
        dialog.style.background = 'transparent';
        dialog.style.border = 'none';
        dialog.style.boxShadow = 'none';
        
        // Inner dialog - this is the actual notification box
        inner.style.backgroundColor = 'var(--kitsune-bg-card)';
        inner.style.background = 'var(--kitsune-bg-card)';
        inner.style.color = 'var(--kitsune-pink)';
        inner.style.border = '1px solid var(--kitsune-border)';
        inner.style.borderRadius = '6px';
        inner.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        inner.style.textAlign = 'center';
        inner.style.padding = '0.6em 1.2em';
        
        // Style any text inside
        inner.querySelectorAll('*').forEach(el => {
          el.style.color = 'var(--kitsune-pink)';
          el.style.backgroundColor = 'transparent';
        });
      }
    }
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });


  /* ----------------------------------------
     TABLE OF CONTENTS SCROLL HIGHLIGHTING
  ---------------------------------------- */

  // Find all TOC links in the secondary sidebar
  const tocLinks = document.querySelectorAll('.md-sidebar--secondary .md-nav__link[href^="#"]');
  if (tocLinks.length > 0) {
    // Get all headings that have IDs (targets of TOC links)
    const headings = Array.from(tocLinks).map(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.substring(1);
        const heading = document.getElementById(id);
        return { link, heading, id };
      }
      return null;
    }).filter(item => item && item.heading);

    if (headings.length > 0) {
      let currentActive = null;

      // Function to update active TOC link
      function updateActiveTOC(activeHeading) {
        // Remove active class from all TOC items
        document.querySelectorAll('.md-sidebar--secondary .md-nav__item').forEach(item => {
          item.classList.remove('md-nav__item--active');
        });

        if (activeHeading) {
          // Find the corresponding TOC link and mark it as active
          const tocItem = headings.find(h => h.heading === activeHeading);
          if (tocItem) {
            const tocItemElement = tocItem.link.closest('.md-nav__item');
            if (tocItemElement) {
              tocItemElement.classList.add('md-nav__item--active');
              currentActive = activeHeading;
              
              // Scroll the active TOC item into view if needed
              const sidebar = document.querySelector('.md-sidebar--secondary .md-sidebar__scrollwrap');
              if (sidebar) {
                const tocItemRect = tocItemElement.getBoundingClientRect();
                const sidebarRect = sidebar.getBoundingClientRect();
                
                // Only scroll if the item is not visible
                if (tocItemRect.top < sidebarRect.top || tocItemRect.bottom > sidebarRect.bottom) {
                  tocItemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
              }
            }
          }
        }
      }

      // Use Intersection Observer to track which heading is in view
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when heading is in top 20% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };

      const headingObserver = new IntersectionObserver((entries) => {
        // Find the heading that's most visible and closest to the top
        let mostVisible = null;
        let highestRatio = 0;
        let closestToTop = Infinity;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const viewportTop = window.scrollY;
            const distanceFromTop = Math.abs(rect.top);
            
            // Prefer headings that are in the top portion of the viewport
            if (rect.top >= 0 && rect.top < window.innerHeight * 0.3) {
              if (distanceFromTop < closestToTop) {
                closestToTop = distanceFromTop;
                mostVisible = entry.target;
              }
            } else if (entry.intersectionRatio > highestRatio) {
              highestRatio = entry.intersectionRatio;
              if (!mostVisible) {
                mostVisible = entry.target;
              }
            }
          }
        });

        // If we found a visible heading, update the TOC
        if (mostVisible && mostVisible !== currentActive) {
          updateActiveTOC(mostVisible);
        } else if (!mostVisible && currentActive) {
          // If no heading is in view, find the last one that was above the viewport
          const scrollY = window.scrollY;
          let lastHeadingAbove = null;
          
          headings.forEach(({ heading }) => {
            const rect = heading.getBoundingClientRect();
            const headingTop = scrollY + rect.top;
            if (headingTop < scrollY + 100 && (!lastHeadingAbove || headingTop > lastHeadingAbove.getBoundingClientRect().top + scrollY)) {
              lastHeadingAbove = heading;
            }
          });
          
          if (lastHeadingAbove) {
            updateActiveTOC(lastHeadingAbove);
          }
        }
      }, observerOptions);

      // Observe all headings
      headings.forEach(({ heading }) => {
        headingObserver.observe(heading);
      });

      // Initial update on page load
      setTimeout(() => {
        const scrollY = window.scrollY;
        let initialActive = null;
        let closestDistance = Infinity;

        headings.forEach(({ heading }) => {
          const rect = heading.getBoundingClientRect();
          const headingTop = scrollY + rect.top;
          const distance = Math.abs(headingTop - scrollY - 100); // 100px from top

          if (headingTop <= scrollY + 200 && distance < closestDistance) {
            closestDistance = distance;
            initialActive = heading;
          }
        });

        if (initialActive) {
          updateActiveTOC(initialActive);
        } else if (headings.length > 0) {
          // Fallback to first heading
          updateActiveTOC(headings[0].heading);
        }
      }, 100);
    }
  }


});
