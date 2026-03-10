# PXIe-4142 User Manual

## PXIe-4142 Overview

The PXIe-4142 is a four-channel, four-quadrant source measure unit (SMU) designed for engineers building PXI systems that require voltage or current sourcing and measurement.  Use the PXIe-4142 in high pin-count applications.

## Device Capabilities

The PXIe-4142 is an SMU that has the following features and capabilities:

* 100 pA current sensitivity
* Current ranges: 150 mA, 10 mA, 1 mA, 100 µA, 10 µA
* Voltage ranges: ±24 V
* 4-wire remote sense and guard
* 600 kS/s maximum sampling rate and 100 kS/s maximum update rate
* SourceAdapt technology with predefined transient response settings

*Figure 1. PXIe-4142 Quadrant Diagram*
![](images/e37df75c98ab4eb07ec9c5f7a04071cfff53901615962af43b739e957615228d.jpg)

*Legend*
![](images/669e8719c5bc9888396d801ac2710491b10c40f0cd3fe572165601bb1ea0842b.jpg)
Limit power sinking to 6 W per module.

## Driver Support

NI recommends that you use the newest version of the driver for your module.

*Table 1. Earliest Driver Version Support*
| Driver Name | Earliest Version Support |
|---|---|
| NI-DCPower | 1.7 |

## Components of a PXIe-4142 System

The PXIe-4142 is designed for use in a system that includes other hardware components, drivers, and software.

> **Notice:** A system and the surrounding environment must meet the requirements defined in PXIe-4142 Specifications.

*Table 2. System Components*
| Component | Description and Recommendations |
|---|---|
| PXI Chassis | Houses the PXIe-4142 and supplies power, communication, and timing for PXIe-4142 functions. <br>**Note:** When installing the PXIe-4142 in a chassis with slot cooling capacity = 38 W, set the chassis fan speed to HIGH. |
| PXI Controller or PXI Remote Control Module | You can install a PXI controller or a PXI remote control (MXI) module depending on your system requirements. These components interface with the SMU using NI device drivers. |
| SMU | Your SMU instrument. |
| Cables and Accessories | Allow connectivity to/from your instrument for measurements. |
| NI-DCPower Driver | Instrument driver software that provides functions to interact with the PXIe-4142. |
| NI Applications | NI-DCPower offers driver support for: InstrumentStudio, LabVIEW, LabWindows/CVI, C/C++, .NET, Python. |

## Cables and Accessories

NI recommends using the following cables and accessories with your module.

*Table 3. Cables and Accessories*
| Accessory Description | Notes | Part Number |
|---|---|---|
| SHDB25F-DB25F-LL, 25-Pin D-SUB Cable For SMUs, Low Leakage | 1 m and 2 m lengths | 132893-01/02 |
| DB25F-DB25F 25 Pin D-Sub Cable for SMUs | 1 m and 2 m lengths. Not recommended for new designs. | 782015-01/02 |
| Screw Terminal Connector Kit for PXIe-414x SMUs | Ships with the PXIe-4142. | 781974-01 |
| Low-Leakage TB-414X Screw Terminal Connector Kit for PXIe-414x | — | 787611-01 |
| PXI slot blockers | Set of 5 | 199198-01 |

### Additional Accessory Guidance
* Install PXI slot blockers (p/n 199198-01) to fill empty instrument slots in a PXI chassis.

## Programming Options

You can generate signals interactively using InstrumentStudio or you can use the NI-DCPower instrument driver to program your device in the supported ADE of your choice.

* **InstrumentStudio**: A software-based soft front panel application that allows you to perform interactive measurements.
* **NI-DCPower Instrument Driver**: The NI-DCPower API configures and operates the module hardware and performs basic acquisition and measurement functions.
    * **LabVIEW**: Available on the LabVIEW Functions palette at Measurement I/O » NI-DCPower.
    * **LabVIEW NXG**: Available from the diagram at Hardware Interfaces » Electronic Test » NI-DCPower.
    * **LabWindows/CVI**: Available at Program Files » IVI Foundation » IVI » Drivers » NI-DCPower.
    * **C/C++**: Available at Program Files » IVI Foundation » IVI.
    * **Python**: Refer to the NI-DCPower Python Documentation.

