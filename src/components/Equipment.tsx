import React from 'react';
import { EQUIPMENT_LIST } from '../data/companyData';
import { ArrowRight, Truck } from 'lucide-react';

interface EquipmentProps {
  onOpenRateModalWithEquipment: (equipmentName: string) => void;
}

export const Equipment: React.FC<EquipmentProps> = ({ onOpenRateModalWithEquipment }) => {
  return (
    <section id="equipment" className="w-full py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-1 bg-[#FFD13B]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0D4F5C]">
              Commercial Fleet Capabilities
            </span>
            <span className="w-6 h-1 bg-[#FFD13B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D4F5C] uppercase tracking-tight font-logo">
            Our Equipment
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            Our transportation equipment includes box trucks, hotshot, dry vans, and other applicable freight equipment.
          </p>
        </div>

        {/* Equipment Cards Grid - Written Boxes without pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EQUIPMENT_LIST.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg border-2 border-slate-200 hover:border-[#0D4F5C] shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#0D4F5C]/10 text-[#0D4F5C] flex items-center justify-center group-hover:bg-[#FFD13B] transition-colors">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="bg-[#0D4F5C] text-[#FFD13B] font-bold text-[10px] px-2 py-0.5 uppercase tracking-wider rounded-xs">
                    Equipment
                  </span>
                </div>

                {/* Equipment Name */}
                <h3 className="text-base sm:text-lg font-black text-[#0D4F5C] uppercase tracking-tight mb-2">
                  {item.name}
                </h3>

                {/* Equipment Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onOpenRateModalWithEquipment(item.name)}
                  className="w-full bg-slate-100 hover:bg-[#FFD13B] hover:text-[#0D4F5C] text-slate-800 text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-none transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <span>Request Rate</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Equipment Verification Note */}
        <div className="mt-6 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-center text-xs text-slate-600">
          <span className="font-bold text-slate-800">Need specific equipment for your shipping lane?</span> We coordinate with brokers and shippers to provide the right transportation equipment for each load.
        </div>

      </div>
    </section>
  );
};
