'use client';

import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure dialog is fully rendered
      const timer = setTimeout(() => {
        const container = document.getElementById('resos-booking-widget-dialog');
        if (container && !container.querySelector('.resos-booking-widget')) {
          // Create the exact HTML structure from the image
          container.innerHTML = `
            <a class="resos-booking-widget" 
               href="https://oarlakeside.resos.com/booking" 
               data-lang="en" 
               data-restaurant-id="L3bST4yofNoBkosxy" 
               data-domain="oarlakeside.resos.com">Book a table</a>
            <div id="resos-booking-script-3" style="text-align:center;opacity:0.6;font-size:70%;margin-top:10px;">
              <a target="_blank" rel="noopener noreferrer" href="https://resos.com">Restaurant table management</a>
            </div>
          `;
          
          // Create and append the script exactly as shown in the image
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.innerHTML = `(function() {const scr=document.createElement("script");scr.src="https://oarlakeside.resos.com/embed/booking/widget.js?ts="+new Date().getTime();document.getElementById("resos-booking-script-3").appendChild(scr);})()`; 
          
          container.appendChild(script);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] overflow-y-visible">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-oar-black">Book Your Table</DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <div 
            id="resos-booking-widget-dialog"
            className="w-full min-h-[700px] bg-white rounded-lg p-4"
          >
            <div className="flex items-center justify-center h-32 text-gray-600">
              Loading booking widget...
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
