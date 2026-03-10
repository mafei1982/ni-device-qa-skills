# PXIe-4137 User Manual

The PXIe-4137 User Manual provides detailed descriptions of product functionality and step-by-step processes for use.

## PXIe-4137 Overview

The PXIe-4137 is a single-channel, four-quadrant system source measure unit (SMU) featuring enhanced capabilities including programmable compensation using SourceAdapt technology; it is designed for engineers building PXI systems that require voltage or current sourcing and measurement.  Use the PXIe-4137 in applications including manufacturing test, board-level test, and lab characterization with devices such as ICs, power management ICs (PMICs), RFICs, and discrete devices including LEDs and optical transceivers.

> **Note:** In this document, the PXIe-4137 (40W) and PXIe-4137 (20W) are referred to inclusively as the PXIe-4137. The information in this document applies to all versions of the PXIe-4137 unless otherwise specified. The PXIe-4137 (40W) shows PXIe-4137 40W System SMU, and the PXIe-4137 (20W) shows PXIe-4137 Precision System SMU on the front panel.

## Device Capabilities

The PXIe-4137 is a high-precision system SMU that has the following features and capabilities:

* 40 W DC or 20 W DC output, 480 W extended pulse boundary
* 100 fA current sensitivity
* Current ranges: 3 A (pulse), 1 A, 100 mA, 10 mA, 1 mA, 100 µA, 10 µA, 1 µA
* Voltage ranges: 200 V, 20 V, 6 V, 600 mV
* 4-wire remote sense and guard
* 1.8 MS/s maximum sampling rate and 100 kS/s maximum update rate
* SourceAdapt technology

*Figure 1. PXIe-4137 (20W) Quadrant Diagram*
![](images/3b98b0ba0a925b3518d1e89d339f83a409af6be8ff4af1de0e4a8f1f65184626.jpg)

*Legend*
![](images/eb234a133ac3730ab56cde7bceabb35667cddb570cad6c3bb6e10cf3f1ed64e1.jpg)
Pulse or DC

![](images/b4ee88d1ac47329a374c80facf768015b35e2f75cee71d69956be18bb352a925.jpg)
Pulse only, max. 1 ms, 5% duty cycle

![](images/d8bc23f70ff04c903e10c439d916f37ce328d0bda3a30e58eb2eaf3a8495f231.jpg)
Pulse only, max. 400 us, 2% duty cycle

*Figure 2. PXIe-4137 (40W) Quadrant Diagram*
![](images/bf695728d454d5f8841076d3247291a62813d15b0263d7768e657706f7a2d8b2.jpg)

*Legend*
![](images/a68f8ca739a88e21c826db46ccb44a4d35e3938e928d3b5e93afa6b7e0f48280.jpg)
Pulse or DC, up to 40 W

![](images/fd0c14d1c293a1caa9e6c043e94d34ac451b4e5d953bc6c4af2375d386216288.jpg)
Pulse only, up to 480 W

## Driver Support

NI recommends that you use the newest version of the driver for your module.

*Table 1. Earliest Driver Version Support*
| Variant | Driver Name | Earliest Version Support |
|---|---|---|
| PXIe-4137 (20 W) | NI-DCPower | 15.1 |
| PXIe-4137 (40 W) | NI-DCPower | 20.7 |

## Components of a PXIe-4137 System

The PXIe-4137 is designed for use in a system that includes other hardware components, drivers, and software.

> **Notice:** A system and the surrounding environment must meet the requirements defined in PXIe-4137 Specifications.

The following list defines the minimum required hardware and software for a system that includes a PXIe-4137.

*Table 2. System Components*
| Component | Description and Recommendations |
|---|---|
| PXI Chassis | Houses the PXIe-4137 and supplies power, communication, and timing for PXIe-4137 functions. <br>**Note:** NI recommends installing the PXIe-4137 (40W) in a chassis with slot cooling capacity >= 58 W for increased module capability. When installing the PXIe-4137 in a chassis with slot cooling capacity = 38 W, set the chassis fan speed to HIGH. |
| PXI Controller or PXI Remote Control Module | You can install a PXI controller or a PXI remote control (MXI) module depending on your system requirements. These components, installed in the same PXI chassis as the PXIe-4137, interface with the instrument using NI device drivers. |
| SMU | Your SMU instrument. |
| Cables and Accessories | Cables and accessories allow connectivity to/from your instrument for measurements. |
| NI-DCPower Driver | Instrument driver software that provides functions to interact with the PXIe-4137 and execute measurements. <br>**Note:** Always use the most current version of NI-DCPower with the PXIe-4137. |
| NI Applications | NI-DCPower offers driver support for: InstrumentStudio, LabVIEW, LabWindows/CVI, C/C++, .NET, Python. |

