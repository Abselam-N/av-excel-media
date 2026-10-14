export interface EquipmentItem {
  name: string;
  category: string;
  specs: string[];
}

export interface EquipmentCategory {
  title: string;
  description: string;
  items: EquipmentItem[];
}

export const equipmentData: EquipmentCategory[] = [
  {
    title: "Cameras",
    description: "Professional cinema and mirrorless camera systems.",
    items: [
      {
        name: "SONY Alpha FX3",
        category: "Cameras",
        specs: [
          "12.1MP Full-Frame CMOS Exmor R Sensor",
          "UHD 4K up to 120 | 1080p up to 240",
          "Compact Form for Cage-Free Operation",
          "10-Bit 4:2:2 XAVC S-I, 16-Bit Raw Output",
        ],
      },
      {
        name: "SONY Alpha a7 IV",
        category: "Cameras",
        specs: [
          "33MP Full-Frame Exmor R CMOS BSI Sensor",
          "Up to 10 fps Shooting, ISO 100-51200",
          "4K 60p Video in 10-Bit, S-Cinetone",
          "3.68m-Dot EVF with 120 fps Refresh Rate",
        ],
      },
      {
        name: "Blackmagic PC 6k",
        category: "Cameras",
        specs: [
          "Bright 1500 cd/m² Tilting HDR LCD",
          "Super35 HDR Sensor, Gen 5 Color Science",
          "Record 6K 6144 x 3456 up to 50 fps",
          "Dual Native 400 & 3200 ISO to 25,600",
        ],
      },
    ],
  },
  {
    title: "Video Switchers",
    description: "Hardware vision mixers and streaming switchers.",
    items: [
      {
        name: "Blackmagic Design ATEM 2 M/E Constellation HD",
        category: "Video Switchers",
        specs: [
          "Supports 3G/HD-SDI at 10-Bit",
          "20 x 3G-SDI Inputs, 12 x 3G-SDI Outputs",
          "Up to 16-Multiview Monitoring Windows",
          "48-Channel Audio Mixer, 8 x Upstream, 2 x Downstream Keyers",
        ],
      },
      {
        name: "Blackmagic Design ATEM Mini Extreme",
        category: "Video Switchers",
        specs: [
          "8-Channel HDMI Live Streaming Switcher",
          "Supports up to 1080p60",
          "RTMP Streaming via Ethernet or USB-C",
          "11-Input, 2-Channel Audio Mixer",
        ],
      },
      {
        name: "OSEE Go Streamdeck",
        category: "Video Switchers",
        specs: [
          "Multisource Live Stream Switcher",
          "HDMI, NDI, RTMP, and SRT Support",
          "Built-In T-Bar with Stream Deck and Companion Support",
          "One Upstream and Two Downstream Keyers",
        ],
      },
    ],
  },
  {
    title: "Accessories",
    description: "Production controllers and wireless crew intercoms.",
    items: [
      {
        name: "Elgato Stream Deck XL",
        category: "Accessories",
        specs: [
          "32 Programmable LCD Keys",
          "Switch Scenes and Launch Media",
          "Visual Feedback Confirms Commands",
          "Windows and macOS Compatible",
        ],
      },
      {
        name: "Hollyland Solidcom C1 Pro",
        category: "Accessories",
        specs: [
          "Wireless Intercom System with Two-Mic Noise Cancellation",
          "True-Wireless Headset, No Bodypack",
          "1,100' 2-Way Operating Range",
          "Expandable Multi-Headset Configuration",
        ],
      },
    ],
  },
  {
    title: "Wireless Video Transmission System",
    description: "Wireless SDI and HDMI video links.",
    items: [
      {
        name: "Hollyland Pyro S 4K",
        category: "Wireless Video",
        specs: [
          "Transmit UHD 4K30 Video up to 1,300'",
          "HDMI/SDI Inputs and Outputs",
          "2.4 and 5 GHz Frequency Bands",
          "Supports UVC and RTMP for Streaming",
        ],
      },
      {
        name: "Accsoon CineView SE",
        category: "Wireless Video",
        specs: [
          "Dual-Band 2.4 & 5 GHz Wireless Transmission",
          "SDI & HDMI In/Out with Quad Antenna Array",
          "Low-Latency Wireless Monitoring",
          "App Monitoring with Zebra & LUT Support",
        ],
      },
      {
        name: "Hollyland Cosmo C1",
        category: "Wireless Video",
        specs: [
          "Transmitter HDMI/SDI Input, SDI Loop Out",
          "Receiver HDMI & 2 x SDI Outputs",
          "1,000' Line-of-Sight 1080p60 Transmission",
          "AES-128 Encryption, 40 ms Latency",
        ],
      },
    ],
  },
  {
    title: "Computers",
    description: "Workstations for video switching and streaming operations.",
    items: [
      {
        name: "Lenovo Legion 5i Gaming Laptop",
        category: "Computers",
        specs: [
          "2.4 GHz Intel Core Ultra 7 255HX 20-Core",
          "32GB DDR5 | 1TB M.2 SSD",
          "NVIDIA GeForce RTX 5060 GPU (8GB GDDR7)",
          "15.1\" 2560 x 1600 OLED 165 Hz Display",
        ],
      },
      {
        name: "Mac Mini M4",
        category: "Computers",
        specs: [
          "Apple M4 10-Core Chip",
          "16GB Unified RAM | 256GB SSD",
          "3 x Thunderbolt 4 | HDMI | Gigabit LAN",
          "macOS with Apple Intelligence",
        ],
      },
      {
        name: "MacBook Air M1",
        category: "Computers",
        specs: [
          "Apple M1 8-Core Chip",
          "8GB Unified RAM | 256GB SSD",
          "13.6\" Liquid Retina Display",
          "Silent fanless operation on production desks",
        ],
      },
    ],
  },
  {
    title: "Lighting Equipments",
    description: "Professional LED lighting fixtures and modifiers.",
    items: [
      {
        name: "Aputure LS C300d",
        category: "Lighting",
        specs: [
          "Output: 45,000 Lux at 3.3' w/ Reflector",
          "5600K CCT Daylight Balanced",
          "CRI 96 | TLCI 96 | CQS 95",
          "Onboard, Wireless, DMX & App Control",
        ],
      },
      {
        name: "Amaran 200x",
        category: "Lighting",
        specs: [
          "Bi-Color LED: Output 45,400 Lux @ 3.3' with Reflector",
          "2700-6500K CCT Range",
          "CRI 95 | TLCI 98 | SSI 89",
          "Onboard & Sidus Link App Control",
        ],
      },
      {
        name: "Godox Deep Parabolic Softbox (48\") & C-Stands",
        category: "Grip",
        specs: [
          "Deep Parabolic Design (Godox P120) with Diffusers",
          "40\" Grip Arm with 2.5\" Grip Head",
          "Durable Steel and Aluminum Construction",
          "Fast, Spring-Loaded Leg-Lock Collar",
        ],
      },
    ],
  },
  {
    title: "Cables & Converters",
    description: "Signal routing, conversion, and stage cabling.",
    items: [
      {
        name: "SDI to HDMI 3G / BiDirectional Micro Converters",
        category: "Converters",
        specs: [
          "Blackmagic Design Micro Converter SDI to HDMI 3G",
          "Blackmagic Micro Converter BiDirectional SDI/HDMI 3G",
          "Converts SDI cameras to HDMI monitors and screens",
          "Compact and rugged metal design",
        ],
      },
      {
        name: "SDI Cables",
        category: "Cabling",
        specs: [
          "75-ohm coaxial cables with locking BNC connectors",
          "Uncompressed, low-latency digital video transmission",
          "Supports long distances and various resolutions up to 4K",
        ],
      },
      {
        name: "Audio Cables",
        category: "Cabling",
        specs: [
          "XLR cables for balanced microphone and line runs",
          "TRS/TS cables for instruments and audio feeds",
          "Balanced low-noise stage cables",
        ],
      },
    ],
  },
];
