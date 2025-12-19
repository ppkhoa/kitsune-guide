
<!doctype html>
<html lang="en" class="no-js">
  <head>
    
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      
      
      
        <link rel="canonical" href="https://0.0.0.0:8000/">
      
      
      
        <link rel="next" href="video_codecs_and_containers/video_codecs_and_containers.html">
      
      
        
      
      
      <link rel="icon" href="assets/images/favicon.png">
      <meta name="generator" content="mkdocs-1.6.1, mkdocs-material-9.7.1">
    
    
      
        <title>Kitsune Starter Guide</title>
      
    
    
      <link rel="stylesheet" href="assets/stylesheets/main.484c7ddc.min.css">
      
        
        <link rel="stylesheet" href="assets/stylesheets/palette.ab4e12ef.min.css">
      
      


    
    
      
    
    
      
        
        
        
        <style type="text/css">@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/300/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek/300/normal.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin/300/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/300/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/300/normal.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/300/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/300/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek/300/italic.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/300/italic.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/300/italic.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/300/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin/300/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/300/italic.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/300/italic.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek/400/normal.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/400/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/400/normal.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/400/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/400/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/400/italic.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/400/italic.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek/400/italic.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/400/italic.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin/400/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/400/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/400/italic.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/700/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin/700/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/700/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek/700/normal.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/700/normal.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/700/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/700/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/700/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/700/italic.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek/700/italic.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/700/italic.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/700/italic.woff2);unicode-range:U+1F00-1FFF;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/700/italic.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin/700/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/vietnamese/400/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic-ext/400/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/greek/400/normal.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic/400/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/vietnamese/400/italic.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic/400/italic.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic-ext/400/italic.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin/400/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/greek/400/italic.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:400;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin-ext/400/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/greek/700/normal.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin/700/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic/700/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic-ext/700/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin-ext/700/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/vietnamese/700/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/greek/700/italic.woff2);unicode-range:U+0370-03FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic/700/italic.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin/700/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/latin-ext/700/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/vietnamese/700/italic.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:fallback;}@font-face {font-family:Roboto Mono;font-style:italic;font-weight:700;src:url(/cf-fonts/s/roboto-mono/5.0.16/cyrillic-ext/700/italic.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:fallback;}</style>
        <style>:root{--md-text-font:"Roboto";--md-code-font:"Roboto Mono"}</style>
      
    
    
      <link rel="stylesheet" href="assets/kitsune.css">
    
    <script>__md_scope=new URL(".",location),__md_hash=e=>[...e].reduce(((e,_)=>(e<<5)-e+_.charCodeAt(0)),0),__md_get=(e,_=localStorage,t=__md_scope)=>JSON.parse(_.getItem(t.pathname+"."+e)),__md_set=(e,_,t=localStorage,a=__md_scope)=>{try{t.setItem(a.pathname+"."+e,JSON.stringify(_))}catch(e){}}</script>
    
      

    
    
  

  <!-- Preload logo -->
  <link rel="preload" href="assets/fox-logo.png" as="image">

  <!-- Favicon Pack -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
  <link rel="shortcut icon" href="assets/favicon/favicon.ico">

  <!-- Correct Manifest (your real file) -->
  <link rel="manifest" href="assets/site.webmanifest">

  <!-- Theme color -->
  <meta name="theme-color" content="#F4AACA">

  <!-- OpenGraph -->
  <meta property="og:title" content="Kitsune Starter Guide">
  <meta property="og:description" content="WEB-DL Handling • Cleanup • Automation • Best Practices">
  <meta property="og:image" content="https://okami.icu/assets/social-card.png">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://0.0.0.0:8000/">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Kitsune Starter Guide">
  <meta name="twitter:description" content="WEB-DL Handling • Cleanup • Automation • Best Practices">
  <meta name="twitter:image" content="https://okami.icu/assets/social-card.png">

  </head>
  
  
    
    
    
    
    
    <body dir="ltr" data-md-color-scheme="slate" data-md-color-primary="indigo" data-md-color-accent="indigo">
  
    
    <input class="md-toggle" data-md-toggle="drawer" type="checkbox" id="__drawer" autocomplete="off">
    <input class="md-toggle" data-md-toggle="search" type="checkbox" id="__search" autocomplete="off">
    <label class="md-overlay" for="__drawer"></label>
    <div data-md-component="skip">
      
        
        <a href="okami_default.html#kitsune-starter-guide" class="md-skip">
          Skip to content
        </a>
      
    </div>
    <div data-md-component="announce">
      
    </div>
    
    
      

  

<header class="md-header md-header--shadow" data-md-component="header">
  <nav class="md-header__inner md-grid" aria-label="Header">
    <a href="okami_default.html" title="Kitsune Starter Guide" class="md-header__button md-logo" aria-label="Kitsune Starter Guide" data-md-component="logo">
      
  <img src="assets/fox-logo.png" alt="logo">

    </a>
    <label class="md-header__button md-icon" for="__drawer">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
    </label>
    <div class="md-header__title" data-md-component="header-title">
      <div class="md-header__ellipsis">
        <div class="md-header__topic">
          <span class="md-ellipsis">
            Kitsune Starter Guide
          </span>
        </div>
        <div class="md-header__topic" data-md-component="header-topic">
          <span class="md-ellipsis">
            
              Home
            
          </span>
        </div>
      </div>
    </div>
    
      
    
    
    
    
      
      
        <label class="md-header__button md-icon" for="__search">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5"/></svg>
        </label>
        <div class="md-search" data-md-component="search" role="dialog">
  <label class="md-search__overlay" for="__search"></label>
  <div class="md-search__inner" role="search">
    <form class="md-search__form" name="search">
      <input type="text" class="md-search__input" name="query" aria-label="Search" placeholder="Search" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" data-md-component="search-query" required>
      <label class="md-search__icon md-icon" for="__search">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5"/></svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z"/></svg>
      </label>
      <nav class="md-search__options" aria-label="Search">
        
        <button type="reset" class="md-search__icon md-icon" title="Clear" aria-label="Clear" tabindex="-1">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </nav>
      
        <div class="md-search__suggest" data-md-component="search-suggest"></div>
      
    </form>
    <div class="md-search__output">
      <div class="md-search__scrollwrap" tabindex="0" data-md-scrollfix>
        <div class="md-search-result" data-md-component="search-result">
          <div class="md-search-result__meta">
            Initializing search
          </div>
          <ol class="md-search-result__list" role="presentation"></ol>
        </div>
      </div>
    </div>
  </div>
</div>
      
    
    
  </nav>
  
</header>
    
    <div class="md-container" data-md-component="container">
      
      
        
          
        
      
      <main class="md-main" data-md-component="main">
        <div class="md-main__inner md-grid">
          
            
              
              <div class="md-sidebar md-sidebar--primary" data-md-component="sidebar" data-md-type="navigation" >
                <div class="md-sidebar__scrollwrap">
                  <div class="md-sidebar__inner">
                    



<nav class="md-nav md-nav--primary" aria-label="Navigation" data-md-level="0">
  <label class="md-nav__title" for="__drawer">
    <a href="okami_default.html" title="Kitsune Starter Guide" class="md-nav__button md-logo" aria-label="Kitsune Starter Guide" data-md-component="logo">
      
  <img src="assets/fox-logo.png" alt="logo">

    </a>
    Kitsune Starter Guide
  </label>
  
  <ul class="md-nav__list" data-md-scrollfix>
    
      
      
  
  
    
  
  
  
    <li class="md-nav__item md-nav__item--active">
      
      <input class="md-nav__toggle md-toggle" type="checkbox" id="__toc">
      
      
        
      
      
        <label class="md-nav__link md-nav__link--active" for="__toc">
          
  
  
  <span class="md-ellipsis">
    
  
    Home
  

    
  </span>
  
  

          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <a href="okami_default.html" class="md-nav__link md-nav__link--active">
        
  
  
  <span class="md-ellipsis">
    
  
    Home
  

    
  </span>
  
  

      </a>
      
        

<nav class="md-nav md-nav--secondary" aria-label="Table of contents">
  
  
  
    
  
  
    <label class="md-nav__title" for="__toc">
      <span class="md-nav__icon md-icon"></span>
      Table of contents
    </label>
    <ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>
      
        <li class="md-nav__item">
  <a href="okami_default.html#start-here-recommended-beginner-path" class="md-nav__link">
    <span class="md-ellipsis">
      
        Start Here — Recommended Beginner Path
      
    </span>
  </a>
  
    <nav class="md-nav" aria-label="Start Here — Recommended Beginner Path">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="okami_default.html#1-general-information" class="md-nav__link">
    <span class="md-ellipsis">
      
        1. General Information
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#2-web-dl-basics" class="md-nav__link">
    <span class="md-ellipsis">
      
        2. WEB-DL Basics
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#3-beginner-encoding" class="md-nav__link">
    <span class="md-ellipsis">
      
        3. Beginner Encoding
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#4-essential-tools" class="md-nav__link">
    <span class="md-ellipsis">
      
        4. Essential Tools
      
    </span>
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#tools-you-will-use-frequently" class="md-nav__link">
    <span class="md-ellipsis">
      
        Tools You Will Use Frequently
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#guide-structure-overview" class="md-nav__link">
    <span class="md-ellipsis">
      
        Guide Structure Overview
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#general-information" class="md-nav__link">
    <span class="md-ellipsis">
      
        General Information
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#web-dl-handling-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        WEB-DL Handling Guide
      
    </span>
  </a>
  
    <nav class="md-nav" aria-label="WEB-DL Handling Guide">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="okami_default.html#basic" class="md-nav__link">
    <span class="md-ellipsis">
      
        Basic
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#advanced" class="md-nav__link">
    <span class="md-ellipsis">
      
        Advanced
      
    </span>
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#comparisons-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Comparisons Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#encoding-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Encoding Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#external-encoding-guides" class="md-nav__link">
    <span class="md-ellipsis">
      
        External Encoding Guides
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#blu-ray-disk-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Blu-ray Disk Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#remux-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        REMUX Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#quick-access-links" class="md-nav__link">
    <span class="md-ellipsis">
      
        Quick Access Links
      
    </span>
  </a>
  
</li>
      
    </ul>
  
</nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_2" >
        
          
          <label class="md-nav__link" for="__nav_2" id="__nav_2_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    General Information
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_2_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_2">
            <span class="md-nav__icon md-icon"></span>
            
  
    General Information
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="video_codecs_and_containers/video_codecs_and_containers.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Video Codecs & Containers
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-codecs/audio-codecs.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Audio Codecs
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="subtitle-formats/subtitle-formats.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Subtitle Formats
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="chapters/chapters.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Chapters
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_3" >
        
          
          <label class="md-nav__link" for="__nav_3" id="__nav_3_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    WEB-DL Handling Guide
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_3_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_3">
            <span class="md-nav__icon md-icon"></span>
            
  
    WEB-DL Handling Guide
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_3_1" >
        
          
          <label class="md-nav__link" for="__nav_3_1" id="__nav_3_1_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Basic
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="2" aria-labelledby="__nav_3_1_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_3_1">
            <span class="md-nav__icon md-icon"></span>
            
  
    Basic
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="Web-DL-home/Web-DL-home.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Introduction
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="how_to_find_content/how_to_find_content.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    How To Find Content
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="mkvtoolnix/mkvtoolnix.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    MKVToolNix Cleanup
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="mediainfo/mediainfo.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    MediaInfo Cleanup
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="subtitles/subtitles.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Subtitles
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="chapters-handling/chapters-handling.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Chapters
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="tv-ordering/tv-ordering.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    TV Show Ordering
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="streaming-services/streaming-services.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Streaming Services
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="quality_breakdown/quality_breakdown.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Quality Breakdown
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="web-tier-list/web-tier-list.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Web Tier List
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="best-practices/best-practices.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Best Practices
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

              
            
              
                
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_3_2" >
        
          
          <label class="md-nav__link" for="__nav_3_2" id="__nav_3_2_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Advanced
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="2" aria-labelledby="__nav_3_2_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_3_2">
            <span class="md-nav__icon md-icon"></span>
            
  
    Advanced
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="metadata/metadata.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Advanced Metadata
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="syncing-subtitles/syncing-subtitles.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Syncing Subtitles
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="what_is_hdr/what_is_hdr.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    What Is HDR?
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="hybrid-web-dl/hybrid-web-dl.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    DV HDR Hybrid
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-syncing/audio-syncing.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Audio Syncying
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="lossless-cutting-merging/lossless-cutting-merging.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Lossless Cutting & Merging
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="Crunchyroll-subtitles/Crunchyroll-subtitles.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Crunchyroll Subtitles
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

              
            
              
                
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_3_3" >
        
          
          <label class="md-nav__link" for="__nav_3_3" id="__nav_3_3_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Tools & Scripts
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="2" aria-labelledby="__nav_3_3_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_3_3">
            <span class="md-nav__icon md-icon"></span>
            
  
    Tools & Scripts
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="tools/tools.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Tools
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="scripts/scripts.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Scripts
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_4" >
        
          
          <label class="md-nav__link" for="__nav_4" id="__nav_4_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Comparisons Guide
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_4_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_4">
            <span class="md-nav__icon md-icon"></span>
            
  
    Comparisons Guide
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="comp/comp.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Introduction
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="avisynth-guide/avisynth-guide.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    AviSynth+
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="avisynth-script/avisynth-script.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    AvsPmod Script
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="vapoursynth/vapoursynth.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    VapourSynth
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-comparison/audio-comparison.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Audio Comparison
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_5" >
        
          
          <label class="md-nav__link" for="__nav_5" id="__nav_5_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Encoding Guide
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_5_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_5">
            <span class="md-nav__icon md-icon"></span>
            
  
    Encoding Guide
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="introduction-encode/introduction-encode.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Introduction
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="Beginners-encode/Beginners-encode.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Beginners Guide to Video Encoding
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="source-encode/source-encode.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Sourcing and Verifying Content
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="DV-encode/DV-encode.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Dolby Vision
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_5_5" >
        
          
          <label class="md-nav__link" for="__nav_5_5" id="__nav_5_5_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Audio
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="2" aria-labelledby="__nav_5_5_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_5_5">
            <span class="md-nav__icon md-icon"></span>
            
  
    Audio
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-encoding/audio-encoding.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Audio Encoding Overview
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-bitdepth-sample-rate/audio-bitdepth-sample-rate.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Bit-depth Reduction & Sample Rate Conversion
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="audio-encoding-deew/audio-encoding-deew.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Dolby Encoding Engine (DEE/DEEW)
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="encode-aac-qaac/encode-aac-qaac.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    AAC Encoding (qaac)
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="encode-ac3-soundforge/encode-ac3-soundforge.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    AC3 Encoding (Sound Forge)
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="handjob/handjob.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Handjob Encoding Guide
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="external-encode/external-encode.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Other Guides
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_6" >
        
          
          <label class="md-nav__link" for="__nav_6" id="__nav_6_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Blu-ray Disk Guide
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_6_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_6">
            <span class="md-nav__icon md-icon"></span>
            
  
    Blu-ray Disk Guide
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="fulldisc/fulldisc.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Demuxing Blu-ray Disks
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
      
      
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_7" >
        
          
          <label class="md-nav__link" for="__nav_7" id="__nav_7_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    REMUX Guide
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="1" aria-labelledby="__nav_7_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_7">
            <span class="md-nav__icon md-icon"></span>
            
  
    REMUX Guide
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="DV-remux/DV-remux.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Dolby Vision Handling
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="convert_lossless_audio/convert_lossless_audio.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Lossless Audio Handling
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="collecting_subtitles/collecting_subtitles.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Collecting Subtitles
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="remux_dvd/remux_dvd.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    DVDs
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    
    
    
    
    
    <li class="md-nav__item md-nav__item--nested">
      
        
        
        <input class="md-nav__toggle md-toggle " type="checkbox" id="__nav_7_5" >
        
          
          <label class="md-nav__link" for="__nav_7_5" id="__nav_7_5_label" tabindex="0">
            
  
  
  <span class="md-ellipsis">
    
  
    Subtitles & OCR
  

    
  </span>
  
  

            <span class="md-nav__icon md-icon"></span>
          </label>
        
        <nav class="md-nav" data-md-level="2" aria-labelledby="__nav_7_5_label" aria-expanded="false">
          <label class="md-nav__title" for="__nav_7_5">
            <span class="md-nav__icon md-icon"></span>
            
  
    Subtitles & OCR
  

          </label>
          <ul class="md-nav__list" data-md-scrollfix>
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="videosubfinder/videosubfinder.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    OCR from Hardsubs
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="video-subtitle-extractor/video-subtitle-extractor.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    OCR from Hardsubs (VSE)
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="SubExtractor/SubExtractor.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    OCR from DVD/IDX-SUB
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
              
                
  
  
  
  
    <li class="md-nav__item">
      <a href="positional_subtitles/positional_subtitles.html" class="md-nav__link">
        
  
  
  <span class="md-ellipsis">
    
  
    Positional Subtitles (ASS)
  

    
  </span>
  
  

      </a>
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

              
            
          </ul>
        </nav>
      
    </li>
  

    
  </ul>
</nav>
                  </div>
                </div>
              </div>
            
            
              
              <div class="md-sidebar md-sidebar--secondary" data-md-component="sidebar" data-md-type="toc" >
                <div class="md-sidebar__scrollwrap">
                  <div class="md-sidebar__inner">
                    

<nav class="md-nav md-nav--secondary" aria-label="Table of contents">
  
  
  
    
  
  
    <label class="md-nav__title" for="__toc">
      <span class="md-nav__icon md-icon"></span>
      Table of contents
    </label>
    <ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>
      
        <li class="md-nav__item">
  <a href="okami_default.html#start-here-recommended-beginner-path" class="md-nav__link">
    <span class="md-ellipsis">
      
        Start Here — Recommended Beginner Path
      
    </span>
  </a>
  
    <nav class="md-nav" aria-label="Start Here — Recommended Beginner Path">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="okami_default.html#1-general-information" class="md-nav__link">
    <span class="md-ellipsis">
      
        1. General Information
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#2-web-dl-basics" class="md-nav__link">
    <span class="md-ellipsis">
      
        2. WEB-DL Basics
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#3-beginner-encoding" class="md-nav__link">
    <span class="md-ellipsis">
      
        3. Beginner Encoding
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#4-essential-tools" class="md-nav__link">
    <span class="md-ellipsis">
      
        4. Essential Tools
      
    </span>
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#tools-you-will-use-frequently" class="md-nav__link">
    <span class="md-ellipsis">
      
        Tools You Will Use Frequently
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#guide-structure-overview" class="md-nav__link">
    <span class="md-ellipsis">
      
        Guide Structure Overview
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#general-information" class="md-nav__link">
    <span class="md-ellipsis">
      
        General Information
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#web-dl-handling-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        WEB-DL Handling Guide
      
    </span>
  </a>
  
    <nav class="md-nav" aria-label="WEB-DL Handling Guide">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="okami_default.html#basic" class="md-nav__link">
    <span class="md-ellipsis">
      
        Basic
      
    </span>
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="okami_default.html#advanced" class="md-nav__link">
    <span class="md-ellipsis">
      
        Advanced
      
    </span>
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#comparisons-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Comparisons Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#encoding-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Encoding Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#external-encoding-guides" class="md-nav__link">
    <span class="md-ellipsis">
      
        External Encoding Guides
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#blu-ray-disk-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        Blu-ray Disk Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#remux-guide" class="md-nav__link">
    <span class="md-ellipsis">
      
        REMUX Guide
      
    </span>
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="okami_default.html#quick-access-links" class="md-nav__link">
    <span class="md-ellipsis">
      
        Quick Access Links
      
    </span>
  </a>
  
</li>
      
    </ul>
  
</nav>
                  </div>
                </div>
              </div>
            
          
          
            <div class="md-content" data-md-component="content">
              
              <article class="md-content__inner md-typeset">
                
                  



<h1 id="kitsune-starter-guide">Kitsune Starter Guide<a class="headerlink" href="okami_default.html#kitsune-starter-guide" title="Permanent link">&para;</a></h1>
<p><em>A unified handbook for WEB-DLs, subtitles, audio syncing, encoding, comparisons, Blu-ray workflows, and remuxing.</em></p>
<p>Welcome to the <strong>Kitsune Guide</strong> — a comprehensive resource designed for everyone from beginners learning WEB-DL cleanup to advanced users mastering Dolby Vision, VapourSynth, Blu-ray demuxing, and REMUX workflows.</p>
<p>This documentation covers <strong>every stage</strong> of preparing high-quality media:</p>
<ul>
<li>General format knowledge (video, audio, subtitles, chapters)  </li>
<li>WEB-DL cleanup &amp; metadata correction  </li>
<li>Subtitle restoration and timing  </li>
<li>Audio syncing and provider mixing  </li>
<li>HDR / Dolby Vision workflows  </li>
<li>Encoding</li>
<li>Blu-ray demuxing &amp; analysis  </li>
<li>Avisynth / VapourSynth filtering  </li>
<li>Comparison methodology  </li>
<li>REMUX creation  </li>
</ul>
<div class="admonition info">
<p class="admonition-title">Platform compatibility</p>
<p>Many tools and workflows referenced throughout this guide are primarily designed for Windows.
While some tools may function on macOS or Linux via alternatives, wrappers, or command-line usage,
full feature parity and workflow compatibility are not guaranteed outside of Windows.</p>
</div>
<div class="admonition warning">
<p class="admonition-title">Anime is not a focus</p>
<p>Anime support in this guide is <strong>limited to basic WEB-DL handling and subtitle cleanup only</strong>.
Advanced anime workflows are <strong>explicitly out of scope</strong>.</p>
<p>This guide prioritizes general streaming, film, and television workflows.
Users seeking anime-specialized pipelines should use other resources.</p>
</div>
<hr />
<h2 id="start-here-recommended-beginner-path">Start Here — Recommended Beginner Path<a class="headerlink" href="okami_default.html#start-here-recommended-beginner-path" title="Permanent link">&para;</a></h2>
<h3 id="1-general-information"><strong>1. General Information</strong><a class="headerlink" href="okami_default.html#1-general-information" title="Permanent link">&para;</a></h3>
<p>These pages teach the foundational concepts:</p>
<ul>
<li><a href="video_codecs_and_containers/video_codecs_and_containers.html">Video Codecs &amp; Containers</a>  </li>
<li><a href="audio-codecs/audio-codecs.html">Audio Codecs</a>  </li>
<li><a href="subtitle-formats/subtitle-formats.html">Subtitle Formats</a>  </li>
<li><a href="chapters/chapters.html">What Are Chapters?</a>  </li>
</ul>
<h3 id="2-web-dl-basics"><strong>2. WEB-DL Basics</strong><a class="headerlink" href="okami_default.html#2-web-dl-basics" title="Permanent link">&para;</a></h3>
<p>Core cleanup and preparation steps:</p>
<ul>
<li><a href="Web-DL-home/Web-DL-home.html">WEB-DL Introduction</a>  </li>
<li><a href="mkvtoolnix/mkvtoolnix.html">MKVToolNix Cleanup</a>  </li>
<li><a href="subtitles/subtitles.html">Subtitle Handling</a>  </li>
<li><a href="mediainfo/mediainfo.html">MediaInfo Cleanup</a>  </li>
<li><a href="tv-ordering/tv-ordering.html">TV Show Ordering</a>  </li>
<li><a href="streaming-services/streaming-services.html">Streaming Services</a>  </li>
</ul>
<h3 id="3-beginner-encoding"><strong>3. Beginner Encoding</strong><a class="headerlink" href="okami_default.html#3-beginner-encoding" title="Permanent link">&para;</a></h3>
<p>Start learning how encodes are made:</p>
<ul>
<li><a href="introduction-encode/introduction-encode.html">Encoding Introduction</a>  </li>
<li><a href="Beginners-encode/Beginners-encode.html">Beginners Guide to Video Encoding</a>  </li>
<li><a href="source-encode/source-encode.html">Sourcing &amp; Verifying Content</a>  </li>
</ul>
<h3 id="4-essential-tools"><strong>4. Essential Tools</strong><a class="headerlink" href="okami_default.html#4-essential-tools" title="Permanent link">&para;</a></h3>
<ul>
<li><a href="tools/tools.html">Tools List</a>  </li>
<li><a href="scripts/scripts.html">Scripts</a>  </li>
</ul>
<hr />
<h2 id="tools-you-will-use-frequently">Tools You Will Use Frequently<a class="headerlink" href="okami_default.html#tools-you-will-use-frequently" title="Permanent link">&para;</a></h2>
<p>At a minimum:</p>
<ul>
<li><strong>MKVToolNix</strong> — muxing, cleanup, font attachments  </li>
<li><strong>Subtitle Edit</strong> — cleaning, format conversion, LayoutRes  </li>
<li><strong>MediaInfo</strong> — verifying codecs, HDR/DV metadata, audio formats  </li>
<li><strong>FFmpeg</strong> — audio delays, conversions, DV extraction  </li>
</ul>
<p>Full tool breakdown:<br />
<strong><a href="tools/tools.html">Tools &amp; Software</a></strong>  </p>
<hr />
<h2 id="guide-structure-overview">Guide Structure Overview<a class="headerlink" href="okami_default.html#guide-structure-overview" title="Permanent link">&para;</a></h2>
<p>The Guides ecosystem is divided into several major categories:</p>
<hr />
<h2 id="general-information">General Information<a class="headerlink" href="okami_default.html#general-information" title="Permanent link">&para;</a></h2>
<p>Foundation knowledge you should understand before modifying or encoding video:</p>
<ul>
<li><a href="video_codecs_and_containers/video_codecs_and_containers.html">Video Codecs &amp; Containers</a>  </li>
<li><a href="audio-codecs/audio-codecs.html">Audio Codecs</a>  </li>
<li><a href="subtitle-formats/subtitle-formats.html">Subtitle Formats</a>  </li>
<li><a href="chapters/chapters.html">Chapters Overview</a>  </li>
</ul>
<hr />
<h2 id="web-dl-handling-guide">WEB-DL Handling Guide<a class="headerlink" href="okami_default.html#web-dl-handling-guide" title="Permanent link">&para;</a></h2>
<p>Everything involved in improving and correcting WEB-DLs.</p>
<h3 id="basic"><strong>Basic</strong><a class="headerlink" href="okami_default.html#basic" title="Permanent link">&para;</a></h3>
<ul>
<li>Introduction  </li>
<li>MKVToolNix Cleanup  </li>
<li>Subtitle Handling  </li>
<li>MediaInfo Cleanup  </li>
<li>Chapters Handling (Advanced)  </li>
<li>TV Show Ordering  </li>
<li>Streaming Services  </li>
<li>Best Practices  </li>
</ul>
<h3 id="advanced"><strong>Advanced</strong><a class="headerlink" href="okami_default.html#advanced" title="Permanent link">&para;</a></h3>
<ul>
<li>Advanced Metadata  </li>
<li>Syncing Subtitles  </li>
<li>What Is HDR?  </li>
<li>DV HDR Hybrid  </li>
<li>Audio Syncing  </li>
<li>Crunchyroll Subtitle Restoration  </li>
</ul>
<hr />
<h2 id="comparisons-guide">Comparisons Guide<a class="headerlink" href="okami_default.html#comparisons-guide" title="Permanent link">&para;</a></h2>
<p>Learn how to properly compare:</p>
<ul>
<li>Filters  </li>
<li>Encode differences  </li>
<li>VapourSynth vs AviSynth  </li>
<li>Presets &amp; tuning  </li>
</ul>
<p>Includes:</p>
<ul>
<li><a href="comp/comp.html">Comparisons Introduction</a>  </li>
<li><a href="avisynth-guide/avisynth-guide.html">AviSynth+ Guide</a>  </li>
<li><a href="vapoursynth/vapoursynth.html">VapourSynth Guide</a>  </li>
</ul>
<hr />
<h2 id="encoding-guide">Encoding Guide<a class="headerlink" href="okami_default.html#encoding-guide" title="Permanent link">&para;</a></h2>
<p>Complete encoding workflows from beginner to advanced:</p>
<ul>
<li>Beginners Encoding  </li>
<li>Source verification  </li>
<li>Filtering basics  </li>
<li>Dolby Vision encoding  </li>
<li>External tools  </li>
</ul>
<p>Includes:</p>
<ul>
<li><a href="introduction-encode/introduction-encode.html">Encoding Introduction</a>  </li>
<li><a href="Beginners-encode/Beginners-encode.html">Beginners Guide to Video Encoding</a>  </li>
<li><a href="source-encode/source-encode.html">Sourcing and Verifying Content</a>  </li>
<li><a href="DV-encode/DV-encode.html">Dolby Vision Encode Guide</a>  </li>
</ul>
<hr />
<h2 id="external-encoding-guides">External Encoding Guides<a class="headerlink" href="okami_default.html#external-encoding-guides" title="Permanent link">&para;</a></h2>
<p>Community workflows and advanced external resources:</p>
<ul>
<li><a href="handjob/handjob.html">Handjob Encoding Guide</a>  </li>
<li><a href="external-encode/external-encode.html">External Links</a>  </li>
</ul>
<hr />
<h2 id="blu-ray-disk-guide">Blu-ray Disk Guide<a class="headerlink" href="okami_default.html#blu-ray-disk-guide" title="Permanent link">&para;</a></h2>
<ul>
<li><a href="fulldisc/fulldisc.html">Demuxing Blu-ray Disks</a>  </li>
</ul>
<p>Learn how to extract streams, chapters, subtitles, playlist information, and prepare clean sources for encoding or remuxing.</p>
<hr />
<h2 id="remux-guide">REMUX Guide<a class="headerlink" href="okami_default.html#remux-guide" title="Permanent link">&para;</a></h2>
<ul>
<li><a href="DV-remux/DV-remux.html">Dolby Vision Remuxing</a>  </li>
</ul>
<p>Advanced workflows for muxing DV, HDR10+, hybrid streams, and restoring correct metadata/flags.</p>
<hr />
<h2 id="quick-access-links">Quick Access Links<a class="headerlink" href="okami_default.html#quick-access-links" title="Permanent link">&para;</a></h2>
<ul>
<li><strong><a href="audio-syncing/audio-syncing.html">Audio Syncing</a></strong>  </li>
<li><strong><a href="Crunchyroll-subtitles/Crunchyroll-subtitles.html">Crunchyroll Subtitle Fixing</a></strong>  </li>
<li><strong><a href="hybrid-web-dl/hybrid-web-dl.html">DV HDR Hybrid Workflow</a></strong>  </li>
<li><strong><a href="Beginners-encode/Beginners-encode.html">Encoding for Beginners</a></strong>  </li>
<li><strong><a href="tools/tools.html">Tools List</a></strong>  </li>
</ul>
<hr />












                
              </article>
            </div>
          
          
<script>var target=document.getElementById(location.hash.slice(1));target&&target.name&&(target.checked=target.name.startsWith("__tabbed_"))</script>
        </div>
        
      </main>
      
        <footer class="md-footer">
  
    
      
      <nav class="md-footer__inner md-grid" aria-label="Footer" >
        
        
          
          <a href="video_codecs_and_containers/video_codecs_and_containers.html" class="md-footer__link md-footer__link--next" aria-label="Next: Video Codecs &amp; Containers">
            <div class="md-footer__title">
              <span class="md-footer__direction">
                Next
              </span>
              <div class="md-ellipsis">
                Video Codecs & Containers
              </div>
            </div>
            <div class="md-footer__button md-icon">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11z"/></svg>
            </div>
          </a>
        
      </nav>
    
  
  <div class="md-footer-meta md-typeset">
    <div class="md-footer-meta__inner md-grid">
      <div class="md-copyright">
  
  
</div>
      
    </div>
  </div>
</footer>
      
    </div>
    <div class="md-dialog" data-md-component="dialog">
      <div class="md-dialog__inner md-typeset"></div>
    </div>
    
    
    
      
      
      <script id="__config" type="application/json">{"annotate": null, "base": ".", "features": ["content.code.copy", "navigation.tracking", "navigation.footer", "search.suggest", "search.highlight", "content.image.zoom"], "search": "assets/javascripts/workers/search.2c215733.min.js", "tags": null, "translations": {"clipboard.copied": "Copied to clipboard", "clipboard.copy": "Copy to clipboard", "search.result.more.one": "1 more on this page", "search.result.more.other": "# more on this page", "search.result.none": "No matching documents", "search.result.one": "1 matching document", "search.result.other": "# matching documents", "search.result.placeholder": "Type to start searching", "search.result.term.missing": "Missing", "select.version": "Select version"}, "version": null}</script>
    
    
      <script src="assets/javascripts/bundle.79ae519e.min.js"></script>
      
        <script src="assets/custom.js"></script>
      
    
  </body>
</html>