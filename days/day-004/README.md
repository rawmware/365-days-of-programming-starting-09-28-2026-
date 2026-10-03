# Day 4 — Cyber Castle

**Challenge date:** October 1, 2026  
**Kind:** Website / Security education

## What I made

Cyber Castle turns ten open-source security automations by [ChiefGyk3D](https://github.com/ChiefGyk3D) into interactive browser simulations. Visitors can switch between kid-friendly and technical explanations, explore a castle map, and run each helper without scanning, attacking, or connecting to a real system.

The application is hosted at [rawmware.com/365-days/projects/day-004](https://rawmware.com/365-days/projects/day-004). Its editable source lives in the public [rawmware/security-automations-by-me](https://github.com/rawmware/security-automations-by-me) repository.

## What is included

- A kid mode that explains defensive security with a castle metaphor.
- A grown-up mode covering IDS/IPS, SIEM, SOAR, identity events, patching, split tunnelling, Bluetooth threat hunting, typosquat intelligence, and hardened CI.
- Ten interactive, browser-only simulations with links to the real open-source projects that inspired them.
- An optional sound-effects control and a responsive layout for desktop and mobile.

## Safety and limitations

Every demo is a simulation. The page does not scan networks, attack systems, or send visitor input to a backend. The original security tools and engineering belong to their respective authors; Cyber Castle is an educational interface and is not affiliated with ChiefGyk3D.

## Verification

- The challenge manifest validator passes with Day 4 included.
- The local RawmWare archive lists Day 4 as published and links directly to the hosted application route.
- The application loads from the production static-site structure with its CSS, JavaScript, and icon available beneath the Day 4 route.