## Cables and Accessories

NI recommends using the following cables and accessories with your module.

*Table 3. Cables and Accessories*
| Accessory Description | Notes | Part Number |
|---|---|---|
| Screw Terminal Connector Kit with Interlock Connector for PXIe-4136/4137/4138/4139 SMUs | Ships with the PXIe-4137 | 784068-01 |
| SA-413B, Banana Jack Adapter for PXIe-4136/4137/4138/4139 SMUs | — | 786818-01 |
| SH8M-7F-LL Low-Leakage Cable | 1 m and 2 m lengths | 130123-01/02 |
| Safety Interlock Connector | — | Phoenix Contact 1708595 |
| Safety Interlock Cable | 8 in. and 48 in. lengths | 142998-08/48 |
| PXI slot blockers | Set of 5 | 199198-01 |

> **Note:** Visit NI SMU Cable and Accessory Compatibility at ni.com/r/cable-compatibility for more information about supported cables and accessories for your instrument.

### Additional Cabling and Accessory Guidance

NI recommends that you install PXI slot blockers (p/n 199198-01) to fill empty instrument slots in a PXI chassis. 

## Programming Options

You can generate signals interactively using InstrumentStudio or you can use the NI-DCPower instrument driver to program your device in the supported ADE of your choice.

* **InstrumentStudio**: A software-based soft front panel application that allows you to perform interactive measurements on several different device types in a single program.
* **NI-DCPower Instrument Driver**: The NI-DCPower API configures and operates the module hardware and performs basic acquisition and measurement functions.
    * **LabVIEW**: Available on the LabVIEW Functions palette at Measurement I/O » NI-DCPower. 
    * **LabVIEW NXG**: Available from the diagram at Hardware Interfaces » Electronic Test » NI-DCPower. 
    * **LabWindows/CVI**: Available at Program Files » IVI Foundation » IVI » Drivers » NI-DCPower. 
    * **C/C++**: Available at Program Files » IVI Foundation » IVI. 
    * **Python**: Refer to the NI-DCPower Python Documentation.

## Theory of Operation

The PXIe-4137 combines a digital control loop architecture, known as SourceAdapt, with precision electronics to implement constant voltage (CV) or constant current (CC) sources with built-in measurement of voltage and current output.

One significant advantage of SourceAdapt is the ability to make precise adjustments to the control loop to customize the SMU transient response to any load, so you can achieve an ideal transient response with minimum rise times and no overshoots or oscillations.

The PXIe-4137 can operate in either CV mode or CC mode:
* **In CV mode:** The device acts as a precision voltage source that holds the voltage across the selected voltage sense points constant with respect to load changes as long as load current is below the programmed current limit.
* **In CC mode:** The device acts as a precision current source that holds the current across the load constant with respect to load changes as long as load voltage is below the programmed voltage limit.

A measurement circuit on the PXIe-4137 can simultaneously read the voltage and current values using two integrating analog-to-digital converters. Voltage is measured differentially between the HI and LO terminals (local sense) or between the Sense HI and Sense LO terminals (remote sense) based on the programmed voltage sense location. Remote sense is used to compensate for voltage drop that results from resistance in cables, connectors and switches. Current is measured using shunt resistors in series with the HI terminal.

Additionally, the PXIe-4137 features a Guard terminal on the output connector. You can use the Guard terminal to implement guarding techniques against parasitic leakage resistance and capacitance in cabling and test fixtures.

The output terminals of the PXIe-4137 are electrically isolated from chassis ground through a 250 V DC, Category I isolation barrier. This allows any SMU terminal to float ±250 V DC with respect to chassis ground.

### Block Diagram

*Figure 3. PXIe-4137 Block Diagram*
![](images/cf3296e75a9c5ac252b9774ed056937031c80ad5f546b5dc250a35a42124b5af.jpg)

