
# PXIe-4147 User Manual

The PXIe-4147 User Manual provides detailed descriptions of the product functionalityand the step by step processes for use.

# Looking for Something Else?

For information not found in the User Manual for your product, such as specificationsand API reference, browse Related Information.

# Related information:

PXIe-4147 Specifications

PXIe-4147 Calibration Procedure

• NI-DCPower Help

NI-DCPower LabVIEW VI Reference

• NI-DCPower Properties

NI-DCPower C Function Reference

NI-DCPower .NET API Overview

• NI-DCPower Python Reference

• NI-DCPower and LabVIEW Compatibility

• Software and Driver Downloads

Release Notes

• License Setup and Activation

Dimensional Drawings

Product Certifications

• Letter of Volatility

Discussion Forums

• NI Learning Center

# PXIe-4147 Overview

The PXIe-4147 is a 4-channel source measure unit (SMU) ideal for high pin-countapplications. It features 4-quadrant operation, and each channel has integratedremote four-wire sensing for accurate measurements. The sample rate of thePXIe-4147 can reduce measurement times, capture transient device characteristics,and help you perform current-voltage (I-V) characterization of devices-under-test(DUTs). Use the PXIe-4147 for RF and mixed-signal semiconductor validation andproduction test applications.

# Device Capabilities

The PXIe-4147 is an SMU that has the following features and capabilities.

• Power output, sourcing, up to 24 W per channel, up to 40 W total across all fourchannels

• Power output, sinking,

◦ Up to 24 W DC per channel, up to 40 W DC total across all four channels in achassis with $\ge 5 8$ W slot cooling capacity.


Note When sinking more than 15 W into the PXIe-4147, transientsmay not exceed $2 0 0 \ : \mathrm { m W / \mu s }$ .

◦ Up to 15 W per channel, up to 15 W DC total across all four channels in all otherchassis

• Current Ranges: 3 A, 100 mA, 10 mA, 1 mA, 100 µA, 10 µA, 1 µA

• Voltage Ranges: 8 V, 1 V

• 1.8 MS/s maximum sampling rate and 100 kS/s maximum update rate per channel

• 4-wire remote sense and guard

• SourceAdapt technology

• Per-channel Power Allocation capability


Figure 1. PXIe-4147 Quadrant Diagram


![](images/ff133b1d65a752055b1a631cbb0c335dec8232e8bc945b5b6b74d1c19d8ddacb.jpg)


# Driver Support

NI recommends that you use the newest version of the driver for your module.


Table 1. Earliest Driver Version Support


<table><tr><td>Driver Name</td><td>Earliest Version Support</td></tr><tr><td>NI-DCPower</td><td>20.0</td></tr></table>

# Components of a PXIe-4147 System

The PXIe-4147 is designed for use in a system that includes other hardwarecomponents, drivers, and software.


Notice A system and the surrounding environment must meet therequirements defined in the PXIe-4147 Specifications.

The following list defines the minimum required hardware and software for a systemthat includes a PXIe-4147.


Table 2. System Components


<table><tr><td>Component</td><td>Description and Recommendations</td></tr><tr><td rowspan="3">PXI Chassis</td><td>A PXI chassis houses the PXIe-4147 and supplies power, communication, and timing for PXIe-4147 functions.</td></tr><tr><td>Note NI recommends installing the PXIe-4147 in a chassis with slot cooling capacity ≥58 W for increased module capability.</td></tr><tr><td>Note When installing the PXIe-4147 in a chassis with slot cooling capacity = 38 W, set the chassis fan speed to HIGH.</td></tr><tr><td>PXI Controller or PXI Remote Control Module</td><td>You can install a PXI controller or a PXI remote control (MXI) module depending on your system requirements. These components, installed in the same PXI chassis as the PXIe-4147, interface with the SMU using NI device drivers.</td></tr><tr><td>SMU</td><td>Your SMU instrument.</td></tr><tr><td>Cables and Accessories</td><td>Cables and accessories allow connectivity to/from your instrument for measurements. Refer to Cables and Accessories for recommended cables and accessories and guidance.</td></tr><tr><td rowspan="2">NI-DCPower Driver</td><td>Instrument driver software that provides functions to interact with the PXIe-4147 and execute measurements using the PXIe-4147.</td></tr><tr><td>Note NI recommends to always use the most current version of NI-DCPower with the PXIe-4147. You can find the NI-DCPower driver requirements in the NI-DCPower Readme.</td></tr><tr><td>NI Applications</td><td>NI-DCPower offers driver support for the following applications:
· InstrumentStudio
· LabVIEW
· LabWindows/CVI</td></tr><tr><td></td><td>• C/C++
• .NET
• Python</td></tr></table>

# Cables and Accessories

NI recommends using the following cables and accessories with your module.


Table 3. Cables and Accessories


<table><tr><td>Accessory Description</td><td>Notes</td><td>Part Number</td></tr><tr><td>Low-Leakage TB-414X Screw Terminal Connector Kit for PXIe-414x</td><td>Ships with the PXIe-4147</td><td>787611-01</td></tr><tr><td>SHDB25F-DB25F-LL, 25-pin D-SUB Low Leakage Cable for SMU</td><td>1 m and 2 m lengths</td><td>132893-01/02</td></tr><tr><td>PXIe-4147 Calibration Accessories Kit</td><td>Module calibration kit includes DB25 to Low-Thermal EMF Spade Lug Assembly, DB25 to Triax/Spade Lug Assembly, HI Sense Verification Assembly, LO Sense Verification Assembly, Output Shorting Assembly</td><td>787792-01</td></tr><tr><td>PXI slot blockers</td><td>Set of 5</td><td>199198-01</td></tr></table>


Note Visit NI SMU Cable and Accessory Compatibility at ni.com/r/cable-compatibility for more information about supported cables andaccessories for your instrument.

# Additional Cabling and Accessory Guidance

NI recommends the following:

• You can install PXI slot blockers (p/n 199198-01) to fill empty instrument slots in aPXI chassis. For more information about installing slot blockers and filler panels,go to ni.com/r/pxiblocker.

• The PXIe-4147 provides higher maximum current and more precise currentmeasurement capabilities than earlier PXIe-414x modules. Consequently,PXIe-4147 performance can be compromised by the accessories associated withthose modules. Do not use the following accessories with the PXIe-4147: DB25F-DB25F, 25-pin D-SUB Low Leakage Cable for SMU (782015-01/02) and ScrewTerminal Connector Kit for PXIe-414x SMUs (781974-01).

# Programming Options

You can generate signals interactively using InstrumentStudio or you can use theNI-DCPower instrument driver to program your device in the supported ADE of yourchoice.

• InstrumentStudio—When you install NI-DCPower on a 64-bit system, you canmonitor, control, and record measurements from supported devices usingInstrumentStudio. InstrumentStudio is a software-based soft front panelapplication that allows you to perform interactive measurements on severaldifferent device types in a single program.

InstrumentStudio is automatically installed when you install the NI-DCPowerdriver on a 64-bit system. You can access InstrumentStudio in any of the followingways:

• From the Windows start menu, select National Instruments » [Driver] SoftFront Panel. This launches InstrumentStudio and runs a soft front panelpopulated with NI-DCPower devices.

• From the Windows start menu, select National Instruments »InstrumentStudio. This launches InstrumentStudio and runs a soft front panelpopulated with devices detected on your system.

• From Measurement & Automation Explorer (MAX), select a device and thenclick Test Panels.... This launches InstrumentStudio and runs a soft front panelfor the device you selected.

• NI-DCPower Instrument Driver —The NI-DCPower API configures and operates themodule hardware and performs basic acquisition and measurement functions.

• LabVIEW—Available on the LabVIEW Functions palette at Measurement I/O »NI-DCPower. Examples are available from the Start menu in the NationalInstruments folder.

• LabVIEW NXG—Available from the diagram at Hardware Interfaces »Electronic Test » NI-DCPower. Examples are available from the Learning tab inthe Examples » Hardware Input and Output folder.

• LabWindows/CVI—Available at Program Files » IVI Foundation » IVI » Drivers »NI-DCPower. LabWindows/CVI examples are available from the Start menu inthe National Instruments folder.

• ${ \mathsf { C } } / { \mathsf { C } } + + .$ —Available at Program Files » IVI Foundation » IVI. Refer to the Creating an Application with Nl-DcPower in Microsoft Visual C and$c + +$ topic of the NI DC Power Supplies and SMUs Help to manually addall required include and library files to your project. NI-DCPower does not shipwith installed $\mathsf { C } / \mathsf { C } + +$ examples.

• Python—For more information about installing and using Python, refer to theNI-DCPower Python Documentation.

# PXIe-4147 Theory of Operation

ThePXIe-4147 uses a digital control loop architecture called SourceAdapt. PXIe-4147combines SourceAdapt with precision electronics to deliver constant voltage (CV) orconstant current (CC) output. PXIe-4147 also includes built-in measurement for bothvoltage and current output.

One key advantage of SourceAdapt is precise control loop adjustment which allowsyou to customize the SMU’s transient response to match any load. You can achieveideal response with minimal rise time, no overshoot, and no oscillations.

ThePXIe-4147can operate in either CV mode or CC mode:

• In CV mode, the device functions as a precision voltage source. The devicemaintains constant voltage across selected sense points despite load changes aslong as the load current stays below the programmed current limit.

• In CC mode, the device operates as a precision current source. The device keepsthe current across the load constant, even with load changes as long as the loadvoltage remains below the programmed voltage limit.

A measurement circuit on the PXIe-4147 can simultaneously read the voltage andcurrent values using two integrating analog-to-digital converters. The device measuresvoltage differentially between HI and LO terminals for local sensing. The devicemeasures voltage between Sense HI and Sense LO terminals for remote sensing. Theprogrammed voltage sense location determines which terminals the device uses.Remote sense is used to compensate for voltage drop that results from resistance incables, connectors and switches. The device measures current using shunt resistors inseries with the HI terminal.

Additionally, thePXIe-4147features a Guard terminal on the output connector. Use theGuard terminal to apply guarding techniques. These techniques help reduce parasiticleakage resistance and capacitance in cables and test fixtures.

The PXIe-4147 has several built in protection mechanisms that guard against commonfaults. The output includes an over-current protection (OCP) circuit. This circuit opensthe Output Disconnect switch during severe or prolonged over-current conditions.

The PXIe-4147 continuously monitors voltage between HI and LO or Sense HI andSense LO and protects against over-voltage faults. The over-voltage protection (OVP)circuit monitors the output voltage. The OVP circuit opens the Output Disconnectswitch when it detects excessive voltage to protect the PXIe-4147.

If you leave the Sense terminals disconnected during remote sensing, the 10 MΩprotection resistors activate. These protection resistors provide a voltage feedbackpath to prevent output voltage saturation.

A 60 V DC, Category I isolation barrier electrically isolates the output terminals of thePXIe-4147 from chassis ground. This isolation allows any SMU terminal to float±60 V DC with respect to chassis ground. However, there is no isolation betweenchannels because the LO terminals of each channel are internally connected.

The PXIe-4147 includes flexible source and measurement units that enable multipleprogramming modes and timing options:

• Single Point Source Mode—Use for software-timed source or measurementoperation.

• Sequence Source Mode—Use this for basic hardware-timed operation. Specify aseries of setpoint steps and source delays between each step. Keep all otherparameters constant during the operation. You can modify this mode with thesequence step delta property to use a fixed time between points whichenables sampled waveform generation.

• Advanced Sequencing Mode—Use for hardware-timed operation where fullcontrol of all supported parameters is available for each step.

Use hardware triggers in any mode to control source and measure unit operations.Coordinate these operations with other channels or devices in your system. Themeasurement engine operation can operate in waveform acquisition mode and can bedecoupled from the sequence engine. Refer to Sourcing Voltage and Current formore information about triggerable events in each programming mode.

# PXIe-4147 Block Diagram

The following diagram illustrates the design of the PXIe-4147.


Figure 2. PXIe-4147 Block Diagram


![](images/202ff5d109a5a002db701c72e83eccec253b1f2703bbf1aaa31322d919229d6c.jpg)



Figure 3. PXIe-4147 Channel-Level Block Diagram


![](images/47c359fe9586fc7ab33f9501334aa4a9a2312ce4c0800ad54a40265ec2b675d9.jpg)


# PXIe-4147 Front Panel


Figure 4. PXIe-4147 Front Panel


![](images/340317a2ffedd511728708b51fff6aa424bc486e17cf56ce0f36b3f5883c9638.jpg)


1. Access LED

2. Voltage LED

3. Output Connector

# PXIe-4147 Pinout

The following figure shows the terminals on the PXIe-4147 connector.


Figure 5. PXIe-4147 Connector Pinout


![](images/693a113c90e9e75660063653b6a96d37c215cfffcf9b75c6967840ce431ab790.jpg)



Table 4. Signal Descriptions


<table><tr><td>Signal Name</td><td>Description</td></tr><tr><td>CH &lt;0..3&gt; Output HI</td><td>HI force terminal connected to channel power stage (generates and/or dissipates power). Positive polarity is defined as voltage measured on HI &gt; LO.</td></tr><tr><td>CH &lt;0..3&gt; Guard</td><td>Buffered output that follows the voltage of the HI force terminal. Used to drive shield conductors surrounding HI force and Sense HI conductors to minimize effects of leakage and capacitance on low level currents.</td></tr><tr><td>CH &lt;0..3&gt; Output LO</td><td>LO force terminal connected to channel power stage (generates and/or dissipates power). Positive polarity is defined as voltage measured on HI &gt; LO.</td></tr><tr><td>CH &lt;0..3&gt; Sense HI</td><td rowspan="2">Voltage remote sense input terminals. Used to compensate for IRVoltage drops in cable leads, connectors, and switches.</td></tr><tr><td>CH &lt;0..3&gt; Sense LO</td></tr><tr><td>NC</td><td>No Connect.</td></tr></table>

![](images/6550215a56099731987b6a178f5524534b8ed861f4ecbb028924f273d1753462.jpg)


Note PXIe-4147 channels are bank-isolated from earth ground, but alsoshare a common LO.

# PXIe-4147 LED Indicators

The PXIe-4147 features an Access LED and Voltage LED.

# Access LED

The Access LED, located on the module front panel, indicates module power andaccess.

The following table lists the Access LED states.


Table 5. Access LED Indicator Status


<table><tr><td>Status Indicator</td><td>Device State</td></tr><tr><td>(Off)</td><td>Not Powered</td></tr><tr><td>Green</td><td>Powered</td></tr><tr><td>Amber</td><td>Device is being accessed</td></tr></table>

# Why Is the Access LED Off When the Chassis Is On?

The LEDs may not light until the module has been configured in HardwareConfiguration Utility or MAX. Before proceeding, verify that the PXIe-4147 appears inHardware Configuration Utility or MAX.

If the Access LED fails to light after you power on the chassis, a problem may exist withthe chassis power rails, a hardware module, or the LED.

![](images/fb65e9a2003c1614f4060de6eb420ce07ce0a0982e01ea7ef2d421ef1cad9597.jpg)


Notice Apply external signals only while the PXIe-4147 is powered on.Applying external signals while the module is powered off may causedamage.

1. Disconnect any signals from the module front panel.

2. Power off the chassis.

3. Remove the module from the chassis and inspect it for damage.

![](images/0e07fee6aee3f6b6c370969c5bf640c09eec9727d61c31023c4f5e332a4a7b58.jpg)


Notice Do not reinstall a damaged module.

4. Install the module in a different, supported slot within the same PXI chassis.

5. Power on the chassis.

