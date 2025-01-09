// This script adds a fixed div to the top-right corner of the page to display the current Bootstrap 5 breakpoint.
// change const breakpoints to your needs. 

document.addEventListener('DOMContentLoaded', function() {
            const sizeDisplay = document.createElement('div');
            sizeDisplay.style.position = 'fixed';
            sizeDisplay.style.top = '100px';
            sizeDisplay.style.right = '100px';
            sizeDisplay.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            sizeDisplay.style.padding = '5px';
            sizeDisplay.style.border = '1px solid #ccc';
            sizeDisplay.style.zIndex = '9999';
            document.body.appendChild(sizeDisplay);

            // Bootstrap 5 Breakpoints
            const breakpoints = {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
                xxl: 1400,
            };

            function getActiveBreakpoint() {
                const width = window.innerWidth;
                let activeBreakpoint = 'xs'; // Default to xs

                for (const bp in breakpoints) {
                    if (width >= breakpoints[bp]) {
                        activeBreakpoint = bp;
                    }
                }

                return activeBreakpoint
            }

            function updateSize() {
                const currentBreakpoint = getActiveBreakpoint()
                sizeDisplay.textContent = `Breakpoint: ${currentBreakpoint}`;
            }

            updateSize();
            window.addEventListener('resize', updateSize);
        });