## Front Panel

*Figure 4. PXIe-4137 Front Panel*
![](images/6f3ca8be99dd4772c8d0c17039bf83c81ca5ffb9271c5f1d8aaacbc306fe48c3.jpg)

1. Access LED
2. Voltage LED
3. Connector
4. Safety Interlock Connector

## Safety Interlock

When integrated into an appropriate system, the safety interlock protects users from hazardous voltages. Correct use of the safety interlock system is required to output up to the maximum voltage of the instrument; you can still operate the instrument at lower voltages without using the safety interlock.

## PXIe-4137 Pinout

*Figure 5. PXIe-4137 Connector Pinout*
![](images/c2b04ae97d641739dfeacee264449c7c24832adcbfca4f69a41080074cde067e.jpg)

*Table 4. Signal Descriptions*
| Signal Name | Description |
|---|---|
| Output LO | LO force terminal connected to channel power stage. Positive polarity is defined as voltage measured on HI > LO. |
| Sense LO | Voltage remote sense input terminals. Used to compensate for IR voltage drops in cable leads, connectors, and switches. |
| Guard | Buffered output that follows the voltage of the HI force terminal. Used to drive shield conductors surrounding HI force and Sense HI conductors to minimize leakage. |
| Output HI | HI force terminal connected to channel power stage. Positive polarity is defined as voltage measured on HI > LO. |
| Sense HI | Voltage remote sense input terminals. Used to compensate for IR voltage drops in cable leads, connectors, and switches. |

## LED Indicators

### Access LED
*Table 5. Access LED Indicator Status*
| Status Indicator | Device State |
|---|---|
| (Off) | Not Powered |
| Green | Powered |
| Amber | Device is being accessed |

### Voltage LED
*Table 6. Voltage LED Status Indicator*
| Status Indicator | Output Channel State | Safety Interlock State |
|---|---|---|
| (Off) | The device output is disconnected from the voltage generation source through output disconnect relays. | Either open or closed. |
| Green | The device output is connected to the voltage generation source and <42.4 V DC is present. | Open; only <42.4 V DC is present. |
| Amber | The device output is connected to the voltage generation source and >=42.4 V DC is present. | Closed; instrument can output up to its maximum voltage. |
| Red | The device has a fault or is in error due to the voltage generated or measured by the device. | Open, and instrument is programmed to output >=42.4 V DC. |

## Installation and Configuration

Complete the following steps to install the PXIe-4137 into a chassis and prepare it for use.

1. **Unpacking the Kit:** Take precautions to prevent electrostatic discharge (ESD) from damaging the device.
2. **Installing the Software:** Install an ADE and the NI-DCPower driver.
3. **Installing the PXIe-4137 into a Chassis:** Place the module into a supported PXI Express slot and secure the screws. 
    *Figure 7. Module Installation*
    ![](images/c807b76ab3e13ea4c664b27338263b90c6ccd4fd0d3c724a4caa2f903e7d8755.jpg)
4. **Selecting an Output Accessory for Your Application:** Choose between the standard Output Connector or the SA-413B banana jack adapter.
5. **Verifying the Installation in MAX:** Use Measurement & Automation Explorer (MAX) to configure and self-test your NI hardware.
6. **Self-Calibrating the PXIe-4137 in MAX:** Self-calibration adjusts the PXIe-4137 for variations in the module environment.

### Kit Contents
*Figure 6. PXIe-4137 Kit Contents*
![](images/5f4030582168ae9209882f7b1c819c85282909b23774ed9d80dae639ee75084c.jpg)
![](images/ef433a5018d9e46ec1c62e560777aa789d0508f20ac587ea528264bb52e946e2.jpg)
![](images/2ef0aefcdff427d8efdf14aba964a4c22cc83838847495af3fdbab6b28d9e895.jpg)
![](images/253d93a22b1309993428a8286af8378b129a445ef6aee82ce75775c1fb903a8e.jpg)

1. PXIe-4137 Module
2. PXIe-4137 Output Connector Assembly
3. Safety Interlock Input Connector
4. Documentation

### Installing the Output Connector Assembly onto the PXIe-4137
*Figure 8. PXIe-4137 Output Connector Preparation*
![](images/192d773f3a7d857733c0485a9478acf5e872e5a6b9e5a6761f5283062b169942.jpg)