## Theory of Operation

The PXIe-4142 combines a digital control loop architecture, known as SourceAdapt, with precision electronics to implement constant voltage (CV) or constant current (CC) sources with built-in measurement of voltage and current output.

One significant advantage of SourceAdapt is the ability to make adjustments to the control loop to change the SMU transient response to any load, so you can achieve an ideal transient response with minimum rise times and no overshoots or oscillations.

The PXIe-4142 can operate in either CV mode or CC mode:
* **In CV mode:** The device acts as a precision voltage source that holds the voltage across the selected voltage sense points constant with respect to load changes as long as load current is below the programmed current limit.
* **In CC mode:** The device acts as a precision current source that holds the current across the load constant with respect to load changes as long as load voltage is below the programmed voltage limit.

A measurement circuit on the PXIe-4142 can simultaneously read the voltage and current values using two integrating analog-to-digital converters. Voltage is measured differentially between the HI and LO terminals (local sense) or between the Sense HI and Sense LO terminals (remote sense). Current is measured using shunt resistors in series with the HI terminal.

Additionally, the PXIe-4142 features a Guard terminal on the output connector to implement guarding techniques against parasitic leakage resistance and capacitance.

The output has an over-current protection (OCP) circuit that will open the Output Disconnect switch when an over-current condition is either too severe or lasts too long. The Output Disconnect switch on PXIe-4142 is not directly controllable by the user and reserved for protection and self-calibration use.

In the event the Sense terminals are left disconnected during remote sense operation, the 100 kΩ open-sense protection resistors provide a voltage feedback path to prevent the output voltage from saturating to a large voltage level.

The output terminals of the PXIe-4142 are electrically isolated from chassis ground through a 60 V DC, Category I isolation barrier. This allows any SMU terminal to float ±60 V DC with respect to chassis ground.

### Block Diagram

*Figure 2. PXIe-4142 Block Diagram*
![](images/dd64e9e307fd27ffd29441e7165bbf82624b61dddce6991376afb13606c0bd67.jpg)

*Figure 3. PXIe-4142 Channel-Level Block Diagram*
![](images/2df608c96802f95a8bb7c39f615a1e7fa24da400612ee70f84752718e6ca6965.jpg)

## Front Panel

*Figure 4. PXIe-4142 Front Panel*
![](images/42f5c61e704afb8b1ecc0eb52c2ac1b18b9106ca86996fdba8cc94a5964c8379.jpg)

1. Access LED
2. Active LED
3. Output Connector

## PXIe-4142 Pinout

*Figure 5. PXIe-4142 Connector Pinout*
![](images/067d2572b6a0e46345e6ded71ab93fb3625e7f58d6d312ad80f9cd644f0a2f46.jpg)

*Table 4. Signal Descriptions*
| Signal Name | Description |
|---|---|
| CH <0..3> Output HI | HI force terminal connected to channel power stage. Positive polarity is defined as voltage measured on HI > LO. |
| CH <0..3> Guard | Buffered output that follows the voltage of the HI force terminal. Used to drive shield conductors surrounding HI force and Sense HI conductors to minimize leakage. |
| CH <0..3> Output LO | LO force terminal connected to channel power stage. Positive polarity is defined as voltage measured on HI > LO. |
| CH <0..3> Sense HI/LO | Voltage remote sense input terminals. Used to compensate for I*R voltage drops in cable leads, connectors, and switches. |
| NC | No Connect. |

> **Note:** PXIe-4142 channels are bank-isolated from earth ground, but also share a common LO.

## LED Indicators

### Access LED
*Table 5. Access LED Indicator Status*
| Status Indicator | Device State |
|---|---|
| (Off) | Not Powered |
| Green | Powered |
| Amber | Device is being accessed |

### Active LED
*Table 6. Active LED Indicator Status*
| Status Indicator | Output Channel State |
|---|---|
| (Off) | No channels operating in a programmed state |
| Green | One or more channels operating in a programmed state |
| Red | Any channel disabled because of error, such as an overcurrent condition |