![](images/47acb061cf59373825d600e6bbe8cd6eabdfa72587f12309ea2aa820930d90b8.jpg)


Note If you are using a PC with a device for PXI remote control system,power on the chassis before powering on the computer.

6. Verify that the module appears in Hardware Configuration Utility or MAX.

7. Reset the module in Hardware Configuration Utility or MAX and perform a self-test.

# Voltage LED

The Voltage LED, located on the module front panel, indicates the module outputchannel state.

The following table lists the Voltage LED states.


Table 6. Voltage LED Status Indicator


<table><tr><td>Status Indicator</td><td>Output Channel State</td></tr><tr><td>(Off)</td><td>All instrument outputs are disconnected from their voltage generation sources through output disconnect relays.</td></tr><tr><td>Green</td><td>At least one instrument output is connected to a voltage generation source.</td></tr><tr><td>Red</td><td>The instrument has a fault or is in error due to the voltage generated or measured by the instrument. Refer to the driver software for possible sources. The instrument will not operate until the error is cleared and/or the instrument is reset.</td></tr></table>

# PXIe-4147 Installation and Configur tion and Configuration

Complete the following steps to install the PXIe-4147 into a chassis and prepare it foruse.

1. Unpacking the Kit

Take precautions to prevent electrostatic discharge when unpacking andinspecting your hardware.

2. Installing the Software

3. Installing the PXIe-4147 into a Chassis

4. Installing the TB-414X on the PXIe-4147

Complete the following steps to install the TB-414X with a module and preparesignal connections.

5. Verifying the Installation in MAX

6. Self-Calibrating the PXIe-4147 in MAX

Self-calibration adjusts the PXIe-4147 for variations in the module environment.The PXIe-4147 modules are externally calibrated at the factory, but you shouldperform a complete self-calibration after you install the module.

# Unpacking the Kit

Take precautions to prevent electrostatic discharge when unpacking and inspectingyour hardware.

![](images/86615971d53a138b75ef3b96e2e1112e2841d88c16bdc0678679a344b6cd3d05.jpg)


Notice To prevent electrostatic discharge (ESD) from damaging the device,ground yourself using a grounding strap or by holding a grounded object,such as your computer chassis.

1. Touch the antistatic package to a metal part of the computer chassis.

2. Remove the device from the package and inspect the device for loose componentsor any other sign of damage.

![](images/66a33af06e91173d5e3203ad6eab50e8def8835263df4f8c152895f63a3f9d90.jpg)


Notice Never touch the exposed pins of connectors.

![](images/2fdb2742b8a357019defae5fb50c63138ae463e1053b17fa3d03c2772156af12.jpg)


Note Do not install a device if it appears damaged in any way.

3. Unpack any other items and documentation from the kit.

![](images/24e35b989a8bc004d70257898a1d79f4c1ccc4608dfff2af19eb9fe71bdb47a3.jpg)


Note Store the device in the antistatic package when the device is not in use.

# Kit Contents

Refer to the following figure to identify the contents of the PXIe-4147 kit.


Figure 6. PXIe-4147 Kit Contents


![](images/00fc99f56e1a944f82d1580c3bb01a580373b596f0c801c7ab49f24c0af5c81c.jpg)



1


![](images/5ad6886510b439edda413e79ed8a4378dcdada8bba487f63bd7b303acaa5c79b.jpg)



2


![](images/ca0a9909aef64967af38b77d8e372a1b2e7110989725db69924f65b33cf10dfa.jpg)



3


1. PXIe-4147 Module

2. TB-414X Screw Terminal Connector Kit

3. Documentation

# Installing the Software

You must be an Administrator to install NI software on your computer.

1. Install an ADE, such as LabVIEW or LabWindows™/CVI™.

2. Download the driver software installer from ni.com/downloads.Package Manager downloads with the driver software to handle the installation.Refer to the Package Manager Manual for more information about installing,removing, and upgrading NI software using Package Manager.

3. Follow the instructions in the installation prompts.

![](images/9060b031e8b9634ecd24d7425d045da8bab9563d8aa21f369f28cd2d1384e2b0.jpg)


Note Windows users may see access and security messages during

installation. Accept the prompts to complete the installation.

4. When the installer completes, select Restart in the dialog box that prompts you torestart, shut down, or restart later.

# Installing the PXIe-4147 into a Chassis

![](images/f1bf365917eba4ca0f24bf8088022d30a0abdbab3bf255d70dc9ec483e1bead9.jpg)


Notice To prevent damage to the PXIe-4147 caused by ESD orcontamination, handle the module using the edges or the metal bracket.

1. Ensure the AC power source is connected to the chassis before installing themodule.The AC power cord grounds the chassis and protects it from electrical damagewhile you install the module.

2. Power off the chassis.

3. Inspect the slot pins on the chassis backplane for any bends or damage prior toinstallation. Do not install a module if the backplane is damaged.

4. Position the chassis so that inlet and outlet vents are not obstructed.For more information about optimal chassis positioning, refer to the chassisdocumentation.

5. Remove the black plastic covers from all the captive screws on the module frontpanel.

6. Identify a supported slot in the chassis. The PXIe-4147 module can be placed inPXI Express hybrid peripheral slots $( \bullet ^ { \mathsf { H } } )$ , PXI Express system timing slots $( \boxed { \bullet } )$or PXI Express peripheral slots $( \bullet )$ .

7. Touch any metal part of the chassis to discharge static electricity.

8. Ensure that the ejector handle is in the downward (unlatched) position.


Figure 7. Module Installation


![](images/dbd850c9f436a48c3b2d336ada1e5435544e080f50a40855f4caa20ce6f30782.jpg)


9. Place the module edges into the module guides at the top and bottom of thechassis. Slide the module into the slot until it is fully inserted.

10. Latch the module in place by pulling up on the ejector handle.

11. Secure the module front panel to the chassis using the front-panel mountingscrews.


Note Tightening the top and bottom mounting screws increasesmechanical stability and also electrically connects the front panel to thechassis, which can improve the signal quality and electromagneticperformance.

12. Cover all empty slots using either filler panels (standard or EMC) or slot blockerswith filler panels, depending on your application.



Note For more information about installing slot blockers and fillerpanels, go to ni.com/r/pxiblocker.

# Installing the TB-414X on the PXIe-4147

Complete the following steps to install the TB-414X with a module and prepare signalconnections.

Your kit includes an assembled TB-414X. In addition, you will need the following itemsnot included in your TB-414X kit to install and use the TB-414X with your module.

• 24 AWG to 18 AWG signal wires

• Number 1 Phillips-head screwdriver

• 2.5 mm (3/32) flathead screwdriver

• Wire insulation strippers

• Wire cutters


Note Maintaining low leakage performance of the PXIe-4147 and TB-414Xrequires careful selection and termination of the external wiring to ensureguarding of the HI and HI Sense signals and to minimize negative effects fromwiring insulation materials and contaminants. The SHDB25F-DB25F-LL cableaccessory has been designed with these considerations in mind and utilizesthe TB-414X, allowing for one end to be easily reterminated into an alternateconnector, if needed.


Note NI recommends wearing clean gloves during assembly to avoidcontamination from residues or other debris.

1. Prepare the wires by stripping the insulation 5 mm to 6 mm (0.197 in. to 0.236 in.)from one end of all wires.

Use signal wires with a wire gauge of 24 AWG to 18 AWG.

2. Disassemble the TB-414X.

a. Unscrew the four screws on the top of the TB-414X to remove the top cover.

b. Unscrew the two screws securing the strain relief to remove the strain relief.


Figure 8. Disassembled TB-414X


![](images/a4952c733103030c153440299fe3b2766b0d2863bfc46f69839d854f5f5edc04.jpg)


3. Connect the signal wires and ground/shield wire by inserting the stripped end ofthe wires into the appropriate terminals and tighten the screws of the screwterminals to a torque of $0 . 5 \ : \mathsf { N } \cdot \mathsf { m }$ (4 lb · in.).

Refer to the following pinout, signal information, and PXIe-4147 pin map to makethe appropriate connections for your application.


Figure 9. TB-414X Pinout


![](images/42ae5e6bc368ffffec67f9c7076f57a40dfa74f9d02f9fc538c307681f96fd68.jpg)


![](images/e95b4cdd1b0c7d14021813cd5caafeb5c4e6654580862b7bd599287bf6dc7c2c.jpg)


![](images/bdf8168fcd7ff40172e831a9cc68e6804550fcadf574f1e7d17ebb16a58b5c86.jpg)


![](images/a368738da18e504faf5cccaccd709dcf7850c66f70d0f2fcd785869c439da77c.jpg)



Table 7. TB-414X Signals and DB25 Pin Map


<table><tr><td>Connector</td><td>Screw Terminal</td><td>DB25 Connector Pin</td></tr><tr><td rowspan="9">LO</td><td>LO, CH 0</td><td>16</td></tr><tr><td>Sense LO, CH 0</td><td>3</td></tr><tr><td>LO, CH 1</td><td>19</td></tr><tr><td>Sense LO, CH 1</td><td>6</td></tr><tr><td>LO, CH 2</td><td>22</td></tr><tr><td>Sense LO, CH 2</td><td>9</td></tr><tr><td>LO, CH 3</td><td>25</td></tr><tr><td>Sense LO, CH 3</td><td>12</td></tr><tr><td>Shield GND, CH &lt;0..3&gt;</td><td>Shield</td></tr><tr><td>CH 0</td><td>Guard, CH 0</td><td>1, 15</td></tr><tr><td rowspan="2"></td><td>HI, CH 0</td><td>14</td></tr><tr><td>Sense HI, CH 0</td><td>2</td></tr><tr><td rowspan="3">CH 1</td><td>Guard, CH 1</td><td>4, 18</td></tr><tr><td>HI, CH 1</td><td>17</td></tr><tr><td>Sense HI, CH 1</td><td>5</td></tr><tr><td rowspan="3">CH 2</td><td>Guard, CH 2</td><td>7, 21</td></tr><tr><td>HI, CH 2</td><td>20</td></tr><tr><td>Sense HI, CH 2</td><td>8</td></tr><tr><td rowspan="3">CH 3</td><td>Guard, CH 3</td><td>10, 24</td></tr><tr><td>HI, CH 3</td><td>23</td></tr><tr><td>Sense HI, CH 3</td><td>11</td></tr></table>

# 4. Reassemble the TB-414X.

a. Bundle the wires together under the strain relief and install the strain relief bytightening the two screws removed in previous steps to a torque of $0 . 3 \ : \mathsf { N } \cdot \mathsf { m }$(2.7 lb · in.).


Table 8. TB-414X Strain Relief


<table><tr><td>Strain Relief Position</td><td>When to Use</td><td>Diagram</td></tr><tr><td>Strain Relief Up</td><td>Use if you are connecting several wires</td><td></td></tr><tr><td>Strain Relief Down</td><td>Use if you are connecting only a few wires</td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

b. Install the top cover of the TB-414X by tightening the four screws removed inprevious steps to a torque of $0 . 3 \ : \mathsf { N } \cdot \mathsf { m }$ (2.7 lb · in.).

5. Connect the TB-414X to the module.

a. Align the female D-SUB connector on the back of the TB-414X and the male D-SUB connector on the front of the module and attach.

b. Tighten the thumbscrews on the front of the TB-414X until the terminal blockis secured to the module.


Figure 10. Installed TB-414X


![](images/957e853c4b7ebc3f11d8ab5ba71c746c7dd8ab494cae461a8e376c2f52a6e38d.jpg)


6. Power on the chassis.

![](images/19d7a6d9a79dbe95473ced13484c01aa5bd046158e5ee7ce6e77f491535c5122.jpg)


Note Low energy transients can appear at the output terminals of your

PXIe-4147 during certain situations, such as power-up, power-down,device driver loading, and self-calibration. Additionally in thesesituations, the output is pulled to ground through a $1 0 \mathsf { k } \Omega$ resistor.

The energy of the transients is typically less than $1 \mu \mathrm { J }$ , which is notenough to cause damage to most loads. However, some extremelysensitive devices could be affected. Additionally, the presence of the$1 0 \mathsf { k } \Omega$ pulldown to ground could pose a problem for some loads. If yoususpect your load could be affected, NI recommends that you disconnectall power supplies and SMU connections while performing any of theabove operations. To avoid transients caused by a power failure, consideremploying an uninterruptible power supply system.

To uninstall the TB-414X, loosen the thumbscrews on the front of the TB-414X anddetach the terminal block from the front of the module.

# Verifying the Ins erifying Installation in MA tion in MAX

You can use Measurement & Automation Explorer (MAX) to configure your NI hardware.MAX informs other programs about which NI hardware products are in the system andhow they are configured. MAX is automatically installed with NI-DCPower.

![](images/9342f8ff02d24e19225a8c7dcac5a05c4a4a77b0b596a55114600bf309d7609d.jpg)


Note MAX is not available on Linux.

1. Launch MAX.

2. In the configuration tree, expand Devices and Interfaces to see the list of installedNI hardware.

Installed modules appear under the name of their associated chassis.

3. Expand your Chassis tree item.

MAX lists all modules installed in the chassis. Your default names may vary.

![](images/ca9a5d3c557ffda229ea749e6ad4c41924b17022623f732fc158a94ab2a1e5aa.jpg)


Note If you do not see your module listed, press $\tt { < F 5 > }$ to refresh the listof installed modules. If the module is still not listed, power off the system,ensure the module is correctly installed, and restart.

4. Record the name MAX assigns to the hardware. Use this identifier whenprogramming the PXIe-4147.

5. Self-test the hardware by selecting the item in the configuration tree and clickingSelf-Test in the MAX toolbar.

MAX self-test performs a basic verification of hardware resources.

# What Should I Do if the PXIe-4147 Does Not Appear in MAX?

1. In the MAX configuration tree, expand Devices and Interfaces.

2. Expand the Chassis tree to see the list of installed hardware, and press $\tt { < F 5 > }$ torefresh the list.

3. If the module is still not listed, power off the system, ensure that all hardware iscorrectly installed, and restart the system.

4. Navigate to the Device Manager by right-clicking the Start button, and selectingDevice Manager.

5. Verify the PXIe-4147 appears in the Device Manager.

a. Under an NI entry, confirm that a PXIe-4147 entry appears.

![](images/f8de94131e80e9d7a9481c7acfb59e2670ada5f2f87803dbfd3aaaa6b23270b5.jpg)


Note If you are using a PC with a device for PXI remote controlsystem, under System Devices, also confirm that no error conditionsappear for the PCI-to-PCI Bridge.

b. If error conditions appear, reinstall NI-DCPower.

# What Should I Do if the PXIe-4147 Fails the Self-Test?

1. Reset the PXIe-4147 through Hardware Configuration Utility or MAX and thenperform the self-test again.

2. Restart the system, and then perform the self-test again.

3. Power off the chassis.

4. Reinstall the failed module in a different slot.

5. Power on the chassis.

6. Perform the self-test again.

# Self-Calibrating the PXIe-4147 in MAX

Self-calibration adjusts the PXIe-4147 for variations in the module environment. The

PXIe-4147 modules are externally calibrated at the factory, but you should perform acomplete self-calibration after you install the module.

1. Install the PXIe-4147 and let it warm up for the recommended warm-up time listedin the PXIe-4147 Specifications.


Note Warm up begins when the PXI chassis has been powered on andthe operating system has completely loaded.

2. Self-calibrate the PXIe-4147 by clicking the Self-Calibrate button in MAX or callingniDCPower Cal Self Calibrate (niDCPower_CalSelfCalibrate).


