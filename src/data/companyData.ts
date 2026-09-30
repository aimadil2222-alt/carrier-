import heroFreightTruck from '../assets/images/hero_freight_truck_1790603556409.jpg';

export {
  heroFreightTruck,
};

export const COMPANY_INFO = {
  legalName: 'Veterans Health Community Health Support LLC',
  displayName: 'Veterans Health Community Health Support LLC',
  shortName: 'VETERANS HEALTH CARRIER',
  tagline: 'Freight Transportation | Carrier Services | Reliable Transportation',
  mcNumber: 'MC 1760354',
  rawMc: '1760354',
  dotNumber: '4463042',
  operatingAuthority: 'Active',
  phone: '(951) 413-4908',
  rawPhone: '+19514134908',
  email: 'slogan.idpa@gmail.com',
  secondaryEmail: 'leo.baker772@gmail.com',
  physicalAddress: {
    street: '1021 Ansel Rd',
    cityStateZip: 'Cleveland, OH 44103',
    full: '1021 Ansel Rd, Cleveland, OH 44103',
  },
  mailingAddress: {
    street: '1021 Ansel Rd',
    cityStateZip: 'Cleveland, OH 44103-2253',
    full: '1021 Ansel Rd, Cleveland, OH 44103-2253',
  },
};

export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
}

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: 'box-trucks',
    name: 'Box Trucks',
    description: 'Reliable transportation solutions for freight requiring box truck capacity.',
  },
  {
    id: 'hotshot',
    name: 'Hotshot',
    description: 'Flexible transportation solutions for time-sensitive and specialized freight.',
  },
  {
    id: 'dry-vans',
    name: 'Dry Vans',
    description: 'Dependable enclosed transportation for general freight.',
  },
  {
    id: 'other-equipment',
    name: 'Other Available Equipment',
    description: 'Additional transportation solutions coordinated as applicable to meet shipment needs.',
  },
];

export interface TransportationService {
  id: string;
  title: string;
  description: string;
}

export const TRANSPORTATION_SERVICES: TransportationService[] = [
  {
    id: 'full-truckload',
    title: 'Full Truckload Transportation',
    description: 'Dedicated point-to-point freight transportation for single-shipper loads with direct routing.',
  },
  {
    id: 'nationwide-freight',
    title: 'Nationwide Freight Transportation',
    description: 'Dependable carrier coverage connecting shippers and receivers across the United States.',
  },
  {
    id: 'expedited-transport',
    title: 'Expedited Transportation',
    description: 'Priority transit solutions engineered for urgent freight requiring prompt pickup and swift delivery.',
  },
  {
    id: 'time-sensitive',
    title: 'Time-Sensitive Freight',
    description: 'Disciplined scheduling and proactive status updates for cargo operating under tight delivery windows.',
  },
  {
    id: 'pickup-delivery',
    title: 'Reliable Pickup & Delivery',
    description: 'Consistent, on-schedule appointments handled with professional care from origin dock to final destination.',
  },
  {
    id: 'broker-shipper-transport',
    title: 'Freight Transportation for Brokers and Shippers',
    description: 'Seamless carrier partnerships built on clear communication, prompt check-ins, and accurate tracking.',
  },
];

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    id: 'reliable-pickup-delivery',
    title: 'Reliable Pickup & Delivery',
    description: 'Punctual appointments, secure loading, and dependable service throughout transit.',
  },
  {
    id: 'professional-communication',
    title: 'Professional Communication',
    description: 'Direct dispatch communication, rapid response times, and consistent status updates.',
  },
  {
    id: 'responsive-operations',
    title: 'Responsive Operations',
    description: 'Fast load acceptance, prompt paperwork return, and active operational oversight.',
  },
  {
    id: 'safety-focused',
    title: 'Safety-Focused Transportation',
    description: 'Committed to safe driving practices, thorough equipment checks, and FMCSA compliance.',
  },
  {
    id: 'nationwide-transport',
    title: 'Nationwide Transportation',
    description: 'Interstate carrier capabilities serving commercial shipping corridors across the U.S.',
  },
  {
    id: 'dependable-services',
    title: 'Dependable Freight Services',
    description: 'Consistent, trustworthy performance that freight brokers and shippers can rely on.',
  },
];
