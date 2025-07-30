# AdminLTE Dashboard - Extracted Components

This directory contains the extracted AdminLTE dashboard converted into separate CSS, JS, and HTML files for use in different projects.

## Files Included

### HTML Files
- `dashboard.html` - Complete dashboard with inline JavaScript (easiest to use)
- `dashboard-external-js.html` - Dashboard with external JavaScript file (more modular)

### CSS Files
- `css/adminlte.css` - Full AdminLTE stylesheet (development version)
- `css/adminlte.min.css` - Minified AdminLTE stylesheet (production version)

### JavaScript Files
- `js/adminlte.js` - Core AdminLTE JavaScript functionality
- `js/adminlte.min.js` - Minified core AdminLTE JavaScript
- `js/dashboard-scripts.js` - Dashboard-specific JavaScript (charts, maps, etc.)

### Assets
- `assets/img/` - Image assets used by AdminLTE

## Usage

### Option 1: Complete Dashboard (Simplest)
Use `dashboard.html` - this includes everything needed and is ready to use.

```html
<!-- Just open dashboard.html in your browser or serve it -->
```

### Option 2: Modular Approach
Use `dashboard-external-js.html` with separate JavaScript files:

1. Include the HTML: `dashboard-external-js.html`
2. Ensure the CSS and JS files are properly linked
3. All JavaScript functionality is in `js/dashboard-scripts.js`

### Option 3: Custom Integration
Extract components as needed:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Include AdminLTE CSS -->
    <link rel="stylesheet" href="css/adminlte.min.css">
    
    <!-- External Dependencies -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <!-- ... other dependencies as needed ... -->
</head>
<body>
    <!-- Your custom HTML content -->
    
    <!-- Include AdminLTE JS -->
    <script src="js/adminlte.min.js"></script>
    
    <!-- Include dashboard functionality -->
    <script src="js/dashboard-scripts.js"></script>
</body>
</html>
```

## External Dependencies

The dashboard relies on these external CDN resources:

### Required Dependencies
- **Bootstrap 5** - UI framework
  - CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css`
  - JS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js`
- **Bootstrap Icons** - Icon font
  - CSS: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css`
- **Popper.js** - Positioning engine
  - JS: `https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js`

### Optional Dependencies (for full functionality)
- **OverlayScrollbars** - Custom scrollbars
  - CSS: `https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css`
  - JS: `https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js`
- **ApexCharts** - Charts library
  - CSS: `https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css`
  - JS: `https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js`
- **JSVectorMap** - Interactive maps
  - CSS: `https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css`
  - JS: `https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js`
  - World Map: `https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js`
- **SortableJS** - Drag and drop functionality
  - JS: `https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js`
- **Source Sans 3** - Font
  - CSS: `https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css`

## Customization

### Removing Features
If you don't need certain features, you can remove them:

1. **Charts**: Remove ApexCharts dependencies and related JavaScript
2. **Maps**: Remove JSVectorMap dependencies and related JavaScript
3. **Drag and Drop**: Remove SortableJS dependency
4. **Custom Scrollbars**: Remove OverlayScrollbars dependencies

### Adding Your Own Content
- Replace the demo content in the HTML files with your own
- Modify the `dashboard-scripts.js` file to change chart data and configuration
- Update the CSS for custom styling

## File Structure
```
dashboard-extracted/
├── dashboard.html                 # Complete dashboard (inline JS)
├── dashboard-external-js.html     # Dashboard (external JS)
├── README.md                      # This file
├── css/
│   ├── adminlte.css              # AdminLTE styles (development)
│   └── adminlte.min.css          # AdminLTE styles (production)
├── js/
│   ├── adminlte.js               # AdminLTE core (development)
│   ├── adminlte.min.js           # AdminLTE core (production)
│   └── dashboard-scripts.js       # Dashboard-specific functionality
└── assets/
    └── img/                       # Image assets
```

## License
This extracted dashboard maintains the same MIT license as AdminLTE v4.

## Support
For AdminLTE-specific issues, refer to the official AdminLTE documentation at https://adminlte.io