Note Specify all channels of your PXIe-4147 with the channel nameinput when calling niDCPower Cal Self Calibrate(niDCPower_CalSelfCalibrate). You cannot self-calibrate asubset of PXIe-4147 channels.


Note Low energy transients can appear at the output terminals of yourPXIe-4147 during certain situations, such as power-up, power-down,device driver loading, and self-calibration.

# Connecting Signals to the PXIe-4147

Refer to the following topics for guidance about PXIe-4147 signal connections.

• Use the Output HI and Output LO terminals for local sense measurements.

• Use the Output HI, Output LO, Sense HI, and Sense LO terminals for remote sensemeasurements.

• Use the Guard terminals remove the effects of leakage currents and parasiticcapacitance between Output HI and Output LO and/or Sense HI and Output LO.

# Making L Making Local Sense Me al Sense Measurements

Local sense measurements use a single set of leads for output and voltagemeasurement.


Figure 11. Connecting Signals for Local Sense Measurement



Power Supply/SMU Channel


![](images/99a68c0a1ead7531da98d2edc769760e1283314d6be2ab3c07bb60072d507588.jpg)


When the PXIe-4147 is operating in Constant Voltage mode, local sense forces therequested voltage at the output terminals of the module. The actual voltage at theDUT terminals is lower than the requested output because of the output leadresistance error.

The error in the DUT voltage measurement is due to the output current, the outputresistance of the source (specified as load regulation), and the resistance of the leadsused to connect the power supply or SMU to the load. This error can be calculatedusing the following equation:

Local Sense Error $( \mathsf { V o l t s } ) = I _ { o u t } ( R _ { l e a d 1 } + R _ { l e a d 2 } + R _ { o u t . s o u r c e } )$

The output resistance of the source typically includes the effective resistance ofprotection circuitry in series with the sourcing path, and is usually negligible incomparison to external resistance. However, for high-current applications, you maynotice the resistance of the protection circuitry. Use remote sense measurements forhigh-current applications.

# Using a Local Sense Hardware Configuration with a Remote SenseChannel Configuration

If the source has remote sense capabilities and a 2-wire configuration needs to bemaintained, you can remove the effect of any protection circuitry in series with thesourcing path by configuring the channel for remote sense and connecting the senseterminals externally to their respective output terminals, as illustrated in the followingfigure.


Figure 12. Connecting Local Sense Hardware with a Remote Sense Channel ConfigurationPower Supply/SMU Channel


![](images/3fc9fbf26897be8c47a2134a86eb00b4f964028e773fb2ee74ff4a9d8442a349.jpg)


# Making R Making Remote Sense Me e Sense Measurements

Use remote source measurements, also called 4-wire sense, for accurate readings.Connect four wires to the DUT for proper operation. Use 4-wire switches if your systemexpands the channel count. In a remote sense setup, one lead pair carries the outputcurrent. Another lead pair measures voltage directly at the DUT terminals.


Figure 13. Connecting for a Remote Sense Measurement



Power Supply/SMU Channel


![](images/5c82a07d670b1a42c4bac94c8d14aa842d6996409423ce551460ffaf8b20896e.jpg)


Tip Using remote sense enables more accurate voltage output andmeasurements when the output lead voltage drop is significant.

The output leads can carry several amps of current, depending on the instrument.Only a very small current flows through the sense leads. This results in a much smallervoltage drop error for measurements versus the local sense error. When you useremote sense with DC Voltage output, the device forces voltage at the sense lead ends.The device does not force voltage at the output terminals. When you use remote sensewith DC Current output, the device measures the voltage limit at the sense lead ends.The device does not measure the limit at the output terminals. Using remote senseresults in a voltage at the DUT terminals that is more accurate than using local sense.Connect the sense leads as close to the DUT terminals as possible.

When you use remote sense, expect voltage drop across high-current output leads.The drop usually stays within one or two volts per lead, depending on the powersupply or SMU. When you use DC Voltage output with remote sense, limit the voltagedrop across output leads to the specified maximum. Exceeding this drop may causethe load voltage to fall below the requested level.


Notice When you force current using DC Current output, monitor line dropcarefully. Excessive drop may switch the power supply or SMU to ConstantVoltage mode before reaching the requested current..

If you configure a channel for remote sense, connect the sense leads to the DUT. Failingto connect the sense leads may cause inaccurate measurements that fall outsidepublished specifications. If you configure a channel for remote sense and leave thesense leads open, the channel may source excessive voltage. This voltage may exceedthe requested level or the voltage limit.

Refer to the PXIe-4147 Specifications for more information about remote sensesupport and the maximum output lead voltage drop allowed.

The PXIe-4147 features internal open-sense protection through a 10 MΩ resistorbetween the force (Output HI/LO) and sense (Sense HI/LO) lines. This protectioncreates a secondary measurement path. It keeps the instrument output regulated ifremote sense becomes disconnected.

# Using the Guard Terminals

Guarding is a technique used to remove the effects of leakage currents and parasiticcapacitances between HI and LO.

Guard terminals are driven by a unity gain buffer that follows the voltage of the OutputHI terminal. In a typical test system where guarding is utilized, the Guard conductor isa shield surrounding the Output HI and Sense HI conductors. By making thisconnection, there is effectively a 0 V drop between Output HI and Guard, or Sense HIand Guard, so no leakage current flows from the Output HI or Sense HI conductor toany surrounding conductors. Some leakage current might still flow from the Guardoutput to Output LO. However, because the current is being supplied by a unity gainbuffer instead of Output HI, the current does not affect the output or measurement ofthe SMU.



Caution Do not connect Guard to the outer shield of coaxial cable if theguard potential will exceed 30 V RMS, 42.4 V peak, or 60 V DC on the outershield. Use a triaxial cable where higher voltages are needed, and connectthe Guard to the inner shield. All the Guard terminals for a given channel areequivalent and are always enabled.

Cable insulation impedance is typically high, but it can have a significant effect when

measuring small currents from high-impedance loads.

• When guarding is not used, the cable insulation impedance is in parallel with theload and causes the current measured at the device (IMeasured) to be the sum ofthe load current (ILoad) and the leakage current $( I _ { L } )$ , hence IMeasured = ILoad + IL.

• When guarding is used, the cable insulation impedance is still present, butbecause the voltage between Output HI and Guard, or Sense HI and Guard is $0 \vee$ ,no leakage current flows between them. The capacitance between Output HI andGuard, or Sense HI and Guard also doesn't have to charge. Some leakage current$( I G )$ flows from the Guard to Output LO, but this leakage does not affect themeasurement because the Guard's power is sourced from its own unity-gainbuffer. The result is the device accurately measures the current through the load,hence IMeasured $=$ ILoad.

In the following figures, the external shield of the cable could be connected to chassisground, and the figures assume that Output LO is connected to chassis ground.


Figure 14. Leakage without Guarding (IMeasured = ILoad + IL)


![](images/502fe1c7fc07b8995f70726a82284077eda512aaeb35659ee6c90080f6198993.jpg)



Figure 15. Reducing Leakage with Guarding (IMeasured $=$ ILoad)


![](images/17be8fab1b52fa0772b4360c774fc1810be6989cf7d0851e922d0974c7570a9a.jpg)


# Minimizing V Minimizing Voltage Drop Loss when Cabling oss when Cabling

Voltage drop loss is introduced by the cabling wires that connect the power supply orSMU to the load terminals.

The voltage drop due to current-resistance loss is determined by the resistance of thecabling wire (a property of the wire gauge and length) and the amount of currentflowing through the wire. Instruments with remote sense capabilities can compensatefor voltage drop by measuring the voltage across the load terminals with a second setof leads that do not carry a significant current.

To minimize voltage drop caused by cabling:

• Keep each wire pair as short as possible.

• Use the thickest wire gauge appropriate for your application. NI recommends18 AWG or lower.

To reduce noise picked up by the cables that connect the instrument to a load, twisteach wire pair. Refer to the following table to determine the wire gauge appropriate foryour application.


Caution Use wire that is thick enough to avoid overheating if the outputcurrent from the power supply or SMU were to short circuit.


Table 9. Wire Gauge and Noise


<table><tr><td>AWG Rating</td><td>mΩ/m (mΩ/ft)</td></tr><tr><td>10</td><td>3.3 (1.0)</td></tr><tr><td>12</td><td>5.2 (1.6)</td></tr><tr><td>14</td><td>8.3 (2.5)</td></tr><tr><td>16</td><td>13.2 (4.0)</td></tr><tr><td>18</td><td>21.0 (6.4)</td></tr><tr><td>20</td><td>33.5 (10.2)</td></tr><tr><td>22</td><td>52.8 (16.1)</td></tr><tr><td>24</td><td>84.3 (25.7)</td></tr><tr><td>26</td><td>133.9 (40.8)</td></tr><tr><td>28</td><td>212.9 (64.9)</td></tr></table>

# Calculating Voltage Drop

When cabling a power supply or SMU to a constant load, be sure to account for voltagedrop in your application. If necessary, adjust the output voltage of the device or, ifavailable, use remote sensing.

Use the amount of current flowing through the cabling wires and the resistance of thewires to calculate the total voltage drop for each load, as shown in the followingexample:

Operating within the recommended current rating, determine the maximum voltagedrop across a 1 m, 16 AWG wire carrying 1 A:

$$
V = I \times R
$$

$$
V = 1 A \times (1 3. 2 m \Omega / m \times 1 m)
$$

$$
V = 1 3. 2 \mathrm {m V}
$$

As illustrated in the preceding example, a 1 m, 16 AWG wire carrying 1 A results in avoltage drop of $1 3 . 2 \mathsf { m V } .$ .

# Cabling for Low-Level Measurements

Low-level measurements require tight control over system setup and cabling. Longcables and large current loops degrade source and measurement quality even in low-noise environments.

To maintain measurement quality:

• Always limit the length of the cables involved in your system setup.

• Keep the current return path as close as possible to the current source path byusing twisted pair cabling.

To reduce the susceptibility of low currents to noise and other unwanted interferingsignals:

• Use shielded cables, such as coaxial cables.

• Connect the outer conductor of the shielded cable to the common or groundterminal of the channel.

To reduce the effects of leakage currents:

• Use shielded cables, such as triaxial cables.

• Connect the Guard terminal to the inner shield of the cable and Output LO to theouter shield.

# Source Modes

The PXIe-4147 channels can generate voltage and current in Single Point orSequence source mode.

Within Single Point and Sequence source mode, you can output the following:

• DC voltage

• DC current

The Source Mode With Channels function defines the source mode the PXIe-4147channels are operating in.

# Single Point Source Mode

In Single Point source mode, the source unit applies a single source configurationwhen it enters the Running state.

You can then update the source configuration dynamically (when a channel is in theRunning state) by modifying those properties that support dynamic reconfiguration.

# Sequence Source Mode

In Sequence source mode, the source unit steps through a predetermined set ofsource configurations. Each sequence comprises a series of outputs for an NI-DCPowerchannel.

Sequence source mode encompasses two types of sequences:

• Simple sequence—Allows you to define a series of voltage outputs or currentoutputs and source delays for a single channel.

• Advanced sequence—Allows you to define numerous properties per sequencestep, in addition to basic voltage outputs or current outputs and source delays, forany number of channels.


Note You cannot program both simple sequences and advanced sequenceswithin the same session.

A channel steps through a sequence without any interaction between the host systemand NI-DCPower. Because the host system is not involved in executing the changesbetween steps of the sequence, the changes between steps in a sequence aredeterministic.

# Simple Sequences versus Advanced Sequences

In Sequence Source Mode, you can use either simple sequencing or advancedsequencing. Each sequencing type has distinct capabilities and each is supporteddifferently.

<table><tr><td>Task</td><td>Simple Sequencing</td><td>Advanced Sequencing</td></tr><tr><td>How to create</td><td>Set the Source Mode to Sequence and use the Set Sequence function</td><td>Set the Source Mode to Sequence; use the Create Advanced Sequence With Channels function, related advanced sequencing functions, and individual NI-DCPower properties</td></tr><tr><td>What you can configure</td><td>Voltage or current levels per step of the sequence, along with Source Delay for each step</td><td>A wide variety of NI-DCPower properties per step of the sequence</td></tr><tr><td>Channels the sequence applies to</td><td>• LabVIEW NXG: single channel only
• Other environments: any number of channels</td><td>Any number of channels</td></tr><tr><td>Controlling the initial state</td><td>Manually configure the channel(s) before calling the Set Sequence function</td><td>You can create a Commit step to configure channels to a known state before the sequence runs</td></tr><tr><td>Importing and exporting sequences</td><td>No capability</td><td>Can be transferred between sessions with the Export Attribute Configuration and Import Attribute Configuration functions</td></tr></table>


Note You cannot program both simple sequences and advanced sequenceswithin the same session.

Refer to the NI-DCPower examples in your application development environment tosee how you can program with simple sequences and advanced sequences.

# Sourcing Voltage and C e Current

The PXIe-4147 can perform operations to source and measure voltage and current. Inorder to perform these operations, use the NI-DCPower driver to configure softwaresettings and execute operations.

Refer to the following table for an overview of common source and measureoperations as well as the software setting combinations that enable the PXIe-4147 toperform each operation.


Table 10. Software Settings for PXIe-4147 Source and Measure Operations


<table><tr><td rowspan="2">PXle-4147 Operation</td><td colspan="2">Software Settings</td></tr><tr><td>Output Function</td><td>Source Mode</td></tr><tr><td>Source voltage</td><td rowspan="2">DC Voltage</td><td rowspan="4">Single Point or Sequence</td></tr><tr><td>Measure current or voltage</td></tr><tr><td>Source current</td><td rowspan="2">DC Current</td></tr><tr><td>Measure voltage or current</td></tr></table>

Complete the following general steps to source current or voltage.

1. Initialize a Session

Use the NI-DCPower driver to initialize a session with the PXIe-4147.

2. Configure the PXIe-4147 for Sourcing

Use the NI-DCPower driver with the PXIe-4147 to control the output the instrumentgenerates. Depending on the output function and source mode, you can configurethe appropriate output levels and limits.

3. Configure the PXIe-4147 for Measuring

Once you configure channels and they are in the Running state, the PXIe-4147 cantake measurements.

4. Configure Triggers and Events

You can use triggers and events to coordinate the operation of multiple channelsand instruments.

5. Initiate the PXIe-4147 for Sourcing and Measuring

Initiate the channels of the PXIe-4147 to apply a configuration and start generating.

6. Acquire Measurements

The applied channel configuration determines how the PXIe-4147 acquiresmeasurements.

7. Cease Generation

NI-DCPower includes one option for stopping generation on PXIe-4147 channelsand returning the channels to a known state.

8. Close the Session

Use the NI-DCPower driver to close a session with the PXIe-4147.

# Initialize a Session

Use the NI-DCPower driver to initialize a session with the PXIe-4147.

Use the niDCPower Initialize With Independent Channels VI or theniDCPower_InitializeWithIndependentChannels function to initialize a session.

For any application you write, you must open a session to establish communicationwith the PXIe-4147 or specified channel(s) by initializing.

Initializing returns an instrument handle with the session configured to a known state.Initialization can take a significant amount of time compared to other NI-DCPower VIsand functions, so you should not include it in a loop when repeatedly acquiring data.Ideally, your program should call Initialize With Independent Channels one time. If thereset parameter is set to TRUE, device channels are reset to the default state, whichmay include resetting relays.

# Configure the PXIe-4147 for Sourcing

Use the NI-DCPower driver with the PXIe-4147 to control the output the instrumentgenerates. Depending on the output function and source mode, you can configure theappropriate output levels and limits.