## Installation and Configuration

Complete the following steps to install the PXIe-4142 into a chassis and prepare it for use.

1. **Unpacking the Kit:** Take precautions to prevent electrostatic discharge (ESD) from damaging the device.
2. **Installing the Software:** Install an ADE and the NI-DCPower driver.
3. **Installing the PXIe-4142 into a Chassis:** Ensure the AC power source is connected to ground the chassis.
    *Figure 7. Module Installation*
    ![](images/6f9c58f16cacc1bed137af767c8e2010fceec252cfeb6fa80d6326bafcb4019b.jpg)
4. **Selecting an Output Accessory for Your Application:** Choose between the standard Output Connector or the TB-414x.
5. **Verifying the Installation in MAX:** Use Measurement & Automation Explorer (MAX) to configure and self-test your NI hardware.
6. **Self-Calibrating the PXIe-4142 in MAX:** Self-calibration adjusts the PXIe-4142 for variations in the module environment.

### Kit Contents
*Figure 6. PXIe-4142 Kit Contents*
![](images/06ff275d7f794d70bbf0d93958dd8399cc4c025c4d4232cf4f37c36a71ebc6a2.jpg)
![](images/00ec397b5f1399a5dbcd6121e320aa1c3811abaf07b683f572057395cd6f52ef.jpg)
![](images/27b849d4a6b36ef27b25c65c31e7ef5c4de3194a4b2bd1e73c64b555e4956572.jpg)

1. PXIe-4142 Module
2. PXIe-4142 Output Connector Assembly
3. Documentation

### Installing the Output Connector Assembly
Connect the output connector assembly to the device. Tighten any thumbscrews on the output connector assembly to hold it in place.

> **Note:** Low energy transients can appear at the output terminals of your PXIe-4142 during certain situations, such as power-up, power-down, device driver loading, and self-calibration. Additionally, the output is pulled to ground through a 10 kΩ resistor. The energy of the transients is typically less than 1 µJ. 

### Installing the TB-414X on the PXIe-4142
The TB-414X is used to convert the 25-position D-SUB connector of the PXIe-4142 to screw terminal connections while maintaining low leakage performance. 
1. Prepare the wires by stripping the insulation 5 mm to 6 mm from one end. Use 24 AWG to 18 AWG wires.
2. Disassemble the TB-414X (unscrew the top cover and strain relief).
    *Figure 8. Disassembled TB-414X*
    ![](images/97443280cc4c43dfc09bcad31c653876883b209653d60b92da2d8ed9b2408605.jpg)
3. Connect the signal wires and ground/shield wire, tightening the screw terminals to 0.5 N·m (4 lb·in.).

*Figure 9. TB-414X Pinout*
![](images/ff8b165b946f370a31da2eb1267a67192ae10a7a5a9a81aa8fb7fce5b2db41d3.jpg)
![](images/025f1be88c3d82bad34cd379e366fc042a80b73094219e0393b0909b892c5966.jpg)
![](images/dcd0e2b37334848fafb9c393aa775949829020e2f6ff48c84a8fc5fd7c9d16d7.jpg)
![](images/00e41a256bdfb4b1e8985597fc2b3a87026a9413e6dd39f15abd4586e7495383.jpg)

*Table 7. TB-414X Signals and DB25 Pin Map (Excerpt)*
| Connector | Screw Terminal | DB25 Connector Pin |
|---|---|---|
| LO | LO, CH 0 | 16 |
| LO | Sense LO, CH 0 | 3 |
| CH 0 | Guard, CH 0 | 1, 15 |
| CH 0 | HI, CH 0 | 14 |
| CH 0 | Sense HI, CH 0 | 2 |

4. Reassemble the TB-414X. Tighten the strain relief to 0.3 N·m (2.7 lb·in.) and the top cover to 0.3 N·m.
    * Strain Relief Up: Use if you are connecting several wires.
    * Strain Relief Down: Use if you are connecting only a few wires.
5. Connect the TB-414X to the module.

