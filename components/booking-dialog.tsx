'use client';

import { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && widgetContainerRef.current) {
      // Clear any existing content
      widgetContainerRef.current.innerHTML = '';
      
      // Create unique ID for this dialog instance
      const uniqueId = `booking-script-dialog-${Date.now()}`;
      
      // Create the widget HTML structure
      const widgetHTML = `
        <a class="resos-booking-widget" 
           href="https://oarlakeside.resos.com/booking" 
           data-lang="en" 
           data-restaurant-id="L3bST4yofNoBkosxy" 
           data-domain="oarlakeside.resos.com">
          Book a table
        </a>
        <div id="${uniqueId}" style="text-align:center;opacity:0.6;font-size:70%;margin-top:10px;">
          <a target="_blank" rel="noopener noreferrer" href="https://resos.com">Restaurant table management</a>
        </div>
      `;
      
      widgetContainerRef.current.innerHTML = widgetHTML;
      
      // Load the resOS script with a delay to ensure DOM is ready
      setTimeout(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          (function() {
            const scr = document.createElement("script");
            scr.src = "https://oarlakeside.resos.com/embed/booking/widget.js?ts=" + new Date().getTime();
            const container = document.getElementById("${uniqueId}");
            if (container) {
              container.appendChild(scr);
            }
          })()
        `;
        
        const scriptContainer = document.getElementById(uniqueId);
        if (scriptContainer) {
          scriptContainer.appendChild(script);
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-oar-green text-center">
            Book Your Table at OAR
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-4">
              Reserve your lakeside dining experience at OAR Restaurant. 
              Select your preferred date and time below.
            </p>
          </div>
          
          {/* resOS Booking widget container */}
          <div 
            ref={widgetContainerRef}
            className="booking-widget-container min-h-[400px] w-full"
            style={{ minHeight: '400px' }}
          >
            {/* Widget will be loaded here */}
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Loading booking widget...</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="px-8"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