Complete the following steps to define an output type, choose a source mode, and setthe output levels and limits relevant to those selections.

1. Use the Configure Output Function function to set the output type you want togenerate: DC Voltage or DC Current.

◦ Select an output type:

<table><tr><td>Option</td><td>Description</td></tr><tr><td>DC Voltage</td><td>A channel attempts to generate the desired output voltage level, as long as the output current is below the current limit.</td></tr><tr><td>DC Current</td><td>A channel attempts to generate the desired output current level, as long as the output voltage is below the voltage limit.</td></tr></table>

2. Configure the source mode with the Configure Source Mode With Channelsfunction.

The source mode controls how the channel generates output levels.

3. Depending on your output function and source mode, set the relevant levels andlimits with the following functions and/or properties.

◦ DC output functions:

<table><tr><td>Output Function</td><td colspan="2">Source Mode</td><td>Level Control</td><td>Limit Control</td></tr><tr><td rowspan="3">DC Voltage</td><td colspan="2">Single Point</td><td>voltage level input to Configure Voltage Level</td><td>current limit input to Configure Current Limit</td></tr><tr><td rowspan="2">Sequence</td><td>Simple sequence</td><td>values input to Set Sequence</td><td>current limit input to Configure Current Limit</td></tr><tr><td>Advanced sequence</td><td>Voltage Level property</td><td>Current Limit property</td></tr><tr><td rowspan="2">DC Current</td><td colspan="2">Single Point</td><td>current level input to Configure Current Level</td><td>voltage limit input to Configure Voltage Limit</td></tr><tr><td>Sequence</td><td>Simple sequence</td><td>values input to Set Sequence</td><td>voltage limit input to Configure Voltage Limit</td></tr><tr><td></td><td></td><td>Advanced sequence</td><td>Current Level property</td><td>Voltage Limit property</td></tr></table>

4. Further define the parameters of the channel output.

The NI-DCPower API includes numerous functions and properties to exert finercontrol over the output. For example, among other aspects, you can specify outputranges, set asymmetric compliance limits with respect to zero, control the on andoff time of pulses, or take advantage of triggering.

# Configure the PXIe-4147 for Measuring

Once you configure channels and they are in the Running state, the PXIe-4147 can takemeasurements.

Use the niDCPower Measure property or the NIDCPOWER_ATTR_MEASURE_WHENattribute to configure how NI-DCPower takes measurements.

The following table lists the settings for the niDCPower Measure property or theNIDCPOWER_ATTR_MEASURE_WHEN attribute.

<table><tr><td>Measure When</td><td>Details</td></tr><tr><td>On Demand</td><td>Acquire measurements on demand using the niDCPower Measure VI and the niDCPower_Measure function to measure either the voltage or the current on a single channel. Or use the niDCPower Measure Multiple VI and the niDCPower_MeasureMultiple function to measure both the voltage and the current on multiple channels. When you call these VIs and functions, the PXIe-4147 takes a measurement and returns it.</td></tr><tr><td>Automatically after Source Complete</td><td>The PXIe-4147 acquires a measurement after every source operation and stores it in a buffer on the device. You can use the niDCPower Fetch Multiple VI and the niDCPower_FetchMultiple function to retrieve measurements from the buffer.</td></tr><tr><td>On Measure Trigger</td><td>The PXIe-4147 acquires a measurement when it receives a Measure trigger and stores it in a buffer on the device. You can use the niDCPower Fetch Multiple VI and the niDCPower_FetchMultiple function to retrieve measurements from the buffer.</td></tr></table>

# Configur Configure Triggers and E ers and Events

You can use triggers and events to coordinate the operation of multiple channels andinstruments.

# Triggers

A trigger is an input signal received by an instrument or instrument channel thatcauses the instrument or channel to perform an action. Triggers are routed to inputterminals to coordinate actions.

An input terminal is a physical trigger line, such as a PXI trigger line, or an outputterminal on another instrument or channel, where an instrument or channel awaits adigital edge trigger signal.

For purposes of programming instruments with NI APIs, triggers comprise two parts:

• The action, represented with the name of the trigger, that you want the instrumentor channel to take.

• The signal condition you want to serve as the stimulus for that action (for example,a rising or falling digital edge on a signal, or a software-generated edge youconfigure).

Triggers can be internal (software-generated) or external. You can export externaltriggers and use them with events to synchronize hardware operation with externalcircuitry or other instruments.

Most NI-DCPower instruments accept external triggers routed between theinstruments using PXI trigger lines. Events assigned to a PXI trigger line can coordinateactions across channels and across instruments.

# Events

An event is a signal generated by an instrument or instrument channel that indicatesa specific operation was completed or a specific state was reached. Events can berouted to output terminals to coordinate the action of multiple channels ormultiple instruments.

For purposes of programming instruments with NI APIs, you can control three aspectsof the pulse that represents each discrete event type:

• Polarity

• Width

• Destination

Event output terminals enable you to route an event signal pulse to external devices.You can modify the polarity and duration of the pulse that is generated when an eventoccurs to be compatible with trigger inputs of external devices.

You typically configure events for a specific hardware condition and then export thoseevents for use in the test program or export them to a PXI trigger line to cause anaction in another instrument configured to wait for a trigger on the same PXI triggerline.

# NI-DCPower Named Trigger Types

Named trigger types in NI-DCPower define the action you want an instrument orinstrument channel to take upon detecting a specific signal condition.

The following named triggers are available for NI-DCPower instruments:

• Start—In Sequence source mode, a channel waits for a Start trigger upon enteringthe Running state; receiving the Start trigger causes a channel to begin source andmeasure operations.

A channel does not perform any source or measure operations until it receives thistrigger.

This trigger is not used in Single Point source mode.

• Source—Receiving a Source trigger causes a channel to modify the sourceconfiguration.

This trigger is available only when sourcing DC voltage or DC current.

• Measure—Receiving a Measure trigger, if Measure When is set to On Measure

Trigger, causes a channel to take a measurement.

A channel ignores this trigger if a measurement is already in progress or if MeasureWhen is set to a different value.

• Sequence Advance—In Sequence source mode, a channel waits for the Sequence Advance trigger once an iteration of a sequence completes; receiving a SequenceAdvance trigger causes the channel to begin the next iteration of the sequence.

Sequence Loop Count must be set to a value greater than one for a sequence toiterate, and thus for this trigger to occur.

This trigger is not used in Single Point source mode.

# Trigger Signal Conditions

NI-DCPower includes three possible signal conditions that can serve as the stimulusfor an action an instrument or channel can take: digital edge, software edge, and none(disabled).

# Digital Edge

A channel performs an operation corresponding to a trigger when the channel detectsa rising edge or a falling edge on a physical trigger line. Digital edge triggering is idealfor synchronizing channels.

You can configure each named trigger in NI-DCPower to operate based on a digitaledge.


Figure 16. Digital Edge Trigger


![](images/863f1619e3198d201b39341df9c265d6549eeb00dd042ef60e1c3ce6718043f0.jpg)


The channels may be on the same or different physical instruments. If they are ondifferent physical instruments, NI-DCPower routes the signal over the PXI backplane

trigger lines.

To configure a digital edge trigger, you must specify the input terminal that should beconnected to the trigger. The input terminal can be a physical trigger line or an outputterminal from another instrument or channel. If you specify an output terminal fromanother instrument, NI-DCPower automatically finds a route (if one is available) fromthat terminal to the input terminal via a physical PXI backplane trigger line.

# Software Edge

When configured for software edge triggering, channels wait to receive a trigger signalsent when you call Send Software Edge Trigger.

You can configure each named trigger in NI-DCPower to operate based on a softwareedge trigger.

# None (Disabled)

When a trigger is configured as "none" (disabled), channels do not wait for any specificsignal condition to occur before performing the action that corresponds to that trigger.

For example, if the Source trigger type is set to "none," a channel does not need toreceive a Source trigger to begin a source operation.

# NI-DCPower Named Event Types

You can route events on most NI-DCPower instruments. NI-DCPower includes specificevents you can use in tandem with triggers to coordinate actions across channels of aninstrument and across instruments.

• Source Complete—Generated by a channel when a sourcing operation, plus anyconfigured source delay, is completed.

In Single Point source mode, this event is generated whenever the sourceconfiguration is modified plus the associated source delay.

In Sequence source mode, this event is generated after each step of the sequenceplus the associated source delay for the step.

The amount of configurable delay you can add depends on your instrument.

• Sequence Iteration Complete—Generated in Sequence source mode once all stepsin a single iteration of a sequence are completed.

One event is generated per iteration of the sequence. For example, if the sequenceis configured to loop ten times on a channel, the channel generates ten events.

• Sequence Engine Done—Generated in Sequence source mode once all iterationsof a sequence are completed.

• Measure Complete—Generated when a measurement, plus any configuredmeasure delay, is completed.

The amount of configurable measure delay you can add depends on yourinstrument.

# NI-DCPower Event Signal Configurations

Each event type in NI-DCPower has its own set of three properties that you can use toconfigure the polarity, width, and destination of the event pulse signal.

• Pulse polarity—Whether the generated event pulse is a rising edge (positive pulse)or a falling edge (negative pulse)

• Pulse width—The duration of the event pulse

• Output terminal—The physical trigger line or input terminal on anotherinstrument or channel to which the event is routed

# Valid Pulse Widths for Events on the PXI Platform

PXI instruments have an allowable range of pulse widths you can configure for events.

You set the pulse width in terms of the duration, in seconds, the pulse should last.Pulse width applies only to events that are connected to external physical trigger lines,such as the PXI trigger lines. The PXIe instrument event pulse width range is [250 ns,1.6 µs].

This range is defined by the PXI Express Specification.

# NI-DCPower Synchronization Methods

Synchronization allows you to coordinate the action of multiple NI instruments. Thereare multiple approaches to synchronizing NI instruments; the accuracy (trigger delayand jitter) of the synchronization depends on the approach you take and the systemand instruments in use.

NI-DCPower supports the following synchronization methods.

• Software-Based Synchronization—Sends a software command from a hostcomputer to an instrument. Not deterministic on general-purpose operatingsystems such as Windows.

Accuracy: tens of milliseconds

• Time-Based Synchronization—Uses a time-based protocol such as GPS, 1588, orIRIG-B to coordinate events. Can be used over large distances $\left( > 1 0 \mathsf { m } \right)$ . Remotechassis that include a PXI synchronization module can be programmed to generatetriggers on the backplane at a specific time.

Accuracy: <100 ns $^ +$ NI-DCPower instrument trigger delay and jitter

• Signal-Based Synchronization—Uses trigger signals to coordinate operations.Comprises the following:

• PXI Trigger Routing—Sends a trigger signal, which corresponds to an event,from one instrument to another through the routes available in a PXI chassis(for PXIe/PXI instruments). The closer the signal paths between instrumentsare in length, the better the synchronization accuracy.

Accuracy: tens of nanoseconds $^ +$ NI-DCPower instrument trigger delay andjitter

• External Triggering—Sends a signal external to a PXI chassis or, for otherinstrument form factors, to an instrument through I/O lines. The closer thesignal paths between instruments are in length, the better the synchronizationaccuracy. Time locking improves determinism.

Note Most NI-DCPower instruments cannot receive external digital

triggers via their front panels. However, for NI-DCPower instrumentsthat support triggering, you can send an external trigger to theinstrument through another instrument installed in your chassis thatdoes accept external triggers. You can route these trigger signalsthrough the trigger lines on the chassis backplane.

Refer to the PXIe-4147 Specifications for the trigger delay and jitter of yourinstrument.

# Multichannel Synchronization and Signal Routing in NI-DCPower

You can synchronize multiple channels with NI-DCPower by routing signals—eventsand triggers—from one channel to another, including channels that span multiplephysical instruments.

You can export (route) the trigger and event signals to one of the physical PXIbackplane trigger lines using Export Signal With Channels.

Tip You can use Wait For Event With Channels to make a channel wait to takean action until a specific event is generated.

Instead of explicitly exporting signals to physical trigger lines, NI-DCPower canautomatically create routes for you. To have NI-DCPower automatically create routes,set the digital edge input terminal of one channel to be the event from anotherchannel.

Example: Synchr ample: Synchronizing Me onizing Measure and Sour e and Source Operations

To make PXI1Slot3/0 wait for the measurement of PXI1Slot3/1 to completebefore PXI1Slot3/0 changes the source configuration, route the Measure Completeevent of PXI1Slot3/1 to the Source trigger of PXI1Slot3/0.

To do this, configure the Source trigger of PXI1Slot3/0 to anticipate a digital edgeand set the input terminal to /PXI1Slot3/Engine1/MeasureCompleteEvent.

# Initiate the PXIe-4147 for Sourcing and Measuring

Initiate the channels of the PXIe-4147 to apply a configuration and start generating.

Use the niDCPower Initiate With Channels VI or the niDCPower_InitiateWithChannelsfunction to apply the configuration and start generating voltage or current.

# Acquire Measurements

The applied channel configuration determines how the PXIe-4147 acquiresmeasurements.

# Measuring and Querying

Use the following functions to acquire measurements in Single Point source mode:

1. Measure with the niDCPower Measure Multiple VI or theniDCPower_MeasureMultiple function.

2. Call the niDCPower Query in Compliance VI or the niDCPower_QueryInCompliancefunction to query the output state.

# Fetching

The PXIe-4147 automatically acquires measurements when you configure thefollowing VIs or functions:

• niDCPower Create Advanced Sequence With Channels VI or theniDCPower_CreateAdvancedSequenceWithChannels function

• niDCPower Set Sequence VI or the niDCPower_SetSequence function

• niDCPower Configure Output Function VI set to Pulse Voltage or Pulse Current orthe niDCPower_ConfigureOutputFunction function set toNIDCPOWER_VAL_PULSE_CURRENT or NIDCPOWER_VAL_PULSE_VOLTAGE

These measurements are automatically acquired by coercing the niDCPower MeasureWhen property to Automatically After Source Complete or theNIDCPOWER_ATTR_MEASURE_WHEN attribute toNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE. To fetch these

measurements, call the niDCPower Fetch Multiple VI or the niDCPower_FetchMultiplefunction. NI-DCPower returns the measurement values in an array.

Note If you want the measure unit to operate independently of the sourceunit in this context, set the niDCPower Measure When property or theNIDCPOWER_ATTR_MEASURE_WHEN attribute to a value other thanAutomatically After Source Complete orNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE.

# Cease Generation

NI-DCPower includes one option for stopping generation on PXIe-4147 channels andreturning the channels to a known state.

<table><tr><td>Option</td><td>How To</td><td>Description</td></tr><tr><td>Disabling the output</td><td>Set the Output Enabled property to False</td><td>Generates 0 V on a channel. ±2% of the current limit range presently configured for the channel remains on the channel.</td></tr></table>

# Disabling the Output

The output of a channel is enabled by default when the channel enters the Runningstate. However, you can programmatically enable and disable the output channel(s) ofthe PXIe-4147.

When you disable the output of the PXIe-4147, the instrument is configured to output aDC voltage at 0 V with current limits at $\pm 2 \%$ of the presently configured current limitrange in, unless otherwise noted, a low-impedance state.

When you enable a previously disabled channel, levels and limits are applied to thechannel depending on the output function as follows:

• Voltage output functions—The programmed voltage level and current limit areapplied to the channel(s)

• Current output functions—The programmed current level and voltage limit areapplied to the channel(s)

You can use the Configure Output Enabled function to toggle the output of aninstrument.