*Figure 10. Installed TB-414X*
![](images/396d9479d9b924967146976d72c0bdaa0b6fc6b0bb5c8738cd6b62f14ee61cb5.jpg)

## Connecting Signals to the PXIe-4142

* Use the **Output HI** and **Output LO** terminals for local sense measurements.
* Use the **Output HI**, **Output LO**, **Sense HI**, and **Sense LO** terminals for remote sense measurements.
* Use the **Guard** terminals to remove the effects of leakage currents and parasitic capacitance.

### Making Local Sense Measurements
Local sense measurements use a single set of leads for output and voltage measurement. 
*Figure 11. Connecting Signals for Local Sense Measurement*
![](images/f904acd9c061e97e1d9e99805922cde5a7c63d2abb9c9e7417a2ab5f36eeae3b.jpg)

*Figure 12. Connecting Local Sense Hardware with a Remote Sense Channel Configuration*
![](images/bc5a90cf7bf85e0bfe79cdf998dc3d940e1e933f1f051b764c5f82c9771a9c7b.jpg)

### Making Remote Sense Measurements
Remote source measurements, sometimes referred to as 4-wire sense, require 4-wire connections to the DUT. 
*Figure 13. Connecting for a Remote Sense Measurement*
![](images/c50ab6fc9beb72243ba9fe72e221a74f1d8635dae85acddce0276d1020eeea82.jpg)

### Using the Guard Terminals
Guarding removes the effects of leakage currents and parasitic capacitances between HI and LO.

*Figure 14. Leakage without Guarding (IMeasured = ILoad + IL)*
![](images/c82f869aa58fcd505acde2ecdbd3618cbc62fc8302977ce324c6524574266dcf.jpg)

*Figure 15. Reducing Leakage with Guarding (IMeasured = ILoad)*
![](images/fa79bdfb3f6239bf68da6ee8cd849b721edaf94fd01a98a547b04f58d603904e.jpg)

### Minimizing Voltage Drop Loss when Cabling
To minimize voltage drop caused by cabling, keep each wire pair as short as possible and use the thickest wire gauge appropriate (NI recommends 18 AWG or lower).