### Installing the SA-413B on the PXIe-4137
The SA-413B is an optional adapter that enables banana cable connectivity.
*Figure 9. SA-413B Front Panel*
![](images/1b870e936b4aea2de3c7771dd38727e4b82cadf3482221e30f1d6570b60f4ba5.jpg)

## Connecting Signals to the PXIe-4137

* Use the **Output HI** and **Output LO** terminals for local sense measurements.
* Use the **Output HI**, **Output LO**, **Sense HI**, and **Sense LO** terminals for remote sense measurements.
* Use the **Guard** terminals to remove the effects of leakage currents and parasitic capacitance.

### Making Local Sense Measurements
Local sense measurements use a single set of leads for output and voltage measurement. 

*Figure 10. Connecting Signals for Local Sense Measurement*
![](images/756205a020550554e34e649b8dd39accb869489a50117fa584006cbbd8dcee12.jpg)

*Figure 11. Connecting Local Sense Hardware with a Remote Sense Channel Configuration*
![](images/0e8d1b07d776476fdd5942eebb899371a9497c7be025d5e752bdc560bae386a0.jpg)

### Making Remote Sense Measurements
Remote source measurements, sometimes referred to as 4-wire sense, require 4-wire connections to the DUT. 

*Figure 12. Connecting for a Remote Sense Measurement*
![](images/53b356f977b448b610283e7c7925fb328acb5e63074fff4232385b5dfd727009.jpg)
![](images/4f480fb18b3edcbdef03edb234fc27cf2f2bfa1dd9a96b4129e70bad8942e618.jpg)

### Using the Guard Terminals
Guarding is a technique used to remove the effects of leakage currents and parasitic capacitances between HI and LO.

*Figure 13. Leakage without Guarding (IMeasured = ILoad + IL)*
![](images/e6b972b4ba31a48d81e3986b83ec05a810cfc67e2ef17b998d13a80f5e867a45.jpg)

*Figure 14. Reducing Leakage with Guarding (IMeasured = ILoad)*
![](images/8dd7305b6fab8a5a0576a68d7d6f40a20d5f3f0a3a453117027623cb5c3bcf53.jpg)

### Minimizing Voltage Drop Loss when Cabling
To minimize voltage drop caused by cabling:
* Keep each wire pair as short as possible.
* Use the thickest wire gauge appropriate for your application (NI recommends 18 AWG or lower).

*Table 7. Wire Gauge and Noise*
| AWG Rating | mΩ/m (mΩ/ft) |
|---|---|
| 10 | 3.3 (1.0) |
| 12 | 5.2 (1.6) |
| 14 | 8.3 (2.5) |
| 16 | 13.2 (4.0) |
| 18 | 21.0 (6.4) |
| 20 | 33.5 (10.2) |
| 22 | 52.8 (16.1) |
| 24 | 84.3 (25.7) |
| 26 | 133.9 (40.8) |
| 28 | 212.9 (64.9) |

**Calculating Voltage Drop:**
Operating within the recommended current rating, determine the maximum voltage drop across a 1 m, 16 AWG wire carrying 1 A:
V = I × R
V = 1 A × (13.2 mΩ/m × 1 m)
V = 13.2 mV

### Cabling for Low-Level Measurements
Low-level measurements require tight control over system setup and cabling.
* Always limit the length of the cables involved in your system setup.
* Keep the current return path as close as possible to the current source path by using twisted pair cabling.
* Use shielded cables, such as coaxial cables or triaxial cables.

## Source Modes

The PXIe-4137 channels can generate voltage and current in **Single Point** or **Sequence** source mode. Within these modes, you can output DC voltage, DC current, Pulse voltage, or Pulse current.

### Single Point Source Mode
In Single Point source mode, the source unit applies a single source configuration when it enters the Running state. You can update the source configuration dynamically (when a channel is in the Running state).

### Sequence Source Mode
In Sequence source mode, the source unit steps through a predetermined set of source configurations without interaction from the host system, making the changes deterministic.
* **Simple sequence:** Allows you to define a series of voltage/current outputs and source delays for a single channel.
* **Advanced sequence:** Allows you to define numerous properties per sequence step for any number of channels.

> **Note:** You cannot program both simple sequences and advanced sequences within the same session.