Tip To ensure the output is disabled on the hardware, after using theConfigure Output Enabled function or Output Enabled property, use the WaitFor Event With Channels function. This function waits for the SourceComplete event before calling the Abort With Channels function to transitionthe session out of the Running state.

# Close the Session

Use the NI-DCPower driver to close a session with the PXIe-4147.

Use the niDCPower Close VI or the niDCPower_close function to close a session.

Closing a session is essential for freeing resources, including deallocating memory,destroying threads, and freeing operating system resources. You should close everysession that you initialize, even if an error occurs during the program. When debuggingyour application, it is common to abort execution before you close. While aborting theexecution should not cause problems, NI does not recommend doing so.

When you close a session, the channels continue to operate in their last configuredstate. If you close a session while the output channels are enabled and activelysourcing or sinking power, the channels continue to source or sink power until they aredisabled or reset.

# Example Programs

NI-DCPower includes several example applications that demonstrate the functionalityof your device and can serve as interactive tools, programming models, and buildingblocks for your own applications.

# NI Example Finder

The NI Example Finder is a utility that organizes examples into categories and allowsyou to browse and search installed examples. For example, search for "DCPower" tolocate all NI-DCPower examples. You can see descriptions and compatible hardwaremodels for each example or see all the examples compatible with one particularhardware model.

To locate examples using the NI Example Finder within LabVIEW or LabWindows/CVI,select Help » Find Examples and navigate to Hardware Input and Output » ModularInstruments » NI-DCPower.

# Installed Example Locations

The installation location for NI-DCPower example programs differs by programminglanguage and development environment. Refer to the following table for informationabout example program installation locations.


Table 11. Installed NI-DCPower Example Locations


<table><tr><td colspan="2">Option</td><td>Installed Example Location</td></tr><tr><td colspan="2">LabVIEW</td><td>&lt;LabVIEW&gt;\examples\instr\nidcpower, where &lt;LabVIEW&gt; is the directory for the specific LabVIEW version that is installed.</td></tr><tr><td colspan="2">LabWindows/CVI</td><td>Users\Public\Documents\National Instruments\CVI\samples\niDCPower</td></tr><tr><td rowspan="2">.NET</td><td>4.0</td><td>Users\Public\Documents\National Instruments\NI-DCPower\Examples\DotNET 4.0</td></tr><tr><td>4.5</td><td>Users\Public\Documents\National Instruments\NI-DCPower\Examples\DotNET 4.5</td></tr></table>

# Common Example Programs

The following NI-DCPower example programs demonstrate common SMU and powersupply functions and operations.

• NI-DCPower Source DC Voltage—Demonstrates how to force an output voltage.

• NI-DCPower Source DC Current—Demonstrates how to force an output current.

• NI-DCPower Hardware Timed Voltage Sweep—Demonstrates how to sweep thevoltage on a single channel and display the results in a graph.

• NI-DCPower Measure Record—Demonstrates how to take multiple measurementsin succession.

• NI-DCPower Measure Step Response—Demonstrates how to measure the outputwhile it is changing.

Note PXI-4110 and PXI-4130 do not support the following NI-DCPowerexample programs:

• NI-DCPower Hardware Timed Voltage Sweep

• NI-DCPower Measure Record

• NI-DCPower Measure Step Response

# PXIe-4147 Operating Guidelines

Refer to the following sections for information about PXIe-4147 features and guidelinesfor operating the PXIe-4147.

# Sourcing and Sinking

The terms sourcing and sinking describe power flow into and out of a device,respectively.

Devices that are sourcing power are delivering power into a load, while devices thatare sinking power behave like a load, absorbing power that is being driven into themand providing a return path for current.

A battery is one example of a device that is capable of both sourcing and sinkingpower. During the charging process, the battery acts as a power sink by drawingcurrent from the charging circuit. After it has been removed from the charger andinstalled into an electronic device, the battery begins to act as a source that deliverspower to a load.

The following quadrant diagram graphically represents whether a particular channel issourcing or sinking power. Quadrants consist of the various combinations of positiveand negative currents and voltages. Quadrants I and III represent sourcing power,while Quadrants II and IV represent sinking power.

![](images/978e15f53e5f4a5eeffba057eb07bd8b5919e426030772e74e805bafae13b689.jpg)


For example, when you have a positive voltage and current flowing out of the positiveterminal (that is, a positive current), the output operation falls within Quadrant I and issourcing power. When you have a positive voltage and a current flowing into thepositive terminal (that is, a negative current), the output operation falls withinQuadrant IV, and is sinking power.

A single-quadrant channel on a power supply can operate only in one quadrant. Forexample, while the PXI-4110 has multiple channels capable of sourcing power in eitherQuadrant I or Quadrant III, individually, each channel on the PXI-4110 can operate onlywithin one quadrant (channels 0 and 1 operate only within Quadrant I, and channel 2operates only within Quadrant III). Thus, all channels on the PXI-4110 are single-quadrant supplies.

Devices that are capable of sourcing power in both Quadrant I and III are sometimesreferred to as bipolar because they can generate both positive and negative voltagesand currents. Bipolar output channels may or may not have current sinkingcapabilities (Quadrants II and IV).

An output channel on a four-quadrant power supply or SMU can both source and sinkpower with a positive or negative voltage and current. For example, a PXI-413x SMU iscapable of both sourcing power in Quadrant I or Quadrant III and sinking power inQuadrant II or Quadrant IV. Thus, PXI-413x SMUs are bipolar, four-quadrant devices.

Because of the required power dissipation, sourcing and sinking capabilities for achannel are not always identical. Refer to the PXIe-4147 Specifications for more

information about the sourcing and sinking capabilities of your device, as well asdetailed power limits.

# Output Impedance

NI power supplies and SMUs include output amplifiers that drive their outputs throughseries resistors. The resistors enable the measurement and control of output current.The value of the resistor is larger for low-current ranges and smaller for high-currentranges.

Depending on whether the device is in constant voltage mode or in constant currentmode, feedback can make the output behave like a true voltage or current source atDC. At higher frequencies, there is no feedback, and the output behaves like a voltagesource in series with the selected output resistor.

In constant current mode, the controller forces the output current, as determined bythe voltage across the sense resistor, to match the setpoint, regardless of the actualoutput voltage. The slew rate of the instrument to a new setpoint will be limited byoutput capacitance in constant current mode.

In constant voltage mode, the controller forces the output voltage to match thesetpoint, even when there is a voltage drop across the resistor. The slew rate of theinstrument to a new setpoint will be limited by output inductance in constant voltagemode.

# Output Capacitance

• Virtual Capacitance—Represents a capacitance synthesized by the action of acontrol loop on a resistor rather than from an actual capacitor. A true currentsource has an output impedance of infinity. Because of the finite bandwidth of thecontrol loop, the output behaves like a true current source only at DC. At higherfrequencies, the output impedance approaches the value of the series resistance.The output behaves like a current source in parallel with a capacitor. The value ofthe virtual capacitance increases as the output current decreases in percent of full-scale range.

• Real Capacitance—Capacitance added by components and interconnections in thedevice. Generally, this real capacitance is smaller than the virtual capacitancecaused by the operation of the control loop, especially in high current ranges.

However, some devices include large values of real output capacitance to improveperformance for certain use cases.

# Output Inductance

• Virtual Inductance—Represents an inductance synthesized by the action of acontrol loop on a resistor rather than from an actual inductor. A true voltage sourcehas an output impedance of zero. Because of the finite bandwidth of the controlloop, the output behaves like a true voltage source only at DC. At higherfrequencies, the output impedance approaches the value of the series resistance.In general, the output behaves like a voltage source in series with a parallelcombination of the series resistance and an inductor.

• Real Inductance—Inductance added by components and interconnections in thedevice. Generally, this real inductance is smaller than the virtual inductancecaused by the operation of the control loop, especially in low current ranges.

# Decreasing Output Capacitance

Output capacitance has an effect on the output slew rate. You can decrease outputcapacitance and increase the speed of the PXIe-4147.

# Decreasing Virtual Output Capacitance

Virtual output capacitance can significantly limit output slew rate. For example,consider the PXIe-4147 stepping from 0 V to $_ { 2 \vee }$ in the 100 mA range with a 1 mAcompliance limit. Even in the absence of a load, the 1 mA compliance current chargingthe virtual capacitance limits the output slew rate. You can adjust the settings ofNI-DCPower to decrease the effect of virtual output capacitance.

# Decreasing Real Output Capacitance

Real output capacitance can limit slew rate.

You can perform any of the following actions to decrease output capacitance:

• Reduce the capacitance of fixtures or switches.

• Use shorter length cabling to reduce the actual capacitance of the load.

When slew rate is limited by the current available to charge a real output capacitance,

changing ranges or GBW settings has no effect. Changing ranges or GBW settingsaffects only the virtual output capacitance.

# Using NI-DCPower to Decrease the Impact of Output Capacitance

You can perform any of the following actions in NI-DCPower to decrease the impact ofoutput capacitance:

• Select the smallest current range consistent with the current limit usingniDCPower Configure Current Limit and niDCPower Configure Current Limit Range.For instance, using the 1 mA range in the previous example decreases the virtualcapacitance by a factor of over 100, effectively removing the virtual-capacitance-related slew rate limit.

• Increase the compliance limit. The real output capacitance does not decrease, butthe current available to charge it increases. Increasing the compliance limit to$\mathsf { 1 0 0 } \mathsf { m } \mathsf { A }$ in the preceding example effectively removes the output-current-relatedslew rate limit.

• Increase the gain-bandwidth (GBW) product in current mode by setting thetransient response using the niDCPower_Transient Response property or theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute. There are two settingoptions:

◦ Set the transient response to Fast instead of Normal.

◦ Set transient response to Custom and increase the current-mode GBW setting.

Because there is no load in this example, it takes a significant change in DACsettings to cause a small change in output current. This condition means thatthe overall loop gain is low for current, and you can increase the current-modeGBW product to compensate without compromising stability. Setting current-mode GBW to the maximum value of 20 MHz reduces the output capacitanceand results in a substantial speed increase.

Note The current ADC does not measure the current that charges the virtualoutput capacitance. Therefore, when the output slew rate is limited by theavailable charging current, that current may not be measured by the currentmeasurement circuitry.

# Decreasing Output Inductance

Cable inductance has an effect on the output current slew rate. You can decreasecabling inductance and increase the speed of the PXIe-4147.

You can perform any of the following actions to decrease output inductance:

• Use shorter length cabling.

• Reduce the loop area between Output HI and Output LO.

# Setting Programmable Output Resistance

You can program the channel of the PXIe-4147 to vary the output resistance.

The positive range of the output resistance allows the channel to emulate real-worlddevices with nonzero output resistance. The negative resistance range allows you tocompensate for voltage drops due to resistive losses between the remote sense pointsand the DUT terminals.

Use the niDCPower Configure Output Resistance VI or the

niDCPower_Configure_Output_Resistance function to set the outputresistance. Refer to the PXIe-4147 Specifications for more information about thevalues to which you can set the output resistance.

# Overload Protection (OLP) tion (OLP)

The PXIe-4147 is protected against overcurrent (OCP) conditions and overvoltage(OVP) conditions.


Note Refer to NI-DCPower Overload Protection Error (OLP) Codes for moreinformation about these NI-DCPower errors.

# Overcurrent Protection (OCP)

Overcurrent Protection (OCP) engages protection circuitry when the maximumspecified current has been surpassed. This feature disables the output of the affected

channel and disconnects the channel circuitry from the output connector pins. Byinternally disconnecting the output, it protects both the PXIe-4147 and the deviceunder test (DUT).

To clear an OCP condition, first identify and fix the cause of the error and then resetthe channel or device in MAX or use the niDCPower Reset Device VI or theniDCPower_ResetDevice function.

Do not apply voltages at the output that exceed the ratings of the PXIe-4147. Refer tothe PXIe-4147 Specifications for information about voltage ratings.

# Overvoltage Protection (OVP)

Overvoltage Protection (OVP) is a feature that prevents excessive voltage from beingapplied to a device under test (DUT) connected to an SMU or power supply. Whenvoltage output exceeds a certain limit, the device output shuts down and NI-DCPowergenerates an error.

To clear an OVP error condition, first identify and fix the cause of the error and thenuse the niDCPower Reset VI or the niDCPower_Reset function.

# Load Regulation

Load regulation is a measure of the ability of an output channel to remain constantgiven changes in the load.

Depending on the control mode enabled on the output channel, the load regulationspecification can be expressed in one of two ways:

• In constant voltage mode, variations in output current result in changes in theoutput voltage. This variation is expressed as a percentage of output voltage rangeper amp of current change, or as a change in voltage per amp of current change,and is synonymous with a series resistance.

◦ When using local sense in constant voltage mode, the load regulationspecification defines how close the output series resistance is to 0 Ω—theseries resistance of an ideal voltage source. Many supplies have protectioncircuitry at the output that slightly increases the output series resistance.

◦ You can use remote sense to improve the load regulation performance, evenwhile maintaining a 2-wire configuration. Configure the channel for remotesense and connect the sense terminals externally to their respective outputterminals (connect Sense LO to Output LO, and Sense HI to Output HI).

• In constant current mode, variations in load voltage result in changes to the outputcurrent. This variation is typically expressed as a percentage of output currentrange per volt of output change, and is synonymous with a resistance in parallelwith the output channel terminals. In constant current mode, the load regulationspecification defines how close the output shunt resistance is to infinity—theparallel resistance of an ideal current source. In fact, when load regulation isspecified in constant current mode, parallel resistance is expressed as 1/loadregulation.

# Inductive Loads

In constant voltage mode, most inductive loads remain stable. However, whenoperating in constant current mode in higher current ranges, increasing outputcapacitance may help improve stability.

# Capacitive Loads

Generally, a power supply or SMU remains stable when driving a capacitive load.Occasionally, certain capacitive loads can cause ringing in the transient response ofthe instrument. The instrument may temporarily move into constant current mode orunregulated mode when the output voltage is reprogrammed while capacitive loadsare present.

The slew rate is the maximum rate of change of the output voltage as a function oftime. When driving a capacitor, the slew rate is limited to the output current limitdivided by the total load capacitance, as expressed in the following equation:

$$
(\Delta \boldsymbol {V} / \Delta \boldsymbol {t}) = (\boldsymbol {I} / \boldsymbol {C})
$$

where ΔV is the change in the output voltage

Δt is the change in time

Tis the current limit

Cis the total capacitance across the load

Series resistance and lead inductance from cabling can affect the stability of thedevice. In some situations, you may need to increase the capacitive load or locallybypass the circuit or system being powered to stabilize the power supply or SMU.

# Transient Response

In reference to power supplies and SMUs, transient response describes how a supplyresponds to a sudden change in load.

Changes in load current, such as a current pulse, can cause large voltage transients.The transient response specifies how long it takes before the transients recover. Thefollowing figure shows how the transient behavior is typically specified. The transientresponse time specifies how quickly the supply can recover to within a certain voltage$( \Delta \pmb { \ V } )$ when a specific change in load $( \Delta \pmb { I } )$ occurs. Some power supplies also specify amaximum transient voltage dip under the same load conditions.


Figure 17. Transient Response


![](images/c92a3a9a137df7d7433db6b2d6fdfaf4513fba24a4982080a8e9d4fdbb7e3aa6.jpg)


![](images/305c66d70c8b8cc48bc41f2057c90f956f3661c43087929d9e8e7dec9fe75aef.jpg)


