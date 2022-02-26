import BrowserInfo from './browser-info';

export default function getBrowserInfo(): BrowserInfo {
    const colorDepth = validateColorDepth(screen.colorDepth);
    return {
        color_depth: colorDepth || 24,
        java_enabled: typeof navigator.javaEnabled === 'function' ? navigator.javaEnabled() : false,
        language: navigator.language || (navigator as any).userLanguage,
        screen_height: screen.height,
        screen_width: screen.width,
        time_zone_offset: new Date().getTimezoneOffset().toString(),
    };
}

function validateColorDepth(value) {
    let colorDepth = 24;
    
    const validColorsDepths = [1,4,8,15,16,24,32,48];
    
    if (value.includes(value)) {
        colorDepth = value;
    }
    
    return colorDepth;
}