*Table: Simple Sequences versus Advanced Sequences*
| Task | Simple Sequencing | Advanced Sequencing |
|---|---|---|
| **How to create** | Set the Source Mode to Sequence and use the Set Sequence function | Set the Source Mode to Sequence; use the Create Advanced Sequence With Channels function |
| **What you can configure** | Voltage/current levels per step, along with Source Delay | A wide variety of NI-DCPower properties per step |
| **Channels applied to** | LabVIEW NXG: single channel only. Other: any number | Any number of channels |
| **Controlling initial state**| Manually configure channel(s) before calling Set Sequence | Create a Commit step to configure channels to a known state |

## Pulse Outputs

The PXIe-4137 can output configurable current pulses and/or voltage pulses in either Single Point or Sequence source mode. 

The PXIe-4137 supports **in-range pulsing** (pulses that fall within standard DC range limits) and **extended range pulsing** (pulses that fall outside DC range limits for either current or power, subject to PXIe-4137 specification limits).

## Sourcing Voltage and Current

*Table 8. Software Settings for PXIe-4137 Source and Measure Operations*
| PXIe-4137 Operation | Output Function | Source Mode |
|---|---|---|
| Source voltage / Measure current or voltage | DC Voltage | Single Point or Sequence |
| Source current / Measure voltage or current | DC Current | Single Point or Sequence |

Complete the following general steps to source current or voltage:

### 1. Initialize a Session
Use the `niDCPower Initialize With Independent Channels` VI or function. This returns an instrument handle with the session configured to a known state.

### 2. Configure the PXIe-4137 for Sourcing
Use the `Configure Output Function` to set the output type (DC Voltage or DC Current). Then configure the source mode with `Configure Source Mode With Channels`. 

### 3. Configure the PXIe-4137 for Measuring
Use the `Measure When` property to configure how NI-DCPower takes measurements:
* **On Demand:** Acquire measurements on demand using `Measure Multiple`.
* **Automatically after Source Complete:** Acquires a measurement after every source operation and stores it in a buffer. Use `Fetch Multiple` to retrieve.
* **On Measure Trigger:** Acquires a measurement when it receives a Measure trigger.

### 4. Configure Triggers and Events
**Named trigger types in NI-DCPower:**
* **Start:** Channel waits upon entering Running state to begin source/measure operations.
* **Source:** Causes a channel to modify the source configuration.
* **Measure:** Causes a channel to take a measurement.
* **Sequence Advance:** Causes the channel to begin the next iteration of a sequence.
* **Pulse:** Causes a channel to transition from the pulse bias level to the pulse level.

**Trigger Signal Conditions:**
You can configure triggers to operate based on a Digital Edge (a rising/falling edge on a physical trigger line), a Software Edge, or None (Disabled). 

*Figure 16. Digital Edge Trigger*
![](images/15e372c322dd2d22ee6fa4a4ee4d399c57fd4559e0f4d169c5a154f274e80368.jpg)

**Events:**
Events indicate an operation was completed (e.g., *Source Complete*, *Sequence Iteration Complete*, *Sequence Engine Done*, *Measure Complete*, *Ready for Pulse Trigger*, *Pulse Complete*). Pulse width for events on the PXIe instrument range from 250 ns to 1.6 µs.

### 5. Initiate the PXIe-4137
Call `Initiate With Channels` to apply the configuration and start generating.

### 6. Acquire Measurements
In Single Point mode, use `Measure Multiple`. When configured for sequence or pulse, fetch measurements from the buffer using `Fetch Multiple`.

### 7. Cease Generation
* **Disabling the output:** Set `Output Enabled` to False (generates 0 V).
* **Disconnecting the output:** Set `Output Connected` to False (opens physical relay). Do not set this to True with a non-zero voltage connected to avoid relay wear.

### 8. Close the Session
Use `niDCPower Close` to free resources.

## NI-DCPower Synchronization Methods

* **Software-Based Synchronization:** Accuracy in tens of milliseconds.
* **Time-Based Synchronization:** Uses GPS, 1588, or IRIG-B. Accuracy <100 ns + instrument trigger delay and jitter.
* **Signal-Based Synchronization:** Uses PXI Trigger Routing or External Triggering. Accuracy in tens of nanoseconds + instrument trigger delay and jitter.