There is a trade-off between transient response and the stability of the supply under awide variety of loads. To achieve the fastest transient response, an instrument shouldhave a high gain-bandwidth (GBW) product, but the higher GBW is, the more likely it isthat the instrument will become unstable with certain loads. Thus, most instrumentscompromise performance to achieve stability under most conditions. Otherinstruments allow a degree of customization to enable optimization of performanceunder different circumstances.

# Configuring Transient Response

Use niDCPower Transient Response to set the transient response.

The following table lists the PXIe-4147 transient response settings available in NI-DCPower.


Table 12. Transient Response Settings


<table><tr><td>Transient Response</td><td>Description</td></tr><tr><td>Slow</td><td>Increases stability while decreasing the speed of the device. 
Select Slow if connecting a DUT causes the device to exhibit symptoms of instability, such as unstable readings or excessive noise.</td></tr><tr><td>Normal (default)</td><td>Balances stability and the speed of the device. It is the default transient response setting and is appropriate for most situations.</td></tr><tr><td>Fast</td><td>Increases the speed of the device for improved transient response with benign loads. Select Fast if you need faster response and if doing so does not cause the instrument to exhibit symptoms of instability, such as unstable readings or excessive noise.</td></tr><tr><td>Custom</td><td>Allows freedom to adjust compensation for specific loads. Select Custom if you need to optimize the speed/stability tradeoff.</td></tr></table>

# Customizing Compensation

Set the niDCPower Transient Response property to Custom or theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute toNIDCPOWER_VAL_CUSTOM to customize compensation on the device.

The following table lists the compensation parameter settings for the PXIe-4147. You

can independently set the parameters for constant voltage mode and constant currentmode. There are three compensation parameters for constant voltage mode and threecompensation parameters for constant current mode, for a total of six writable andreadable parameters.


Table 13. Compensation Parameters


<table><tr><td>Compensation Parameter</td><td>Mode</td><td>Details</td></tr><tr><td rowspan="2">Gain Bandwidth (GBW)</td><td>Constant Voltage Mode</td><td>Set the GBW of the instrument. Higher values give faster response but poorer stability.
10 Hz to 2 MHz</td></tr><tr><td>Constant Current Mode</td><td>Set the GBW of the instrument. Higher values give faster response but poorer stability.
10 Hz to 2 MHz</td></tr><tr><td>Compensation Frequency</td><td>Both</td><td>Set the geometric mean of the pole frequency and the zero frequency. It is the frequency of maximum phase shift caused by the pole-zero pair.
50 Hz to 1 MHz</td></tr><tr><td>Pole-Zero Ratio</td><td>Both</td><td>Set the ratio of the pole frequency to the zero frequency. A lag compensator has a pole-zero ratio set to a value less than 1.0, and a lead compensator has a pole-zero ratio set to a value greater than 1.0. If the pole-zero ratio is set to exactly 1.0, the pole and zero cancel each other and have no effect. You can set the pole-zero ratio to any value between 0.125 and 8.0.</td></tr></table>

![](images/c95466a0468725e23483a9a9fe29b9b1432282eebad568d55b148d769d9eab40.jpg)


Tip To begin customizing the transient response for your application, youcan set Transient Response to Slow, Normal, or Fast and read thecompensation parameters. This will provide you with a good starting pointfrom which you can derive your custom settings.

# Pulse Loads

Load current can vary between a minimum and a maximum value in someapplications. In the case of a varying load, or pulse load, the constant current circuit ofthe power supply or SMU limits the output current.

Occasionally, a peak current may come close to exceeding the current limit and causethe power supply or SMU to temporarily move into constant current mode orunregulated mode.

To remain within the power supply or SMU output specifications with pulsed loads,use niDCPower Configure Current Limit to configure the current limit to a value greaterthan the expected peak current of the load.

You can parallel-connect multiple PXIe-4147 channels to provide higher peak currents.Refer to Merged Channels for more information.

# Reverse Current Loads

Occasionally, an active load may pass a reverse current to the power supply or SMU.

To avoid reverse current loads, use a bleed-off load to preload the output of thedevice. Ideally, a bleed-off load should draw the same amount of current from thedevice that an active load may pass to the power supply or SMU.

Caution Power supplies not designed for four-quadrant operation maybecome damaged if reverse currents are applied to their output terminals.Reverse currents can cause the device to move into an unregulated modeand can damage the instrument. Refer to the PXIe-4147 Specificationsfor more information about channel capabilities.


Note The sum of the bleed-off load current and the current supplied to theload must be less than the maximum current of the instrument.

# Ranges

NI power supplies and SMUs use one or more ranges for the following:

• Voltage and current output

• Voltage and current measurement

To get maximum output and measurement accuracy, use the highest resolution

(smallest) range possible for a particular application. Refer to the PXIe-4147

 Specifications for more information about what ranges are available for a particularchannel on your device.



Note NI-DCPower implicitly selects the measurement range that is based onthe output range that you configure. Thus, you cannot change themeasurement range independently of the output range. The measurementrange is large enough to measure any voltage or current within the outputrange that you configure.

Ranges are the maximum possible value from zero that the range can output ormeasure (not including the overrange). For example, in the 20 mA current level range,the current level is configurable up to 20 mA.



# Note

• When niDCPower Configure Output Function is set to DC Voltage,the voltage level range and current limit range are in use.

• When niDCPower Configure Output Function is set to DC Current,the current level range and voltage limit range are in use.

The same relationships hold true during pulsing between pulse output functions,pulse level ranges, and pulse limit ranges.

# Changing Ranges

When you configure an output range, if you request a range that differs from the rangesdescribed in the PXIe-4147 Specifications, NI-DCPower selects the highestresolution (smallest) range available that accommodates the requested range. Forexample, on a device with only ${ 2 0 } { \mathsf { m } } { \mathsf { A } }$ and $2 0 0 ~ \mathsf { m A }$ current limit ranges, if you request100 mA for the current range, NI-DCPower selects the 200 mA range.

The following table lists the supported configurable output ranges and their VIs andfunctions.


Table 14. Supported Configurable Output Ranges for Each Device Channel


<table><tr><td>Range</td><td>VI</td><td>Function</td></tr><tr><td>Voltage level range</td><td>niDCPower Configure Voltage Level Range</td><td>niDCPower_ConfigurationVoltageLevelRange</td></tr><tr><td>Voltage limit range</td><td>niDCPower Configure Voltage Limit Range</td><td>niDCPower_ConfigurationVoltageLimitRange</td></tr><tr><td>Current level range</td><td>niDCPower Configure Current Level Range</td><td>niDCPower_ConfigurationCurrentLevelRange</td></tr><tr><td>Current limit range</td><td>niDCPower Configure Current Limit Range</td><td>niDCPower_ConfigurationCurrentLimitRange</td></tr></table>

To change the range, ensure that the range you configure can accommodate theoutput value. For example, if the current limit range is 1 A and the current limit is$5 0 ~ \mathsf { m A }$ , changing the current limit range to ${ 2 0 } { \mathsf { m } } { \mathsf { A } }$ is not allowed because $5 0 ~ \mathsf { m A }$ is notpossible in the new range.



Note Changing current ranges implies a change in the shunts that measurecurrent. Under loaded conditions, particularly in constant current mode, thisresults in glitches at the output. To reduce the risk of damage to the DUT, therange change is designed so that the current might be less than what youprogram but not more.

Level and limit changes occur simultaneously when a range change is not required.The changes occur when you apply the channel configuration upon entering the

Running state. However, changes do not occur simultaneously if a voltage or a currentrange change is involved.



Tip When you change ranges in the Running state, the configuration takeseffect immediately. Ensure that you are aware of the order of the outputrange and the output value changes. To avoid ordering issues, NIrecommends configuring the output range and the output value in theUncommitted state and then transition to the Running state. Alternatively,you can enable autoranging for the range you want to change.

# Overranging

If niDCPower Overranging Enabled is set to TRUE, the valid values for the output thatyou program (voltage level, voltage limit, current level, and current limit) may extendbeyond their normal operating range on channels that support overranging.

Enabling overranging for a particular channel extends voltage and current outputcapabilities from $100 \%$ to $1 0 5 \%$ for the output range. Overranging is applicable tooutput ranges only and does not apply to measurement ranges. You can performmeasurements in any given range up to $1 0 5 \%$ of the range by default without enablingoverranging.

# Source Autorange

When you enable source autorange by setting Source:OutputFunction, NI-DCPowerautomatically changes the output range based on the output setpoint that youconfigure. NI-DCPower automatically changes to the highest resolution (smallest)range that can accommodate the output value. You can selectively enable sourcevoltage level/limit and current limit/level autorange on a channel.


Note While source autorange selects the best range based on the setpoint, itdoes not change the range until you program a new setpoint. Alternatively,you can use measurement autorange to allow the instrument to select thebest measurement range. Refer to Measurement Autorange for moreinformation.

# Measurement Autorange

Use the measurement autorange to allow the device to select the best measurementrange based on the actual measurement values.

To enable measurement autorange, set Measurement:Autorange to On.

With measurement autorange, the device can change ranges dynamically based onmeasurement readings, enabling more accurate measurements for both large andsmall readings. Measurement autorange removes the need for manual measurementrange selection and eases interactive user measurements. For example, measurementautorange is useful when the DUT varies significantly in current for a given voltagesweep.

Measurement readings are Current when sourcing voltage and Voltage whensourcing current.

A range change occurs after the hardware evaluates an autorange aperture sampleagainst the configured thresholds. The autorange aperture is configurable, but isgenerally less than or equal to the measurement aperture setting when AutorangeAperture Time Mode is set to Auto.

The firmware automatically delays the measure trigger after a range change toimprove consistency and reduce sweep test times. The delay after range changeautomatically increases with source delay, allowing for a longer DUT settling timebefore measuring. You can program the maximum delay after range change.

You can configure measurement autorange for a variety of DUTs through settings formultiple thresholds, limited autorange, and autorange.

# SourceAdapt Custom Transient R ansient Response Rang esponse Ranges

The PXIe-4147 supports SourceAdapt custom transient response, which allows you toset compensation parameters to fine-tune the transient response of a channel for yourspecific application.

This instrument supports the following ranges for each custom transient response

parameter. Each parameter is individually configurable for operation in constantvoltage mode and in constant current mode. Valid ranges differ between modes only ifnoted.

• Gain bandwidth (GBW)— 10 Hz to 2 MHz

• Compensation frequency— 50 Hz to 1 MHz

• Pole-zero ratio—0.125 to 8.0

# Noise

Noise is unwanted signals present on the output channels that can affect devicesconnected to the output channels.

Noise can be characterized as normal-mode noise or common-mode noise. Regardlessof its characterization, noise is meaningful only when it is specified with an associatedbandwidth.

• Common-mode noise—Noise present between the Output common LO terminaland the chassis or earth ground. In this sense, the equivalent circuit is a currentnoise source connected across these two terminals. When you connect animpedance between the output common/ground and chassis or earth ground, anoise current can flow in the impedance, resulting in an unexpected offset or otherundesirable error.

• Normal-mode noise—Noise present between the Output HI terminal and theOutput common LO terminal, appearing either in series (constant voltage mode) orparallel (constant current mode) with the output of the device. Normal-modenoise can be expressed as voltage noise or current noise, depending on the controlmode of the output channel.

AC-to-DC rectification causes ripple, a type of periodic normal-mode noise.

# Verifying Output Noise Specifications

Exercise care when verifying the noise specifications of an output device, such as apower supply or SMU. When verifying the specified wideband noise of a device, theeffects of ground loops, unnecessarily long probe ground leads, and electrically noisyenvironments can combine and skew your measurements.

Observe the following recommendations when verifying the output noisespecifications of a power supply or SMU:

• Connect the probe directly to the terminals of the power supply or SMU. Do notuse long leads, loose wires, or unshielded cables.

• Limit the probe ground lead to 2.54 cm (1 in.) at most. Connect this lead directly tothe output common/ground terminal of the appropriate channel.

• Set the bandwidth of the measurement device to the bandwidth of interest.

• Exercise caution when making measurements in a modern laboratoryenvironment—with computers, electronic ballasts, switching power supplies, andso on—to avoid measuring the environment noise instead of the device noise.

# AC and DC Noise Rejection

You can manipulate the aperture time of measurements made with SMUs and powersupplies to reject specific AC noise frequencies in DC voltage and currentmeasurements.

Each measurement that an NI-DCPower instrument returns is an average of one ormore higher-speed samples. All instruments return a multiple of 50 Hz and/or 60 Hz toenable rejection of power line noise.

You can reject AC noise by adjusting the measurement aperture time to be a multipleof the AC noise period.

You can reject the frequency of noise by adjusting the aperture time to be a multiple ofan AC noise frequency with Period $= 1 / \mathbf { f } .$

# Normal DC Measurement Noise Rejection

With normal noise rejection, the instrument assigns equal weight to each sample. Thissetting mimics the behavior of most traditional power supplies and SMUs.

Normal noise rejection is the default behavior for all NI-DCPower instruments.

The following figure shows normal weighting, with aperture times on the x-axis andrelative weighting on the y-axis.


Figure 18. Normal Noise Rejection


![](images/4431ca934b9c3e5b59eee5e4ff985d62ad5730615543da8a69b4daac4a67cbe4.jpg)


The following figure shows the resulting noise rejection as a function of frequency,with multiples of 1 / Aperture Time on the x-axis and magnitude response, in dB, onthe y-axis.


Figure 19. Normal Noise Rejection by Frequency


![](images/88058e361cafa6f2ad714f6a63ff4d5271cae6034aebe9eb10c1c80e02e38af7.jpg)


The best frequency rejection is available only near integer multiples of

1 / Aperture Time. You can achieve the fastest possible readings along with goodpower-line noise rejection by setting the aperture to one power-line cycle (PLC) andnoise rejection to Normal.

# Second-Order DC Measurement Noise Rejection

With second-order noise rejection, the instrument assigns a triangular weighting tomeasurement samples. Samples taken in the middle of the aperture time have moreweight than samples taken at the beginning and end of that measurement.

The following figure shows second-order weighting, with aperture times on the x-axisand relative weighting on the y-axis.


Figure 20. Second-Order Noise Rejection


![](images/d3997704421d1968af95b76dbf7e2631e8442c21c5a1bce2646fd8fa36f2e6c4.jpg)


The following figure shows the resulting noise rejection as a function of frequency,with multiples of 1 / Aperture Time on the x-axis and magnitude response, in dB, onthe y-axis.


Figure 21. Second-Order Noise Rejection by Frequency


![](images/05d69ba17daf5f17998e110cba11dc67cbb4ff2ec930138a99105b99639cbe70.jpg)


With second-order noise rejection, the instrument provides superior noise rejectioneven near multiples of 1 / Aperture Time, and noise rejection increases more rapidlywith frequency compared to normal noise rejection. Notches are also wider than theywould be with normal weighting, which results in less sensitivity to slight variations innoise frequency.

Use second-order noise rejection if you need better power-line noise rejection orbetter high-frequency noise rejection than you can obtain with normal noise rejection.

You can achieve the fastest possible readings with second-order noise rejection, alongwith excellent power-line noise rejection, by setting the aperture to two power-linecycles (PLC) and noise rejection to Second-Order.

In this configuration, one measurement is produced in the first full aperture, followedby two measurements for each subsequent aperture time. This results in

approximately the same measurement rate as normal filtering for large measurerecords.

# Choosing an AC Noise Rejection Profile

You have a choice of AC noise rejection profiles: normal and second-order. Normalnoise rejection is the default noise rejection behavior for all NI-DCPower instruments,while second-order noise rejection can provide better frequency rejection in somesituations.

