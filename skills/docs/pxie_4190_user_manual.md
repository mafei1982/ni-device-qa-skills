# PXIe-4190 User Manual

## PXIe-4190 Overview

The PXIe-4190 is an LCR Meter and SMU combo, available in 500 kHz and 2 MHz variants.  It is designed for high-precision impedance and DC measurements in PXI systems.

### Variant Identification
* **PXIe-4190 (2 MHz):** Shows "PXIe-4190 2MHz LCR Meter/SMU" on the front panel; appears as "NI PXIe-4190" in MAX.
* **PXIe-4190 (500 kHz):** Shows "NI PXIe-4190 500kHz LCR Meter/SMU" on the front panel; appears as "NI PXIe-4190 (500 kHz)" in MAX.

## Device Capabilities

The PXIe-4190 features the following capabilities:

* **Power Sourcing:** Up to 24 W per channel (40 W total across 4 channels).
* **Power Sinking:** * Up to 24 W DC per channel in chassis with >= 58 W slot cooling.
    * Up to 15 W per channel in other chassis.
    * *Note:* Sinking > 15 W requires transients to stay below 200 mW/µs.
* **SMU Current Ranges:** 3 A down to 1 µA.
* **SMU Voltage Ranges:** 8 V, 1 V.
* **LCR Sampling:** 1.8 MS/s maximum sampling rate; 100 kS/s update rate.
* **Remote Sense:** 4-wire remote sense and guard.
* **SourceAdapt technology** for customizable transient response.
* **Per-channel Power Allocation** capability.

*Figure 1. PXIe-4190 Quadrant Diagram*
![](images/ff133b1d65a752055b1a631cbb0c335dec8232e8bc945b5b6b74d1c19d8ddacb.jpg)

## Driver Support

NI recommends the newest version of the driver.

*Table 1. Earliest Driver Version Support*
| Driver Name | Earliest Version Support |
|---|---|
| NI-DCPower | 23.3 |

## Components of a PXIe-4190 System

The PXIe-4190 requires a system including:
* **PXI Chassis:** Houses the module. NI recommends chassis with >= 58 W slot cooling for full power capability.
* **PXI Controller:** Embedded or MXI system.
* **NI-DCPower Driver:** Version 23.3 or later.
* **Accessories:** SHDB13W6 series cables (D-SUB to BNC, Triax, or D-SUB).

## Installation and Configuration

### 1. Unpacking
Protect the module from ESD by grounding yourself. Inspect for damage and do not touch exposed pins.

### 2. Installing the Software
You must be an Administrator. Install an ADE (LabVIEW/CVI) before installing the NI-DCPower driver via NI Package Manager.

### 3. Hardware Installation
1. Power off the chassis.
2. Identify a supported slot (PXI Express Peripheral, Hybrid, or System Timing slots).
3. Insert the module into the slot guides and latch with the ejector handle.
4. Secure with front-panel screws to ensure mechanical and electrical stability.

*Figure: Chassis Compatibility Symbols*
![](images/fad05335f250babb59a6acb8b3f302fdf9094f916396b85700632e69277340d1.jpg)

## Front Panel and Pinout

*Figure: PXIe-4190 Front Panel*
![](images/b9035c4e18893492ab1e167ac480bb5d5f633597f509a644b50f00573a78ee6b.jpg)

1. LED Access Status
2. LED Voltage Status
3. GPIO Contacts (Pins 1-7)
4. Coaxial Contacts (A1-A6)
5. D-SUB Shell (Earth Ground)

### Connector Pinout Detail
*Figure: PXIe-4190 Connector Pinout*
![](images/43978b2c5a341850e0dbbbc8dfe9d581f07d8fa78853a099f2a748e9bad5aad8.jpg)

*Table: Signal Descriptions*
| Contact | LCR Mode Functionality | SMU Mode Functionality |
|---|---|---|
| Pin 1..7 | GPIO (5V, PFI 0..3, GND) | GPIO |
| A6 (Center/Outer) | HI CUR / Isolated Shield | LO / Isolated Shield |
| A5 (Center/Outer) | HI POT / Isolated Shield | Sense LO / Isolated Shield |
| A4 (Center/Outer) | CAL FORCE / Isolated Shield | CAL FORCE / Isolated Shield |
| A3 (Center/Outer) | CAL SENSE / Isolated Shield | CAL SENSE / Isolated Shield |
| A2 (Center/Outer) | LO POT / Isolated Shield | Sense HI / GUARD |
| A1 (Center/Outer) | LO CUR / Isolated Shield | HI / GUARD |

## LED Indicators

### Access LED
| Status | Device State |
|---|---|
| (Off) | Not Powered |
| Green | Powered |
| Amber | Device is being accessed |

### Voltage LED
| Status | Output Channel State |
|---|---|
| (Off) | Disconnected via relays |
| Green | Connected to voltage source |
| Red | Fault or Error condition |

## Verifying Installation in MAX