## PXIe-4137 Operating Guidelines

### Sourcing and Sinking
Quadrants I and III represent sourcing power (delivering power to a load), while Quadrants II and IV represent sinking power (absorbing power).

*Quadrant Diagram*
![](images/5ae980e2b28b2d0bc8639ae2c9e671d6b97e552c14787277c1986de44ad1cd72.jpg)

### Reverse Current Loads
To avoid reverse current loads passing back into the SMU, use a bleed-off load to preload the output of the device.

![](images/77eb28a67b38af8800329ab3ff3ad12f2cd24d047c49c5a795b91ed0c5fb1105.jpg)

> **Caution:** Power supplies not designed for four-quadrant operation may become damaged if reverse currents are applied.

![](images/fefc61e5815a41db066a5bf8503cd41d899176c1f090155a8ffd6f1f00614813.jpg)

### Overload Protection (OLP)
The PXIe-4137 is protected against **Overcurrent (OCP)** and **Overvoltage (OVP)** conditions. When limits are exceeded, the output disconnects to protect the instrument and DUT. Reset the device in MAX or use the `Reset Device` function to clear these errors.

### Transient Response
Transient response describes how a supply responds to a sudden change in load.

*Figure 17. Transient Response*
![](images/86ddb7f501e6da5f506472b659e6d8eb8fb907264077e4980bb5911fc1175d70.jpg)

*Table 11. Transient Response Settings*
| Setting | Description |
|---|---|
| **Slow** | Increases stability while decreasing speed. Use for unstable loads. |
| **Normal** | (Default) Balances stability and speed. |
| **Fast** | Increases speed for benign loads. |
| **Custom** | Allows freedom to adjust compensation parameters for specific loads. |

*Table 12. Compensation Parameters (for Custom Transient Response)*
| Compensation Parameter | Mode | Details |
|---|---|---|
| **Gain Bandwidth (GBW)** | Constant Voltage / Constant Current | Set the GBW. Higher values give faster response but poorer stability (10 Hz to 20 MHz). |
| **Compensation Frequency** | Both | Geometric mean of the pole and zero frequency (20 Hz to 20 MHz). |
| **Pole-Zero Ratio** | Both | Set the ratio of the pole frequency to the zero frequency (0.125 to 8.0). |

### Ranges and Overranging
When `Overranging Enabled` is set to TRUE, the valid values for the programmed output may be extended from 100% to 105% for the output range.

![](images/6d21adefbc64fab6614c5e09d71afeac05d738449248b057998e10bd55d8c26b.jpg)

*Table 13. Supported Configurable Output Ranges*
| Range | VI | Function |
|---|---|---|
| Voltage level range | niDCPower Configure Voltage Level Range | niDCPower_ConfigurationVoltageLevelRange |
| Voltage limit range | niDCPower Configure Voltage Limit Range | niDCPower_ConfigurationVoltageLimitRange |
| Current level range | niDCPower Configure Current Level Range | niDCPower_ConfigurationCurrentLevelRange |
| Current limit range | niDCPower Configure Current Limit Range | niDCPower_ConfigurationLimitRange |

### Noise and AC Rejection
Noise can be characterized as normal-mode or common-mode noise. You can reject AC power-line noise by adjusting the measurement aperture time to be a multiple of the AC noise period (e.g., 1 PLC for 60 Hz).

*Figure 18. Normal Noise Rejection*
![](images/9e2130f6f4d999cb69734fcaf4d416530f7b7dad997a28978d8e0e8aa05f6437.jpg)

*Figure 19. Normal Noise Rejection by Frequency*
![](images/70f63bd284e823bcba6adbe1059143e33b0d9bfff9adfd98877278738f45c0e7.jpg)

*Figure 20. Second-Order Noise Rejection*
![](images/b9a2d6b46520fa242083f4ddbddc4faa2183f5710b3ed41358dd1305ffc3346e.jpg)

*Figure 21. Second-Order Noise Rejection by Frequency*
![](images/b6cb3970f846cfb4393d41363e8cf02ada1cc8d7084685a770168ece1cde9df2.jpg)

## Sequence Step Delta Time

Sequence step delta time enforces a fixed time `dt` between the start and end of steps in a simple or advanced sequence, allowing you to create periodic voltage waveforms.