The length of the measurement aperture time affects which noise frequencies arerejected. The noise rejection profile changes how frequencies are rejected with respectto the measurement aperture time and affects the minimum time required for theinstrument to make a single measurement.

Choose the AC noise rejection profile that suits your application based on thefollowing criteria.

<table><tr><td>Lowest Frequency Rejection Notch</td><td>High-Frequency Noise Rejection</td><td>Minimum Measurement Time Required</td><td>Recommended Noise Rejection Profile</td></tr><tr><td>1 / Aperture Time</td><td>Good</td><td>Shorter: Aperture Time</td><td>Normal (default)</td></tr><tr><td>2 / Aperture Time</td><td>Better</td><td>Longer: 2 × Aperture Time</td><td>Second-Order</td></tr></table>

# Rejecting AC Noise in DC Measurements with Aperture Time

Directly adjusting the aperture time of your measurements allows you to reject specificAC noise frequencies in your DC measurements with NI-DCPower.

Complete the following steps to reject AC noise frequencies by adjusting the aperturetime of your measurements.

1. Choose the noise rejection profile that suits your application.

◦ Normal

◦ Second-Order

2. Based on the aperture time units and the noise rejection profile you intend to use,calculate the aperture time required to reject the frequency $f ( \mathsf { H } z )$ you need toreject.

◦ Aperture time units: seconds

<table><tr><td>Noise Rejection Profile</td><td>Target Aperture Time (s)</td></tr><tr><td>Normal (default)</td><td>Aperture Time=1 / f</td></tr><tr><td>Second-Order</td><td>Aperture Time=2 / f</td></tr></table>

◦ Aperture time units: power line cycles (PLC)

<table><tr><td>Noise Rejection Profile</td><td>Power Line Frequency</td><td>Target Aperture Time (PLC)</td></tr><tr><td rowspan="2">Normal (default)</td><td>60 Hz</td><td>Aperture Time = 60 Hz / f</td></tr><tr><td>50 Hz</td><td>Aperture Time = 50 Hz / f</td></tr><tr><td rowspan="2">Second-Order</td><td>60 Hz</td><td>Aperture Time = 2 × (60 Hz / f)</td></tr><tr><td>50 Hz</td><td>Aperture Time = 2 × (50 Hz / f)</td></tr></table>


Note Each NI-DCPower instrument supports discrete aperture times: aninstrument-specific minimum value and integer multiples of that value.When you set an unsupported aperture time, NI-DCPower coerces thevalue to the nearest longer supported value for your instrument.

3. Configure the aperture time you calculated.

a. Set the aperture time and the appropriate units with Configure Aperture Time.

b. If using power line cycle units, provide the frequency of the AC power line foryour system to Configure Power Line Frequency.

4. Use DC Noise Rejection to set the noise rejection profile you chose.

# Power Measurements

Each channel of the PXIe-4147 has two synchronized ADCs that measure voltage andcurrent. You can use NI-DCPower to measure power flowing to or from the PXIe-4147.

You can use the following VIs and functions to measure both current and voltage forboth channels of the PXIe-4147.

• niDCPower Measure Multiple VI or niDCPower_MeasureMultiple function

• niDCPower Fetch Multiple VI or niDCPower_FetchMultiple function

Power can be computed as the product of the voltage and the current. If the powermeasurement is positive, the PXIe-4147 is sourcing power. If the power measurementis negative, the PXIe-4147 is sinking power.

# Resistance Measurements

NI power supplies and SMUs can make resistance measurements because they canboth generate and measure test voltages and currents. Because they can operate asprecision current sources at high current levels, these devices are well suited tomeasure low resistance values.

To measure a resistance with an NI power supply or SMU, select a test current thatcreates a voltage drop within module capabilities. After the channel output is enabledand settled, use the niDCPower Measure Multiple VI or the

niDCPower_MeasureMultiple function to measure the actual current beingdelivered to the resistor as well as the measured voltage across the resistor. Todetermine the accuracy of a resistance measurement, the accuracy specifications ofboth current and voltage measurements for the power supply or SMU should be takeninto account. For channels with remote sense capabilities, enabling this feature resultsin a more accurate voltage measurement at the resistor terminals.

# Compensation for Offset Voltages

When measuring low-value resistances, thermal voltages may introduce significantoffsets into the resistance measurement path. If an offset voltage exists in series withthe resistance to be measured, as in the following figure, taking a secondmeasurement at a different current output setpoint allows the offset to be accountedfor in the resistance calculation.

![](images/b709944550cd118c4dd1d0d93dc7b9425008ca50bdd8b379280fc6bd6f1b721c.jpg)


The two test currents, I1 and I2, create voltage drops of $\pmb { V _ { 1 } }$ and $V _ { 2 } ,$ respectively. Thus,the following two equations can be derived:

• V1 = I1R + VOS

• V2 = I2R + VOS

Rearranging these two equations allows you to calculate the unknown resistance, R,without measuring VOS. Assuming the currents $\boldsymbol { I } _ { 1 }$ and $\boldsymbol { I _ { 2 } }$ are different, the followingequation can be derived:

$$
\boldsymbol {R} = \left(\boldsymbol {V _ {2}} - \boldsymbol {V _ {1}}\right) / \left(\boldsymbol {I _ {2}} - \boldsymbol {I _ {1}}\right)
$$

For the best signal-to-noise performance, test currents of opposite polarity should beused (for example, $+ 1 0 0 \mathsf { m A }$ and $- 1 0 0 \mathsf { m } \mathsf { A } )$ . If currents of opposite polarity are notfeasible, the next best solution is to use test currents that are as far apart as possible.For example, if your first current is 1 A, you could choose a second test current of10 mA.

# Merged Channels

Merging channels allows multiple channels of a single SMU to work in unison. Whenyou connect the channels in parallel at the destination, you can use your instrumentfor applications that require a higher current output than any single independentchannel of the SMU.

To merge channels with NI-DCPower, you designate a primary channel andcombine it with compatible merge channels.

• Primary channel—The channel you access when programming merged channelsin a session.

• Merge channels—The channels that you specify with the Merged Channelsproperty. The merge channels work in unison with the primary channel.

The PXIe-4147 supports merge counts of $\times 2$ and $\times 4$ , each of which supports one ormore discrete merge configurations.

• Merge count—The total number of combined channels. The combined channelsinclude the primary channel plus the merge channels.

• Merge configuration—The combination of channels included in the merge.

The total current you can source from the SMU by merging channels is equal to themerge count multiplied by the normal per-channel maximum for the SMU. Refer tospecifications or documentation for your instrument for information on maximumsourcing power and current ranges.



# Note

• You cannot change the merge configuration when channels are in theRunning state.

• You cannot merge channels across different physical instruments.

• You cannot use secondary channels in a merge if those secondarychannels are in the Committed or Running state.

# Related information:

Merged Channels (LabVIEW)

Merged Channels (C)