*Table 9. Wire Gauge and Noise*
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
* Use shielded cables, such as coaxial cables or triaxial cables. ```
## Source Modes

The PXIe-4142 channels can generate voltage and current in **Single Point** or **Sequence** source mode. Within these modes, you can output DC voltage or DC current.

### Single Point Source Mode
In Single Point source mode, the source unit applies a single source configuration when it enters the Running state. You can update the source configuration dynamically.

### Sequence Source Mode
In Sequence source mode, the source unit steps through a predetermined set of source configurations without interaction from the host system, making the changes deterministic.
* **Simple sequence:** Allows you to define a series of voltage/current outputs and source delays for a single channel.
* **Advanced sequence:** Allows you to define numerous properties per sequence step for any number of channels.

> **Note:** You cannot program both simple sequences and advanced sequences within the same session.

*Table: Simple Sequences versus Advanced Sequences*
| Task | Simple Sequencing | Advanced Sequencing |
|---|---|---|
| **How to create** | Set the Source Mode to Sequence and use the Set Sequence function | Set the Source Mode to Sequence; use the Create Advanced Sequence With Channels function |
| **What you can configure** | Voltage or current levels per step, along with Source Delay | A wide variety of NI-DCPower properties per step |
| **Channels applied to** | LabVIEW NXG: single channel only. Other: any number | Any number of channels |
| **Controlling initial state**| Manually configure channel(s) before calling Set Sequence | Create a Commit step to configure channels to a known state |

## Sourcing Voltage and Current

*Table 10. Software Settings for PXIe-4142 Source and Measure Operations*
| PXIe-4142 Operation | Output Function | Source Mode |
|---|---|---|
| Source voltage / Measure current or voltage | DC Voltage | Single Point or Sequence |
| Source current / Measure voltage or current | DC Current | Single Point or Sequence |

Complete the following general steps to source current or voltage:

### 1. Initialize a Session
Use the `niDCPower Initialize With Independent Channels` VI or function. This returns an instrument handle with the session configured to a known state.

### 2. Configure the PXIe-4142 for Sourcing
Use the `Configure Output Function` to set the output type (DC Voltage or DC Current). Then configure the source mode with `Configure Source Mode With Channels`. 

### 3. Configure the PXIe-4142 for Measuring
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

**Trigger Signal Conditions:**
You can configure triggers to operate based on a Digital Edge (a rising/falling edge on a physical trigger line), a Software Edge, or None (Disabled). 

*Figure 16. Digital Edge Trigger*
![](images/96d52e3152edf54ea43cc2bab9a076182218404654b2f63a6fa7e1761641c003.jpg)

**Events:**
Events indicate an operation was completed (e.g., *Source Complete*, *Sequence Iteration Complete*, *Sequence Engine Done*, *Measure Complete*). Pulse width for events on the PXIe instrument range from 250 ns to 1.6 µs.

### 5. Initiate the PXIe-4142
Call `Initiate With Channels` to apply the configuration and start generating.

### 6. Acquire Measurements
In Single Point mode, use `Measure Multiple`. When configured for sequence, fetch measurements from the buffer using `Fetch Multiple`.

### 7. Cease Generation
* **Disabling the output:** Set `Output Enabled` to False (generates 0 V).

### 8. Close the Session
Use `niDCPower Close` to free resources.

## NI-DCPower Synchronization Methods

* **Software-Based Synchronization:** Accuracy in tens of milliseconds.
* **Time-Based Synchronization:** Uses GPS, 1588, or IRIG-B. Accuracy <100 ns + instrument trigger delay and jitter.
* **Signal-Based Synchronization:** Uses PXI Trigger Routing or External Triggering. Accuracy in tens of nanoseconds + instrument trigger delay and jitter.

## PXIe-4142 Operating Guidelines

### Sourcing and Sinking
Quadrants I and III represent sourcing power (delivering power to a load), while Quadrants II and IV represent sinking power (absorbing power).

*Quadrant Diagram*
![](images/06fe752081ba5da6d8e9509c41ec29ecdfbb98296838b2d111b6514d3ab13b37.jpg)

### Output Capacitance and Inductance
* **Virtual Capacitance/Inductance:** Synthesized by the action of a control loop on a resistor.
* **Real Capacitance/Inductance:** Added by components and interconnections in the device and cabling.
* **To decrease:** Use shorter cabling, reduce fixture capacitance, reduce the loop area between Output HI and Output LO, and adjust the NI-DCPower transient response settings (e.g., set to Fast or Custom and increase GBW).

### Overload Protection (OLP)
The PXIe-4142 is protected against **Overcurrent (OCP)** and **Overvoltage (OVP)** conditions. When limits are exceeded, the output disconnects to protect the instrument and DUT. Reset the device in MAX or use the `Reset Device` function to clear these errors.

### Transient Response
Transient response describes how a supply responds to a sudden change in load.

*Figure 17. Transient Response*
![](images/9508fa5b4e243918b05973b0d108d201bc2c1b5615e64397b6b5ff478f65c6c6.jpg)

*Table 12. Transient Response Settings*
| Setting | Description |
|---|---|
| **Slow** | Increases stability while decreasing speed. Use for unstable loads. |
| **Normal** | (Default) Balances stability and speed. |
| **Fast** | Increases speed for benign loads. |

### Pulse Loads and Reverse Current Loads
* **Pulse Loads:** Configure the current limit to a value greater than the expected peak current of the load.
* **Reverse Current:** Use a bleed-off load to preload the output of the device so that reverse currents are safely absorbed.

### Ranges and Overranging
When `Overranging Enabled` is set to TRUE, the valid values for the programmed output may be extended from 100% to 105% for the output range.

*Table 13. Supported Configurable Output Ranges*
| Range | VI | Function |
|---|---|---|
| Voltage level range | niDCPower Configure Voltage Level Range | niDCPower_ConfigurationVoltageLevelRange |
| Voltage limit range | niDCPower Configure Voltage Limit Range | niDCPower_ConfigurationVoltageLimitRange |
| Current level range | niDCPower Configure Current Level Range | niDCPower_ConfigurationCurrentLevelRange |
| Current limit range | niDCPower Configure Current Limit Range | niDCPower_ConfigurationCurrentLimitRange |

### Noise and AC Rejection
Noise can be characterized as normal-mode or common-mode noise. You can reject AC power-line noise by adjusting the measurement aperture time to be a multiple of the AC noise period (e.g., 1 PLC for 60 Hz).

*Figure 18. Normal Noise Rejection*
![](images/e7c0295832bfd6a7209fe472268fb43e0adaa71182d621696f714d287cd0ee82.jpg)

*Figure 19. Normal Noise Rejection by Frequency*
![](images/a7e1439552cfa9e8d4959f6e16447595b51c1366cd892bd94425bbbfe6618eea.jpg)

*Figure 20. Second-Order Noise Rejection*
![](images/223876defffd2f103c3f4dcedeb79b501890758892f8f694d07f8795125a8428.jpg)

*Figure 21. Second-Order Noise Rejection by Frequency*
![](images/6c01564b39f1419082367c0ef88ef1a4d07a9aa84fdea5ff7e2c2c5cf7cd29b1.jpg)

## Sequence Step Delta Time

Sequence step delta time enforces a fixed time `dt` between the start and end of steps in a simple or advanced sequence, allowing you to create periodic voltage waveforms.

*Figure 22. Sequence Step Delta Time Source Model*
![](images/04c63711c906e3f6ef740e875b96d9cf89139c946228a7cb3f79fdaa672ac499.jpg)
![](images/be53514d6f42b2199e477ddde101bdd8410dc1e53ff0541a736af0ac1d50da93.jpg)

*Figure 23. Sequence Step Delta Time in NI-DCPower Sequences*
![](images/cba36458e270ce06f63293954a5b801a5badd66c0e02236c7f2af3721d548580.jpg)

*Table 14. Effect of Ranges Changes on Sequence Step Delta Time*
| Range Change Location | Effect of Range Change |
|---|---|
| step[0] | The setpoint of the step may be generated for an amount of time that differs from the configured dt. NI-DCPower does not generate an error. |
| step[i] | The setpoints of step[i - 1] and step[i] may be generated for an amount of time that differs from the configured dt. NI-DCPower generates an error. |

## Power and Resistance Measurements

To measure a resistance with an SMU, select a test current that creates a voltage drop within module capabilities, then measure the actual current delivered and the voltage across the resistor. 

**Compensation for Offset Voltages:**
Taking a second measurement at a different current output setpoint allows the thermal offset voltages ($V_{OS}$) to be accounted for:
R = (V2 - V1) / (I2 - I1)

![](images/c878a882fb8c266b6241161d76a05ac5280795f79363821b8750085d10192aa9.jpg)

## Terminology

* **Aperture Time:** The period during which an ADC reads the voltage or current.
* **Compliance:** Operating in compliance means the channel cannot reach the requested output level because the programmed limit has been reached.
* **Load Regulation:** A measure of the ability of an output channel to remain constant given changes in the load.
* **Resolution:** The smallest change in voltage or current measurement that can be detected by hardware.

## Accuracy and Calibration

**Determining Accuracy**
Accuracy represents the uncertainty of a given measurement or output level. For example, to calculate the accuracy of a 1 mA current measurement in the 2 mA range with an accuracy specification of 0.03% + 0.4 µA:
Accuracy = (0.0003 × 1 mA) + 0.4 µA = 0.7 µA
Therefore, the reading of 1 mA should be within ±0.7 µA of the actual current.

> **Note:** Temperature can have a significant impact on accuracy. Errors are calculated as ±(% of reading + offset range) / °C and are added to the accuracy specification when operating outside the specified temperature range.

## Cleaning the PXIe-4142 System

* Clean the fan filters on the chassis regularly to prevent fan blockage.
* Clean the hardware with a soft, nonmetallic brush.
* Ensure that the hardware is completely dry and free from contaminants before returning it to service.

---