*Figure 22. Sequence Step Delta Time Source Model*
![](images/dfaee4dcd14aa07cb7dcbf98d420902694fd923f3070feda873eb317ccfd21b5.jpg)

*Figure 23. Sequence Step Delta Time in NI-DCPower Sequences*
![](images/7b303fd89fae59828e3b298d187f56b144d0b438b210ae1cce642c33d07127cc.jpg)

*Table 14. Effect of Ranges Changes on Sequence Step Delta Time*
| Range Change Location | Effect of Range Change |
|---|---|
| step[0] | The setpoint of the step may be generated for an amount of time that differs from the configured dt. NI-DCPower does not generate an error. |
| step[i] | The setpoints of step[i - 1] and step[i] may be generated for an amount of time that differs from the configured dt. NI-DCPower generates an error. |

## Resistance Measurements

To measure a resistance with an SMU, select a test current that creates a voltage drop within module capabilities, then measure the actual current delivered and the voltage across the resistor. 

**Compensation for Offset Voltages:**
Taking a second measurement at a different current output setpoint allows the offset ($V_{OS}$) to be accounted for:
R = (V2 - V1) / (I2 - I1)

![](images/0c7b41ae26d461d2c35c38836ceefa50e549e06b814d08ace9ac173554c71cb0.jpg)

## Using the Safety Interlock

The safety interlock circuit protects operators. Correct use of the interlock is required to output up to the maximum voltage of the instrument.

* **Closed:** The circuit is complete; hazardous voltages up to the instrument's maximum are allowed.
* **Open:** The circuit is open; output is restricted to safe levels (<= ±40 V DC).

*Table 16. NI SMU Safety Interlock Voltage Thresholds and Behavior*
| Threshold | Definition | Interlock Error Occurs At |
|---|---|---|
| Maximum voltage setpoint | Highest voltage level/limit you can set when open. | Voltage > ±40 V DC |
| Maximum output terminal voltage | Highest voltage output between HI/LO when open. | Voltage > ±(42 V pk ±0.4 V) |

![](images/9bcf1c8fcf4b604e7a3ead69066024f928cd5b358b9500167dddad17ffcef5cb.jpg)

*Figure 24. Archetypal Safety Interlock System Design*
![](images/d1fccd3ef9a1e061985b1459efeb85630c6d43ffe454890a60c7f9407d1479a4.jpg)

*Table 17. Safety Interlock Cable for PXIe-4137*
| Length | NI Part Number | Connection Distance | Unterminated End Characteristic |
|---|---|---|---|
| 8 in. | 142998-08 | 1 to 4 chassis slots | Pre-stripped |
| 48 in. | 142998-48 | >4 chassis slots | Unstripped |

*Figure 25. Safety Interlock Pass-Thru Connection*
![](images/7483fab93ea7386a326c4116499cc45ce749c3cb2b54455f0de45fcb2fb9ff24.jpg)

*Figure 26. Safety Interlock Input Connector Pinout*
![](images/c8225c16a726d981c6abefb7b1acaf424c2be90975670fcdcb54fcbc0185aaf9.jpg)

*Figure 27. Safety Interlock Pass-Thru Connection (Generic Cabling)*
![](images/7517585b45a0d603fb08315921c7b7e78cd9ccd4cff97767d18a9704d8a7674a.jpg)

## Accuracy and Calibration

**Determining Accuracy**
Accuracy represents the uncertainty of a given measurement or output level. For example, to calculate the accuracy of a 1 mA current measurement in the 2 mA range with an accuracy specification of 0.03% + 0.4 µA:
Accuracy = (0.0003 × 1 mA) + 0.4 µA = 0.7 µA
Therefore, the reading of 1 mA should be within ±0.7 µA of the actual current.

> **Note:** Temperature can have a significant impact on accuracy. Errors are calculated as ±(% of reading + offset range) / °C and are added to the accuracy specification when operating outside the specified temperature range.

## Cleaning the PXIe-4137 System

* Clean the fan filters on the chassis regularly to prevent fan blockage.
* Clean the hardware with a soft, nonmetallic brush.
* Due to high-impedance circuits, avoid contamination during handling. Avoid storage in an environment that allows dust to settle.
* Use Triax covers whenever triax connections are not in use.

---