1. Launch MAX and expand **Devices and Interfaces**.
2. Locate the module under your chassis.
3. Perform a **Self-Test**. If it fails, ensure the module is calibrated.

## Block Diagram

*Figure: PXIe-4190 Block Diagram*
![](images/b7dc790ba19b86e0a63a6edbc32e72b67c3f6259b8483ebda7bae09b2e01ed3f.jpg)

## Cabling and Connection Guidelines

### Four-Terminal Pair (4TP) Connections
To minimize the effects of cable inductance on LCR measurements, you must use a **Four-Terminal Pair (4TP)** connection scheme. This provides a low-inductance path for the return current. 

**Implementation:** Ensure the four isolated shield conductors of the HI CUR, HI POT, LO CUR, and LO POT coaxial signals are shorted together **only at the load**.

*Figure: LCR Open/Short/Load Connections (SHDB13W6-4BNCM-LL)*
![](images/3d804b5686ae4e6bf16fc9439b0137e585a078aed934d0f6837e368859442d4f.jpg)
![](images/e7dbc0c7b4e35079405d0ac85f51952157dedc20f16e7ca88a4ea88382e77801.jpg)
![](images/8d76a35e92ce75101d7bcde951851c8f977ac0d669d8663689042d6d1e6ce6b1.jpg)

### Cable Pinouts

#### SHDB13W6-4BNCM-LL (D-SUB to Male BNC)
| D-SUB | BNC Conductor | LCR Mode | SMU Mode | Color |
|---|---|---|---|---|
| A6 | Inner / Outer | HI CUR / Isolated Shield | LO / Isolated Shield | Red |
| A5 | Inner / Outer | HI POT / Isolated Shield | Sense LO / Isolated Shield | Orange |
| A2 | Inner / Outer | LO POT / Isolated Shield | Sense HI / GUARD | Gray |
| A1 | Inner / Outer | LO CUR / Isolated Shield | HI / GUARD | Black |

#### SHDB13W6-4TriaxM-LL (D-SUB to Male Triax)
| D-SUB | Triax Conductor | LCR Mode | SMU Mode |
|---|---|---|---|
| A6 | Center / Inner Shield | HI CUR / Isolated Shield | LO / Isolated Shield |
| A5 | Center / Inner Shield | HI POT / Isolated Shield | Sense LO / Isolated Shield |
| A2 | Center / Inner Shield | LO POT / Isolated Shield | Sense HI / GUARD |
| A1 | Center / Inner Shield | LO CUR / Isolated Shield | HI / GUARD |

## Sourcing and Measuring

*Table: Software Settings for PXIe-4190 Operations*
| Operation | Output Function | Source Mode | Instrument Mode |
|---|---|---|---|
| Source Voltage / Measure | DC Voltage | Single Point or Sequence | SMU PS |
| Source Current / Measure | DC Current | Single Point or Sequence | SMU PS |

### Programming Flow
1. **Initialize:** Use `niDCPower Initialize With Independent Channels`.
2. **Configure Sourcing:** Set `Output Function` (DC Voltage/Current) and `Source Mode`.
3. **Configure Measuring:** Set `Measure When` (On Demand, Automatically After Source, or On Trigger).
4. **Initiate:** Call `Initiate With Channels` to start generating.
5. **Acquire:** Use `Measure Multiple` or `Fetch Multiple`.
6. **Close:** Free resources using `niDCPower Close`.

## LCR Measurement Challenges

### Negative Loss Measurements (Dissipation/Quality Factor)
Resistive losses are inherently positive; however, error sources can result in negative readings. 

* **Accuracy and Noise:** Measured values with small dissipation factors may fall into the negative region of the instrument's accuracy spec (Impedance phase center around -90°).
* **Compensation Influences:** Improper Short compensation (e.g., using a short with significant contact resistance) leads to overcorrection. Ensure you use a known low-impedance short.
* **Temperature Variation:** Phase response is sensitive to temperature. Always perform self-calibration if the ambient temperature has drifted by more than the specified limit.

### High Current, Low Frequency Testing
For testing µF-sized capacitors at high currents:
* **Valid Setup:** Connect all four shields of a single LCR meter at the DUT.
* **Invalid Setup:** Do not connect shields from one LCR meter to another if their LO sources are tied, as this creates common-mode current flow and errors.

*Figure: Valid vs Invalid DUT Configurations*
![](images/a628fc85d049d44bcd5de5838fd6e150677dc626fc91f46804bf2fccd307bd2c.jpg)
![](images/7a6361fbabb0050b2550684b2b43be88f42fba20a202f9a43109ff10520154b1.jpg)

## Self-Calibration
Perform self-calibration:
* After first installation.
* If a module in the same chassis is moved/added.
* If the ambient temperature changes.
* If more than 24 hours have passed since the last calibration.

## Troubleshooting
* **Device not in MAX:** Check Device Manager for a "PXIe-4190" entry under NI. Reinstall NI-DCPower if errors appear.
* **Self-Test Fails:** Perform a full self-calibration and reset the device in MAX before retrying.