Merged Channels (C# .NET)

Merged Channels (Python)

# Choosing a Valid Merge Configuration

Choose a valid merge configuration that supports the output current that you need.

Each merge count supports only certain combinations of the primary channel andmerge channels. The potential merge configurations depend on how many and whichchannels you want to merge. Complete the following steps to determine your mergeconfiguration.

1. Select the primary channel and determine the possible merge counts for thatchannel. The primary channel that you select must be a multiple of the mergecount.

<table><tr><td>Possible Merge Counts</td><td>Primary Channel</td></tr><tr><td>×2</td><td>0, 2</td></tr><tr><td>×4</td><td>0</td></tr></table>

2. Determine the merge channels based on the primary channel you select and thedesired merge count. Use the following formulas to determine the range of mergechannels.

a. To determine the beginning range of merge channels, use Primary Channel $^ { + 1 }$

b. To determine the end range of merge channels, use Primary Channel $^ +$ MergeCount - 1.

For example, if you want to use a merge count of $\times 4$ with primary channel 0, then thevalid merge channels are 1,2,3.

If you want to use a merge count of $\times 2$ with primary channel 0, then the only validmerge channel is 1.

Input the range of merge channels when setting the Merged Channels property.

# Designing Merge Circuitry

To use merged channels for a higher maximum current, you must design aninterconnect that combines the current output from the SMU physical channels asspecified in the merge channel configuration.

Ensure your test system that is using merged channels includes the following generalcomponents:

• The SMU to source the current.

• Cabling or wiring to convey current from the SMU.

• An interconnect between the SMU cabling and the destination device.

• The destination device to which you are delivering the current.

The specific interconnection depends on your application needs. Refer to the followingguidelines for designing these elements:

• Ensure that your design corresponds to a valid merge configuration for the SMU.

• Connect the merged channels at the destination in parallel.

• If your application does not involve switching between merge configurations,complete the following steps. Otherwise, your application requires the use ofexternal switching circuitry.

1. Short the Output HI pins of the primary channel and merge channels together.

2. Short the Output LO pins of the primary channel and merge channels together.

• Tie the Sense HI and Sense LO pins of the primary channel only. Do not tie togetherthe Sense pins of the merge channels. You can leave the Sense HI and Sense LOpins of the merge channels floating.

• If your application uses screw terminal connectivity, ensure that you are using thecorrect size wire for the Output HI and Output LO. The output current that youconfigure is distributed between the channels in the merge configuration.


# Note

• Connect only the channels that you intend to merge.

• If using external switching circuitry, ensure your switching circuitrypresents as little resistance as possible when merging channels.

# Programming the PXIe-4147 for Merged Channels

Use the NI-DCPower API to program the SMU for merged channels.

Before you program your SMU for merged channels using the NI-DCPower API, ensureyou connect your channels appropriately.

1. Based on the merge configuration you choose, initialize your NI-DCPower sessionusing Initialize With Independent Channels.

You can use merged channels while the session is open to an arbitrary set ofchannels, as long as the primary channel is in the session.



Note If you are using Initialize With Channels (deprecated), open thesession to only the primary channel.

2. Depending on your merge configuration, use the Merged Channels property tospecify the required merge channels.

Note You can enter the range of merge channels using commas, ahyphen, or a colon. For example, 1,2,3, 1:3, or 1-3. If you are using amulti-instrument session, you must specify the instrument name withthe merge channels in the following format:

<instrumentname>/<mergechannels>. For example, if theinstrument name is PXI1Slot3 and you want to specify merge channel 1,enter PXI1Slot3/1.

a. To configure properties on the primary channel in LabVIEW, write the ActiveChannel property to the primary channel.



Note You do not need to configure any properties on the mergechannels that are part of a merge configuration. Configure propertiesonly on the primary channel.

3. Use Commit With Channels to apply the merge configuration to the SMU.




Note Call functions only on the primary channel. NI-DCPower returns anerror if you attempt to commit or initiate a merge channel.

Committing the session properties reserves the channels you specified for mergingthat prevents the channels from being used independently.

4. Call Initiate With Channels to begin sourcing current according to the mergeconfiguration.



Note To acquire measurements from the combined channels, call theniDCPower_MeasureMultiple function or theniDCPower_FetchMultiple function on the primary channel only.Attempting to call these measurement functions on the merge channelsreturns an error.

The maximum current you can now source from your SMU in this merge configurationis equal to the merge count times the per-channel maximum of your instrument.


Note If you have multiple active merge configurations on the sameinstrument (without any overlapping merge configurations that use the sameprimary and merge channels), you can configure properties or call functionson multiple primary channels simultaneously. You do not need to configureproperties or call functions on merge channels.

# Effect of Merging Channels on Performance Specifications

Merging channels of the PXIe-4147 impacts your instrument specifications as definedin the following sections.


Note Specifications not mentioned in the following sections remain thesame and maintain the same classification (warranted, typical, etc.) asdescribed in the specifications document for your instrument.

The calibration procedure for your instrument does not explicitly verify thespecifications for merged channels. The merged channel specifications are ensured bydesign and assume the following about your merge configuration:

• The individual channels perform within their calibration limits

• The external interconnects that you design for the merge circuitry do notcontribute more error than the verification connections assumed for singlechannel calibration

# Low Frequency Noise

The Noise (0.1 Hz to 10 Hz, peak-to-peak, typical) specifications increaseproportionally to the square root of the number of channels in the mergedconfiguration.


Note Some instruments have a combined specification for resolution andlow frequency noise, while other instruments have individual specifications.Resolution is a loosely defined specification that does not lend itself well togeneralized quantitative guidelines.

For example, if the noise specification for a single channel is x and your mergeconfiguration includes four channels, the new specification for the configuration is:${ \sqrt { 4 \cdot x } } = 2 \cdot x$

# Accuracy and Temperature Coefficient

The offset term of the accuracy and tempco specifications increases directly

proportional to the number of channels in your merge configuration.

For example, if the accuracy specification for a single channel $\mathsf { i s } \pm ( x \% + y )$ , and yourmerge configuration includes four channels, the new specification for theconfiguration is: $\pm \left( x \% + 4 \cdot y \right)$

If the tempco specification $1 5 \pm ( x \% + y ) / ^ { \circ } C$ and your merge configuration includes fourchannels, the new specification for the configuration is: $\pm ( x \% + 4 \cdot y ) / ^ { \circ } C$

# Current RMS Noise Versus Aperture Time

The plots in the specifications maintain the same shape, but the y-axis values increaseproportional to the square root of the number of channels in your mergeconfiguration.

For example, if the noise specification for a single channel is x and your mergeconfiguration includes four channels, the new specification for the configuration is:${ \sqrt { 4 \cdot x } } = 2 \cdot x$


Note The PXIe-4147 accuracy table contains single-channel and multi-channel specifications. These specifications refer to the accuracy of a singlechannel depending on how many channels are in use on the PXIe-4147.Merged channel specifications are always derived based on the multi-channel base specifications.

# Current Load Regulation

The current load regulation specification increases directly proportional to thenumber of channels in your merge configuration.

For example, if the current load regulation specification for a single channel is x, andyour merge configuration includes four channels, the new specification for theconfiguration is: $4 \cdot x$

# Related information:

• PXIe-4147 Current Programming and Measurement Accuracy

PXIe-4147 Current RMS Noise vs. Aperture Time

PXIe-4147 Current Load Regulation

# Effect of Merging Channels on Other Functions and Properties

When you merge channels of the PXIe-4147, the normal values you can specify orbehaviors for certain functions and properties change accordingly.

Merging channels affects the following aspects of programming the PXIe-4147 withNI-DCPower.

# Setting the Current Levels, Limits, and Ranges

For relevant functions or properties that control current, maximum current you cansource increases as follows:

<table><tr><td>Without Merged Channels</td><td>With Merged Channels</td></tr><tr><td>Per-Channel Maximum</td><td>Per-Channel Maximum × Merge Count</td></tr></table>

Note Current Limit Autorange and Current Level Autorange also account forthe increased current values you can specify when channels are merged.

# Setting Programmable Output Resistance

Behavior when channels are merged depends on the output function.

With DC Voltage, output resistance range decreases; with DC Current, output resistancerange expands. Refer to the following table for details.


Table 15. Effects of Merged Channels on DC Voltage and DC Current


<table><tr><td colspan="2">Output Function</td><td>Without Merged Channels</td><td>With Merged Channels</td></tr><tr><td colspan="2">DC Voltage</td><td>Valid Range</td><td>Valid Range / Merge Count</td></tr><tr><td>DC 
Current</td><td>Output resistance 
&lt;0 Ω</td><td>(−∞, Upper Negative Limit]</td><td>(−∞, Upper Negative Limit / Merge Count]</td></tr><tr><td></td><td>Output resistance &gt;0 Ω</td><td>[Lower Positive Limit, +∞)</td><td>[Lower Positive Limit / Merge Count, +∞)</td></tr></table>

# Operating in Compliance

In addition to the normal criteria for operating in compliance, merged channels mayoperate in compliance when their outputs are poorly balanced, such as when one ofthe channels being merged is physically disconnected.

Use Fetch Multiple or Query In Compliance to identify whether a channel is operatingin compliance.

# Requesting Power Output

Maximum power you can request from the instrument with Requested PowerAllocation increases as follows:

<table><tr><td>Without Merged Channels</td><td>With Merged Channels</td></tr><tr><td>Per-Channel Maximum</td><td>Per-Channel Maximum × Merge Count</td></tr></table>

![](images/cb96ee59d5232a0eef4af834de8f832eacd47d7b0ad52338cdcc0a511a4945b1.jpg)


Note When merging channels, it is possible to request more DC outputpower with this property than the PXIe-4147 can provide across all channels.In this event, the PXIe-4147 does not source the requested power andNI-DCPower returns an error.

# Unmerging Merged Channels

Merging channels reserves the primary channel and merge channels for use in themerge configuration you choose. To use merged channels independently again, youmust unreserve the channels first.

Complete the following steps to unreserve merged channels and use the channelsindependently.

1. Complete any of the following steps based on your desired unreserve outcome.

<table><tr><td>Desired Unreserve Outcome</td><td>How To</td></tr><tr><td>Continue sourcing current from the channels according to the merge configuration</td><td>Call Close in a session that includes the primary channel</td></tr><tr><td>Stop the channels from sourcing current</td><td>Complete one of the following steps:○ Set Merged Channels to &quot;&quot; for the primary channel and then call Commit With Channels○ Call Reset With Channels on the primary channel○ Call Disable, if the session is initialized with a single primary channel only○ Self-calibrate the instrument</td></tr></table>

The channels are now unreserved. You can now access the channels and configurethe channels independently of one another.

2. Configure the channels independently.

3. Call Commit With Channels on the channels that you intend to use.Committing the independent configuration unmerges the channels and appliesthe independent configuration.

![](images/ee815b69a5a0412f91af99665e64ed7d21eed497d326f166149d1c3258407a8a.jpg)


Note When you change the merge configuration upon calling CommitWith Channels, the outputs of all channels that were in the previousmerge configuration are disabled; this is equivalent to using ConfigureOutput Enabled to disable the outputs of those channels.

The new merge configuration is applied at commit. You can use each channelindependently of the others (or in a new merge configuration), and each channelmight source current up to its normal per-channel or merged maximum. If the mergeconfiguration remains unchanged, the merged channels continue sourcing based ontheir previous configuration.

Once you commit a new configuration to the channels, call Initiate With Channels tobegin sourcing according to your new configuration.

# Controlling Channel Power Allocation

The Power Allocation properties allow you to control when errors are generated insituations that could cause an instrument channel to source more power than ispossible on that channel or on the entire instrument.

Complete the following steps to use the power allocation properties to control howpower is divided among channels of an instrument.

# Support for Power Allocation

The PXIe-4147 supports controlling the power allocated for the sourcing configurationof the instrument.

1. Add the Power Allocation Mode property to your program and choose the modeappropriate for your application.

<table><tr><td>Mode</td><td>Description</td></tr><tr><td>Disabled</td><td>Disables driver checks that ensure the individual channel configurations cannot exceed the maximum power available to the instrument. Hardware monitoring of maximum instrument power is still active, and if this limit is exceeded, an instrument-level error is triggered that shuts down the instrument to prevent damage. A reset is required to clear the error.</td></tr><tr><td>Automatic</td><td>NI-DCPower calculates the power that the level/limit combination requires on the channel and attempts to allocate that power from the total instrument power available at commit. If there is insufficient power available, NI-DCPower returns an error. To clear the error, you must reduce the configuration power to within the available unallocated power or deallocate power from another channel. Other channels are not impacted by these errors.</td></tr><tr><td>Manual</td><td>NI-DCPower attempts to allocate channel power from the available total instrument power, but you explicitly define the required channel wattage using the Requested Power Allocation property.</td></tr></table>


Note When the Power Allocation Mode property is set to Automatic orManual, you can read back the power the instrument is sourcing on anyactive channels with the Actual Power Allocation property.

2. If using Manual mode, set Requested Power Allocation to the desired sourcingvalue for the channel.

3. If using Manual mode, resolve possible errors.

An error can occur for the following reasons:

◦ Requested Power Allocation is more than the channel power limit.

◦ Requested Power Allocation is more than the available total instrument power.

◦ Maximum power the channel could source with its level/limit configuration ismore than the Requested Power Allocation.

# Signal Routing

You can use the PXI Express trigger bus to send and receive events and triggers.

You can characterize signal routing operations by source and destination. The possiblesignal routes depend on the instrument, the PXI Express chassis, and the occupied PXIExpress chassis slot. The following table summarizes the possible sources anddestinations for PXIe-4147 signals.

Terminal sources and destinations use the fully qualified terminal name

/DeviceName/Engine[channel number]/TriggerorEventName or theshortened terminal name Engine[channel number]/TriggerorEventName.

<table><tr><td colspan="2" rowspan="3">Destination</td><td colspan="9">Source</td></tr><tr><td>Backplane</td><td colspan="8">Internal, Channel X</td></tr><tr><td>PXI_Trig&lt;0..7&gt;</td><td>Start Trigger</td><td>Sequence Advance Trigger</td><td>Source Trigger</td><td>Measure Trigger</td><td>Source Complete Event</td><td>Measure Complete Event</td><td>Sequence Iteration Complete Event</td><td>Sequence Engine Done Event</td></tr><tr><td>Backplane</td><td>PXI_Trig&lt;0..7&gt;</td><td>-</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td rowspan="2">Internal, Channel X</td><td>Start Trigger</td><td>✓</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Sequence Advance</td><td>✓</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td rowspan="3"></td><td>Trigger</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Source Trigger</td><td>✓</td><td>-</td><td>-</td><td>-</td><td>✓</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Measure Trigger</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>-</td><td>✓</td><td>-</td><td>✓</td><td>-</td></tr><tr><td rowspan="4">Internal, Channel Y</td><td>Start Trigger</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Sequence Advance Trigger</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Source Trigger</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Measure Trigger</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr></table>

# Sourcing and Measuring Terminology

Refer to the following terms when learning more about the features and usage of thePXIe-4147:

• Aperture Time—The period during which an ADC reads the voltage or current on apower supply or SMU. Aperture time can be specified in seconds (s) or power linecycles (PLCs). Measurement resolution, measurement speed, and frequencyrejection are all functions of aperture t
Tip Select longer aperture times to improve measurement resolution;select shorter aperture times to increase the measurement speed.

• Compliance—For power supplies and SMUs, a channel is operating in compliancewhen it cannot reach the requested output level because the programmed limithas been reached.

• Line Regulation—A measure of the ability of the power supply or SMU to maintainthe output level given changes in the input line voltage. Line regulation is

expressed as percent of change in the output level relative to the change in theinput line voltage.

For NI DC power supplies and SMUs, the line regulation specification only appliesto devices with an auxiliary power input.

• Load Regulation—A measure of the ability of an output channel to remainconstant given changes in the load. Load regulation expression depends on thecontrol mode enabled on the output channel.

• Resolution—The smallest change in the voltage or current measurement that canbe detected by hardware. It is usually specified in absolute units, like $\mu \nu$ or nA.

• Measurement resolution is typically limited by the ADC used for themeasurement, but may also be limited by other factors, such as noise.

• Output resolution is typically limited by the finite number of steps that areavailable in the device DAC circuit, but may also be limited by other factors,such as noise.

Refer to the PXIe-4147 Specifications for measurement resolution and outputresolution information.

• Sensitivity—Sensitivity is the smallest unit of a given parameter that can bemeaningfully detected with an instrument under specified conditions. This unit isgenerally equal to the measurement resolution in the smallest range of a powersupply or SMU.

• Settling Time—Settling time specifies the time required for an output channel tostabilize to within a specified percentage of its final value. This value is typicallyincluded in the device specifications.

# Calibration

SMUs support two types of calibration: external calibration and self-calibration.

# External Calibration

Every power supply or SMU performs within its specifications over some finitetemperature range and time period. If the temperature changes or time exceed thosespecified, and your application requires tight specifications, external calibration is

required.

# Calibration and Temperature Variation

When a system is composed of multiple integrated instruments, the system is subjectto temperature rise caused by inherent compromises in air circulation and otherfactors. Self-heating from surrounding equipment, uncontrolled manufacturing floorenvironment, and dirty fan filters are among these factors.

Refer to the PXIe-4147 Specifications for the following information for yourinstrument:

• Recommended operating temperature range

• Calibration interval

Refer to Best Practices for Building and Maintaining PXI Systems for the definition ofambient temperature.

If the ambient temperature is outside of the specified range, you may need to knowthe measurement accuracy to account for temperature variation. One way to calculatethe specified accuracy outside of the temperature range is to externally calibrate thesystem at the desired temperature. External calibration, though inconvenient, shouldallow the device to attain its full rated accuracy at the calibration temperature. You canlearn more about external calibration at ni.com/calibration.

Another way to calculate the specified accuracy outside of the temperature range is toadd the temperature coefficient accuracy for each additional degree outside thecalibration range.

The following equation represents the temperature coefficient (tempco).

Tempco $= \pmb { \chi } \%$ of accuracy specification/ $^ { \circ } { \mathsf C }$

For example, consider an instrument outputting 5 V with voltage accuracy specified at$0 . 0 5 \%$ of output $+ 1 0 0 \mu \nu$ in the range $1 8 ^ { \circ } \mathsf { C }$ to $2 8 ^ { \circ } \mathsf { C }$ , and tempco specified as $1 0 \%$ ofaccuracy specification per $^ \circ \mathsf C$ . If the last external calibration was performed at $23 ^ { \circ } \mathsf { C }$ ,the following equation represents the 1-year accuracy of the instrument in the $1 8 ^ { \circ } \mathsf { C }$ to$2 8 ^ { \circ } \mathsf { C }$ range:

$$
0.05 \% \text{of} 5 \mathrm {~V} + 100 \mu \mathrm {V} = 2.6 \mathrm {mV}
$$

If the ambient temperature changes to $3 8 ^ { \circ } \mathsf { C }$ , the device is operating 10 degreesoutside the specified range, the accuracy is calculated as follows:

$$
\pm (2.6 \mathrm{mV} + ((10 \% \text {of} 2.6 \mathrm{mV}) / ^{\circ} \mathrm{C}) ^ {\star} 10 ^ {\circ} \mathrm{C}) = \pm 5.2 \mathrm{mV}
$$

The total error is twice the specified error (5.2 mV in the example above, versus 2.6 mVif temperature effect is ignored) due to the $3 8 ^ { \circ } C$ ambient temperature. If theadditional error term due to temperature drift is unacceptable, some devices supportself-calibration at the desired measurement temperature to improve accuracy.

Refer to the PXIe-4147 Calibration Procedure for the external calibrationprocedure for your instrument.

# Self-Calibration

Use the self-calibration function to reduce errors caused by time and temperaturedrift. Self-calibration recalculates certain internal reference values, gains, and offsetsto significantly improve accuracy over the full operating temperature range of thedevice.

When you run self-calibration, the output terminal is disconnected. Low-amplitude,low-energy glitches may appear at the output, but in most circumstances, theseglitches are not noticeable.


Note Self-calibration is often used as the first step in debuggingmeasurement errors.

# When to Self-Calibrate

For optimum performance, use self-calibration when the following conditions havebeen met:

• After first installing the PXIe-4147 in a chassis

• After any module that is in the same chassis as the PXIe-4147 is installed,uninstalled, or moved

• When the PXIe-4147 is in an environment where the ambient temperature changes.Refer to the PXIe-4147 Specifications to find the allowable ambienttemperature for your instrument.

• When the PXIe-4147 temperature has drifted outside of the specified $\mathsf { T } _ { \mathsf { C a l } }$ since thelast self-calibration. Refer to the PXIe-4147 Specifications to find the allowabledifference from $\mathsf { T } _ { \mathsf { C a l } }$ for this instrument.

• Once 24 hours elapse after a previous self-calibration

The instrument incorporates a temperature sensor that is used to determine when thetemperature changes outside the specified conditions from the previous calibration.When the most recent self-calibration time and temperature are queried usingniDCPower Get Self Cal Last Date And Time(niDCPower_GetSelfCalLastDateAndTime) or niDCPower Get SelfCal Last Temp (niDCPower_GetSelfCalLastTemp), the value returned isfrom the most recent self-calibration. When the one-year calibration interval expires,an external calibration is required.

The result is an instrument that yields full performance over its operating temperaturerange and recommended calibration cycle. When the recommended calibrationinterval expires, an external calibration is required to ensure that the device operateswithin specifications. Some devices, particularly those that provide self-calibration asan alternative to auto-zero, have been designed to minimize the time of self-calibration. Therefore, self-calibration can be run often to reduce offset and gain errorwith minimal performance penalties.

# Accuracy

A measurement or output level on a power supply or SMU can differ from the actual orrequested value.

Accuracy represents the uncertainty of a given measurement or output level and canbe defined in terms of the deviation from an ideal transfer function, as follows:

$$
\mathbf {y} = \mathbf {m x} + \mathbf {b}
$$

where m is the ideal gain of the system

X is the input to the system

b is the offset of the system

Applying this example to a power supply or SMU signal measurement, y is the readingobtained from the device with x as the input, and b is an offset error that you may beable to null before the measurement is performed. If m is 1 and $\pmb { b }$ is 0, the outputmeasurement is equal to the input. If m is 1.0001, the error from the ideal is $0 . 0 1 \%$ .

Parts per million (ppm) is another common unit used to represent accuracy. Thefollowing table shows ppm to percent conversions.

<table><tr><td>ppm</td><td>Percent</td></tr><tr><td>1</td><td>0.0001</td></tr><tr><td>10</td><td>0.001</td></tr><tr><td>100</td><td>0.01</td></tr><tr><td>1,000</td><td>0.1</td></tr><tr><td>10,000</td><td>1</td></tr></table>

Most high-resolution, high-accuracy power supplies and SMUs describe accuracy as acombination of an offset error and a gain error. These two error terms are added todetermine the total accuracy specification for a given measurement. NI power suppliesand SMUs typically specify offset errors with absolute units (for example, mV or μA),while gain errors are specified as a percentage of the reading or the requested value.

# Determining Accuracy

The following example illustrates how to calculate the accuracy of a 1 mA currentmeasurement in the 2 mA range of an instrument with an accuracy specification of$0 . 0 3 \% + 0 . 4 \mu \ A$ 

$$
A c c u r a c y = (0. 0 0 0 3 \times 1 m A) + 0. 4 \mu A = 0. 7 \mu A
$$

Therefore, the reading of 1 mA should be within $\pm 0 . 7 \mu \mathsf { A }$ of the actual curre
Note Temperature can have a significant impact on the accuracy of a powersupply or SMU and is a common problem for precision measurements. Thetemperature coefficient, or tempco, expresses the error caused bytemperature. Errors are calculated as ±(% of reading $^ +$ offset range) $^ { \circ } { \mathsf C }$and are added to the accuracy specification when operating outside thepower supply or SMU rated accuracy temperature range.

# Cleaning the PXIe-4147 System

NI recommends the following to clean and maintain your SMU system:

Clean the fan filters on the chassis regularly to prevent fan blockage and to ensureefficient air circulation. Cleaning frequency depends on the amount of use and theoperating environment. For specific information about cleaning procedures and otherrecommended maintenance, refer to the chassis user documentation.