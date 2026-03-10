# PXIe-4190 Getting Started

Learn the basic operation of the PXIe-4190. Follow instructions for connecting,installing, and configuring your system. Choose a topic on the left to help you set upand use the PXIe-4190.


Note Before you begin, install and configure your chassis and controller.

In this document, the 500 kHz and 2 MHz variants of the PXIe-4190 are referred toinclusively as the PXIe-4190. The information in this document applies to all variants ofthe PXIe-4190 unless otherwise specified.

To determine which version of the PXIe-4190 you have, locate the device name in oneof the following places:

• On the device front panel, the PXIe-4190 (2 MHz) shows PXIe-4190 2MHz LCRMeter/SMU.The PXle-4190 (500 kHz) shows NI PXle-4190 500kHz LCRMeter/SMU.

• In MAX, the PXIe-4190 (2 MHz) appears as NI PXIe-4190. The PXIe-4190 (500 kHz)appears as NI PXIe-4190 (500 kHz).

# Related information:

PXIe-4190 Specifications

• Compensation of LCR Measurements with NI-DCPower

# Verifying the Sys erifying the System Requirements

To use the NI-DCPower instrument driver, your system must meet certainrequirements.

Refer to the product readme, which is available online on the driver softwaredownload page or on the release notes page, for more information about minimumsystem requirements, recommended system, and supported application developmentenvironments (ADEs).

# Unpacking the Kit

The following items are included in the PXIe-4190 kit.

• PXIe-4190

• PXIe-4190 Safety, Environmental, and Regulatory Information



Notice To prevent electrostatic discharge (ESD) from damaging the module,ground yourself using a grounding strap or by holding a grounded object,such as your computer chassis.

1. Touch the antistatic package to a metal part of the computer chassis.

2. Remove the module from the package and inspect it for loose components orother signs of damage.



Notice Never touch the exposed pins of connectors.



Note Do not install a module if it appears damaged in any way.

3. Unpack any other items and documentation from the kit.

Store the module in the antistatic package when the module is not in use.

# Other Equipment

There are several required items not included in your PXIe-4190 kit that you need tooperate the PXIe-4190. Your application may require additional items not included inyour kit to install or operate your PXIe-4190.

# Required Items

• A PXI Express chassis and chassis documentation. For more information aboutcompatible chassis options, refer to ni.com.

• A PXI Express embedded controller or MXI controller system that meets the systemrequirements specified in this guide and chassis documentation.

# Accessory Items

• SHDB13W6-DB13W6-LL D-SUB to D-SUB Cable

◦ 1 m (NI part number 788279-01)

◦ 2 m (NI part number 788279-02)

◦ 4 m (NI part number 788279-04)

• SHDB13W6-4BNCM-LL D-SUB to male BNC Cable

◦ 1 m (NI part number 788280-01)

◦ $_ { 2 \mathsf { m } }$ (NI part number 788280-02)

◦ 4 m (NI part number 788280-04)

• SHDB13W6-4BNCF-LL D-SUB to female BNC Cable

◦ $0 . 5 \mathsf { m }$ (NI part number 789536-0R5)

◦ 1 m (NI part number 789536-01)

◦ $_ { 2 \mathsf { m } }$ (NI part number 789536-02)

• SHDB13W6-4TriaxM-LL D-SUB to male Triax Cable

◦ 1 m (NI part number 788281-01)

◦ $_ { 2 \mathsf { m } }$ (NI part number 788281-02)

◦ 4 m (NI part number 788281-04)

• PXI Slot Blocker Kit (NI part number 199198-01)

# Related concepts:

LCR Cables

# Installing the Software

You must be an Administrator to install NI software on your computer.

1. Install an ADE, such as LabVIEW or LabWindows™/CVI™.

2. Download the latest NI-DCPower driver software installer from ni.com/r/downloaddcpower.

Driver support for the PXIe-4190 was first available in NI-DCPower 23.3.



Note Refer to the module specifications for the most current driversupport for your module and respective operating mode.

NI Package Manager downloads with the driver software to handle the installation.Refer to the NI Package Manager Manual for more information about installing,removing, and upgrading NI software using NI Package Manager.

3. Follow the instructions in the installation prompts.


Note Windows users may see access and security messages duringinstallation. Accept the prompts to complete the installation.

4. When the installer completes, select Restart in the dialog box that prompts you torestart, shut down, or restart later.

# Installing the PXIe-4190



Notice To prevent damage to the PXIe-4190 caused by ESD orcontamination, handle the module using the edges or the metal bracket.

1. Ensure the AC power source is connected to the chassis before installing themodule.

The AC power cord grounds the chassis and protects it from electrical damagewhile you install the module.

2. Power off the chassis.

3. Inspect the slot pins on the chassis backplane for any bends or damage prior toinstallation. Do not install a module if the backplane is damaged.

4. Remove the black plastic covers from all the captive screws on the module frontpanel.

5. Identify a supported slot in the chassis. The following figure shows the symbolsthat indicate the slot types.


Figure 1. Chassis Compatibility Symbols


![](images/fad05335f250babb59a6acb8b3f302fdf9094f916396b85700632e69277340d1.jpg)


1. PXI Express System Controller Slot

2. PXI Peripheral Slot

3. PXI Express Hybrid Peripheral Slot

4. PXI Express System Timing Slot

5. PXI Express Peripheral Slot

PXIe-4190 modules can be placed in PXI Express peripheral slots, PXI Expresshybrid peripheral slots, or PXI Express system timing slots.

6. Touch any metal part of the chassis to discharge static electricity.

7. Ensure that the ejector handle is in the downward (unlatched) position.

8. Place the module edges into the module guides at the top and bottom of thechassis. Slide the module into the slot until it is fully inserted.


Figure 2. Module Installation


![](images/97aa675cf68c9cc8271341eb09c69593d9dfccb2ef8026651bbfe13ee4939be4.jpg)


1. Chassis

2. Hardware Module

3. Ejector Handle in Downward (Unlatched) Position

9. Latch the module in place by pulling up on the ejector handle.

10. Secure the module front panel to the chassis using the front-panel mountingscrews.



Note Tightening the top and bottom mounting screws increasesmechanical stability and also electrically connects the front panel to thechassis, which can improve the signal quality and electromagneticperformance.

11. Cover all empty slots using either filler panels (standard or EMC) or slot blockerswith filler panels, depending on your application.


Note For more information about installing slot blockers and fillerpanels, go to ni.com/r/pxiblocker.

12. Power on the chassis.

# PXIe-4190 Front Panel

![](images/b9035c4e18893492ab1e167ac480bb5d5f633597f509a644b50f00573a78ee6b.jpg)



Table 1. Item Descriptions


<table><tr><td>Item</td><td>Description</td></tr><tr><td>1</td><td>LED Access Status Indicator</td></tr><tr><td>2</td><td>LED Voltage Status Indicator</td></tr><tr><td>3</td><td>General purpose input/output contacts</td></tr><tr><td>4</td><td>Coaxial contacts</td></tr><tr><td>5</td><td>D-SUB shell (Earth Ground)</td></tr></table>

# PXIe-4190 Pinout

The following figure shows the terminals on the PXIe-4190 connector.


Figure 3. PXIe-4190 Connector Pinout


![](images/43978b2c5a341850e0dbbbc8dfe9d581f07d8fa78853a099f2a748e9bad5aad8.jpg)



Table 2. Signal Descriptions


<table><tr><td>Contact</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td></tr><tr><td>Pin 1 to Pin 7</td><td colspan="2">General purpose input/output contacts: 
· Pin 1 (reserved) 
· Pin 2 (5V) 
· Pin 3 (PFI2) 
· Pin 4 (PFI3)</td></tr><tr><td></td><td colspan="2">Pin 5 (GND)Pin 6 (PFI1)Pin 7 (PFI0)</td></tr><tr><td>A6 (Center Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A6 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A5 (Center Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A5 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A4 (Center Conductor)</td><td colspan="2">CAL FORCE</td></tr><tr><td>A4 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A3 (Center Conductor)</td><td colspan="2">CAL SENSE</td></tr><tr><td>A3 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A2 (Center Conductor)</td><td>LO POT</td><td>Sense HI</td></tr><tr><td>A2 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>A1 (Center Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>A1 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr></table>

# PXIe-4190 LED Indicators


Table 3. LED Access Status Indicator


<table><tr><td>Status Indicator</td><td>Device State</td></tr><tr><td>(Off)</td><td>Not Powered</td></tr><tr><td>Green</td><td>Powered</td></tr><tr><td>Amber</td><td>Device is being accessed</td></tr></table>


Table 4. LED Voltage Status Indicator


<table><tr><td>Status Indicator</td><td>Output Channel State</td></tr><tr><td>(Off)</td><td>All device outputs are disconnected from their voltage generation sources through output disconnect relays.</td></tr><tr><td>Green</td><td>The device output is connected to a voltage generation source.</td></tr><tr><td>Red</td><td>The device has a fault or is in error due to the voltage generated or measured by the device.Refer to the driver software for possible sources.The device will not operate until the error is cleared and/or the device is reset.</td></tr></table>

# Verifying the Ins erifying the Installation in MA tion in MAX

You can use Measurement & Automation Explorer (MAX) to configure your NI hardware.MAX informs other programs about which NI hardware products are in the system andhow they are configured. MAX is automatically installed with NI-DCPower.


Note MAX is not available on Linux.

1. Launch MAX.

2. In the configuration tree, expand Devices and Interfaces to see the list of installedNI hardware.Installed modules appear under the name of their associated chassis.

3. Expand your Chassis tree item.MAX lists all modules installed in the chassis. Your default names may vary.



Note If you do not see your module listed, press $\tt { < F 5 > }$ to refresh the listof installed modules. If the module is still not listed, power off the system,ensure the module is correctly installed, and restart.

4. Record the name MAX assigns to the hardware. Use this identifier whenprogramming the PXIe-4190.

5. Self-test the hardware by selecting the item in the configuration tree and clickingSelf-Test in the MAX toolbar.MAX self-test performs a basic verification of hardware resources.

# PXIe-4190 Block Diagram

![](images/b7dc790ba19b86e0a63a6edbc32e72b67c3f6259b8483ebda7bae09b2e01ed3f.jpg)


# Cabling Guidelines

• When using the PXIe-4190 in LCR mode or in the lower two current ranges in SMUmode, you must set the niDCPower Cable Length property.

• For cables that breakout into BNC/Triax terminations, secure the attached strainrelief bracket to a solid work surface with the integrated #4-40 captive screws tominimize cable motion that may impact results during testing.

• Connections between force and sense leads are required.

• Refer to the model specifications for derating factors and cabling ratinginformation.

# Related reference:

Four-Terminal Pair Connections

# Four-Terminal P erminal Pair Connec air Connections

To minimize the effects of cable inductance on measurements, you must use a four-terminal pair (4TP) connection scheme to provide a low-inductance path for the returncurrent from the excitation source to flow. To implement a 4TP connection, ensure thefour isolated shield conductors of the HI CUR, HI POT, LO CUR, and LO POT coaxialsignals are shorted together at the load and no other locations.

The following figures illustrate 4TP connections for LCR open, short, and loadcompensation measurements using a SHDB13W6-4BNCM-LL cable. The isolated shieldconnections shown in these figures are also applicable to 4TP connections made withother cable types. The LCR Load Connection figure also applies to user DUTmeasurements.

LCR Open Connection

![](images/3d804b5686ae4e6bf16fc9439b0137e585a078aed934d0f6837e368859442d4f.jpg)


1. HI CUR

2. HI POT

3. LO POT

4. LO CUR

5. Connection between isolated shield conductors

LCR Short Connection

![](images/e7dbc0c7b4e35079405d0ac85f51952157dedc20f16e7ca88a4ea88382e77801.jpg)


1. HI CUR

2. HI POT

3. LO POT

4. LO CUR

5. Connection between isolated shield conductors

LCR Load Connection

![](images/8d76a35e92ce75101d7bcde951851c8f977ac0d669d8663689042d6d1e6ce6b1.jpg)


1. HI CUR

2. HI POT

3. LO POT

4. LO CUR

5. Connection between isolated shield conductors

# Self-Calibrating the PXIe-4190

Self-calibration adjusts the PXIe-4190 for variations in the module environment.Perform a complete self-calibration after the first time you install the PXIe-4190.

The PXIe-4190 modules are externally calibrated at the factory but you should performa self-calibration in all of the following situations:

• After first installing the PXIe-4190 in a chassis

• After any module that is in the same chassis as the PXIe-4190 is installed,uninstalled, or moved

• When the PXIe-4190 is in an environment where the ambient temperature changes.Refer to the module specifications to find the allowable ambient temperature foryour instrument.

• When the PXIe-4190 temperature has drifted from $\mathsf { T } _ { \mathsf { C a l } }$ by more than specified sincethe last self-calibration. Refer to the module specifications to find the allowabledifference from $\mathsf { T } _ { \mathsf { C a l } }$ for this instrument.

• More than 24 hours have passed since the previous self-calibration

1. Install the PXIe-4190 and let it warm up for the recommended warm-up time listedin the module specifications.



Note Warm up begins when the PXI Express chassis has been poweredon and the operating system has completely loaded.

2. Self-calibrate the PXIe-4190 by clicking the Self-Calibrate button in HardwareConfiguration Utility or MAX, or calling niDCPower Cal Self Calibrate orniDCPower_CalSelfCalibrate.

# Related information:

PXIe-4190 Specifications

# Programming Options

You can generate signals interactively using InstrumentStudio or you can use the NI-DCPower instrument driver to program your device in the supported ADE of yourchoice.

• InstrumentStudio—When you install NI-DCPower on a 64-bit system, you canmonitor, control, and record measurements from supported devices usingInstrumentStudio. InstrumentStudio is a software-based soft front panelapplication that allows you to perform interactive measurements on severaldifferent device types in a single program.

InstrumentStudio is automatically installed when you install the NI-DCPowerdriver on a 64-bit system. You can access InstrumentStudio in any of the followingways:

• From the Windows start menu, select National Instruments » [Driver] SoftFront Panel. This launches InstrumentStudio and runs a soft front panelpopulated with NI-DCPower devices.

• From the Windows start menu, select National Instruments »InstrumentStudio. This launches InstrumentStudio and runs a soft front panelpopulated with devices detected on your system.

• From Measurement & Automation Explorer (MAX), select a device and thenclick Test Panels.... This launches InstrumentStudio and runs a soft front panelfor the device you selected.

• NI-DCPower Instrument Driver —The NI-DCPower API configures and operates themodule hardware and performs basic acquisition and measurement functions.

• LabVIEW—Available on the LabVIEW Functions palette at Measurement I/O »NI-DCPower. Examples are available from the Start menu in the NationalInstruments folder.

• LabVIEW NXG—Available from the diagram at Hardware Interfaces »Electronic Test » NI-DCPower. Examples are available from the Learning tab inthe Examples » Hardware Input and Output folder.

• LabWindows/CVI—Available at Program Files » IVI Foundation » IVI » Drivers »NI-DCPower. LabWindows/CVI examples are available from the Start menu inthe National Instruments folder.

• ${ \mathsf { C } } / { \mathsf { C } } + +$ —Available at Program Files » IVI Foundation » IVI. Refer to theCreating an Application with Nl-DCPower in Microsoft Visual C and$c + +$ topic of the NI DC Power Supplies and SMUs Help to manually addall required include and library files to your project. NI-DCPower does not shipwith installed $\mathsf { C } / \mathsf { C } + +$ examples.

• Python—For more information about installing and using Python, refer to theNI-DCPower Python Documentation.

# LCR Cables

The PXIe-4190 supports multiple types of LCR cables.


Note For additional current accuracy derating terms for LCR cables, refer tothe model specifications.

# Related information:

PXIe-4190 Specifications

# SHDB13W6-4BNCM-LL Cable

# SHDB13W6-4BNCM-LL Cable

The SHDB13W6-4BNCM-LL is a D-SUB to male BNC cable for connecting the PXIe-4190.

![](images/99b1fe21220d1911ed8decb24fa0b56888e622de472ccda069bee79b560a03db.jpg)


# SHDB13W6-4BNCM-LL Cable Pinout

![](images/3cd78dd143866ea050349925a388672145a14b364bc8bfd1e8ecd49906ac48b3.jpg)


![](images/5562af335465221a7c9706522a76146e2c6ca6eb76117f87376c12c1d519eb71.jpg)



Table 5. Signal Descriptions


<table><tr><td>Left (D-SUB)</td><td>Right (BNC/Ring Terminal)</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td><td>Cable Color</td></tr><tr><td>PIN 1 to PIN 7</td><td>—</td><td colspan="2">General purpose input/output</td><td>—</td></tr><tr><td>A6 (Outer Conductor)</td><td>BNC 4 (Outer Conductor)</td><td colspan="2">Isolated Shield</td><td rowspan="2">Red</td></tr><tr><td>A6 (Inner Conductor)</td><td>BNC 4 (Inner Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A5 (Outer Conductor)</td><td>BNC 3 (Outer Conductor)</td><td colspan="2">Isolated Shield</td><td rowspan="2">Orange</td></tr><tr><td>A5 (Inner Conductor)</td><td>BNC 3 (Inner Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A2 (Inner Conductor)</td><td>BNC 2 (Inner Conductor)</td><td>LO POT</td><td>Sense HI</td><td rowspan="2">Gray</td></tr><tr><td>A2 (Outer Conductor)</td><td>BNC 2 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>A1 (Outer Conductor)</td><td>BNC 1 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td><td rowspan="2">Black</td></tr><tr><td>A1 (Inner Conductor)</td><td>BNC 1 (Inner Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>Outer Shell</td><td>GND</td><td colspan="2">Chassis Ground</td><td>Green</td></tr></table>

Note Isolated Shield and GUARD are electrically equivalent and are allowedto be tied together in SMU mode.

# SHDB13W6-4BNCF-LL Cable

# SHDB13W6-4BNCF-LL Cable

The SHDB13W6-4BNCF-LL is a D-SUB to female BNC cable for connecting thePXIe-4190.

![](images/8b7d653ff59a9bbe6c0627d06677a86dbb67676e58fc56115ceae07e95f433f1.jpg)


# SHDB13W6-4BNCF-LL Cable Pinout

![](images/9d05ba807cf727133cc73ff19ae631e7ab839efb5da31db2086b97e096a4d994.jpg)


![](images/90b579c8f9c954f59b19aecae887648b8df74e517e5ff6f8fe6c138768204b82.jpg)



Table 6. Signal Descriptions


<table><tr><td>Left (D-SUB)</td><td>Right (BNC/Ring Terminal)</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td><td>Cable Color</td></tr><tr><td>PIN 1 to PIN 7</td><td>—</td><td colspan="2">General purpose input/output</td><td>—</td></tr><tr><td>A6 (Outer Conductor)</td><td>BNC 4 (Outer Conductor)</td><td colspan="2">Isolated Shield*</td><td rowspan="2">Red</td></tr><tr><td>A6 (Inner Conductor)</td><td>BNC 4 (Inner Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A5 (Outer Conductor)</td><td>BNC 3 (Outer Conductor)</td><td colspan="2">Isolated Shield*</td><td rowspan="2">Orange</td></tr><tr><td>A5 (Inner Conductor)</td><td>BNC 3 (Inner Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A2 (Outer Conductor)</td><td>BNC 2 (Outer Conductor)</td><td>Isolated Shield*</td><td>GUARD*</td><td rowspan="2">Gray</td></tr><tr><td>A2 (Inner Conductor)</td><td>BNC 2 (Inner Conductor)</td><td>LO POT</td><td>Sense HI</td></tr><tr><td>A1 (Outer Conductor)</td><td>BNC 1 (Outer Conductor)</td><td>Isolated Shield*</td><td>GUARD*</td><td rowspan="2">Black</td></tr><tr><td>A1 (Inner Conductor)</td><td>BNC 1 (Inner Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>Outer Shell</td><td>GND</td><td colspan="2">Chassis Ground</td><td>Green</td></tr><tr><td colspan="5">* The female BNC mounting plate is conductive and ties GUARD/Isolated Shield terminals together, terminating the 4TP connection. As a result, additional considerations apply when the DUT is not located near the mounting plate, such as when using the cable as a test port extension.</td></tr></table>


Note Isolated Shield and GUARD are electrically equivalent and are allowedto be tied together in SMU mode.

# SHDB13W6-4TRIAXM-LL Cable

# SHDB13W6-4TriaxM-LL Cable

The SHDB13W6-4TriaxM-LL is a D-SUB to Triaxial cable for connecting the PXIe-4190.

![](images/608d354f4e5247a553ab0c1b2e88157b4c25f6283809a2e75c34be4e09c91877.jpg)



SHDB13W6-4TriaxM-LL Cable Pinout


![](images/2de6f4b915e7b88bbf335b9674c291291d447b0a093cb83042ab84e3a41a6a5e.jpg)


![](images/0aa6bb41ffb0cf5a964b27e3643fcf4f3c5d46fb0417506b317a700f9f8b0e99.jpg)


![](images/4b196b970f180faff92680e5a166af85c0aa6d4f9dbb22c2ccfff5f1e5c9ecb4.jpg)


![](images/4fb7acecea0d847cc56ffe9b4c23bab05ede140c56653dc724f72d285ef5073b.jpg)


![](images/07fb2b8e24934b3daa32b4f20f6d718087ee3c5160cb350b8f5f75c7dba73f47.jpg)


![](images/deb88ac0770df3dc99fdac6bf505022c7c261ba733a758809c4403ab72ccc51f.jpg)



Table 7. Signal Descriptions


<table><tr><td>Left (D-SUB)</td><td>Right (Triax and 9-pin D-SUB)</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td></tr><tr><td>PIN 1 to PIN 7</td><td>PIN 1 to PIN 7</td><td colspan="2">General Purpose Input/Output</td></tr><tr><td>A6 (Center Conductor)</td><td>Triax 4 (Center Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A6 (Outer Conductor)</td><td>Triax 4 (Inner Shield)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A5 (Center Conductor)</td><td>Triax 3 (Center Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A5 (Outer Conductor)</td><td>Triax 3 (Inner Shield)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A2 (Center Conductor)</td><td>Triax 2 (Center Conductor)</td><td>LO POT</td><td>Sense HI</td></tr><tr><td>A2 (Outer Conductor)</td><td>Triax 2 (Inner Shield)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>A1 (Center Conductor)</td><td>Triax 1 (Center Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>A1 (Outer Conductor)</td><td>Triax 1 (Inner Shield)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>Outer Shell</td><td>Triax 1 to Triax 4 (Outer Shield)</td><td colspan="2">Chassis Ground</td></tr></table>



Note Isolated Shield and GUARD are electrically equivalent and are allowedto be tied together in SMU mode.

# SHDB13W6-DB13W6-LL Cable

# SHDB13W6-DB13W6-LL Cable

The SHDB13W6-DB13W6-LL is a D-SUB to D-SUB cable for connecting the PXIe-4190.

Note Additional current accuracy derating terms apply to theSHDB13W6-DB13W6-LL cable. Refer to the SMU Current section of themodule specifications for details.

![](images/2e472f66943f14de50322f815a59ab7f2d1e71157f9c54c63d9a6cc41c0010a1.jpg)


# SHDB13W6-DB13W6-LL Cable Pinout

![](images/6747b0f24f01ae12b3ac9d0920861743c29beaf2b0eb481469c1ca53cabe98cf.jpg)



Table 8. Signal Descriptions


<table><tr><td>Left/Right (D-SUB)</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td></tr><tr><td>PIN 1 to PIN 7</td><td colspan="2">General purpose input/output contacts</td></tr><tr><td>A6 (Inner Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A6 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A5 (Inner Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A5 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A4 (Inner Conductor)</td><td colspan="2">No connect</td></tr><tr><td>A4 (Outer Conductor)</td><td colspan="2">No connect</td></tr><tr><td>A3 (Inner Conductor)</td><td colspan="2">No connect</td></tr><tr><td>A3 (Outer Conductor)</td><td colspan="2">No connect</td></tr><tr><td>A2 (Inner Conductor)</td><td>LO POT</td><td>Sense HI</td></tr><tr><td>A2 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>A1 (Inner Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>A1 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>Outer Shell</td><td colspan="2">Chassis Ground</td></tr></table>


Note Isolated Shield and GUARD are electrically equivalent and are allowedto be tied together in SMU mode.

# Sourcing DC V cing Voltage and C e Current

The PXIe-4190 can perform operations to source and measure voltage and current. Inorder to perform these operations, use the NI-DCPower driver to configure softwaresettings and execute operations.

Refer to the following table for an overview of common source and measureoperations as well as the software setting combinations that enable the PXIe-4190 toperform each operation.


Table 9. Software Settings for PXIe-4190 Source and Measure Operations


<table><tr><td rowspan="2">PXle-4190 Operation</td><td colspan="3">Software Settings</td></tr><tr><td>Output Function</td><td>Source Mode</td><td>Instrument Mode</td></tr><tr><td>Source voltage</td><td rowspan="2">DC Voltage</td><td rowspan="4">Single Point or Sequence</td><td rowspan="4">SMU PS</td></tr><tr><td>Measure current or voltage</td></tr><tr><td>Source current</td><td rowspan="2">DC Current</td></tr><tr><td>Measure voltage or current</td></tr></table>

Complete the following general steps to source current or voltage.

# Initialize a Session

Use the NI-DCPower driver to initialize a session with the PXIe-4190.

Use the niDCPower Initialize With Independent Channels VI or theniDCPower_InitializeWithIndependentChannels function to initialize a session.

For any application you write, you must open a session to establish communicationwith the PXIe-4190 or specified channel(s) by initializing.

Initializing returns an instrument handle with the session configured to a known state.Initialization can take a significant amount of time compared to other NI-DCPower VIs

and functions, so you should not include it in a loop when repeatedly acquiring data.Ideally, your program should call Initialize With Independent Channels one time. If thereset parameter is set to TRUE, device channels are reset to the default state, whichmay include resetting relays.

# Configure the PXIe-4190 for Sourcing

Use the NI-DCPower driver with the PXIe-4190 to control the output the instrumentgenerates. Depending on the output function and source mode, you can configure theappropriate output levels and limits.

Complete the following steps to define an output type, choose a source mode, and setthe output levels and limits relevant to those selections.

1. Use the Configure Output Function function to set the output type you want togenerate: DC Voltage or DC Current.

◦ Select an output type:

<table><tr><td>Option</td><td>Description</td></tr><tr><td>DC Voltage</td><td>A channel attempts to generate the desired output voltage level, as long as the output current is below the current limit.</td></tr><tr><td>DC Current</td><td>A channel attempts to generate the desired output current level, as long as the output voltage is below the voltage limit.</td></tr></table>

2. Configure the source mode with the Configure Source Mode With Channelsfunction.

The source mode controls how the channel generates output levels.

3. Depending on your output function and source mode, set the relevant levels andlimits with the following functions and/or properties.

◦ DC output functions:

<table><tr><td>Output Function</td><td colspan="2">Source Mode</td><td>Level Control</td><td>Limit Control</td></tr><tr><td>DC Voltage</td><td colspan="2">Single Point</td><td>voltage level input to</td><td>current limit input to</td></tr><tr><td>Output Function</td><td colspan="2">Source Mode</td><td>Level Control</td><td>Limit Control</td></tr><tr><td rowspan="3"></td><td colspan="2"></td><td>Configure Voltage Level</td><td>Configure Current Limit</td></tr><tr><td rowspan="2">Sequence</td><td>Simple sequence</td><td>values input to Set Sequence</td><td>current limit input to Configure Current Limit</td></tr><tr><td>Advanced sequence</td><td>Voltage Level property</td><td>Current Limit property</td></tr><tr><td rowspan="3">DC Current</td><td colspan="2">Single Point</td><td>current level input to Configure Current Level</td><td>voltage limit input to Configure Voltage Limit</td></tr><tr><td rowspan="2">Sequence</td><td>Simple sequence</td><td>values input to Set Sequence</td><td>voltage limit input to Configure Voltage Limit</td></tr><tr><td>Advanced sequence</td><td>Current Level property</td><td>Voltage Limit property</td></tr></table>

# 4. Further define the parameters of the channel output.

The NI-DCPower API includes numerous functions and properties to exert finercontrol over the output. For example, among other aspects, you can specify outputranges, set asymmetric compliance limits with respect to zero, control the on andoff time of pulses, or take advantage of triggering.

# Configure the PXIe-4190 for Measuring

Once you configure channels and they are in the Running state, the PXIe-4190 can takemeasurements.

Use the niDCPower Measure property or the NIDCPOWER_ATTR_MEASURE_WHENattribute to configure how NI-DCPower takes measurements.

The following table lists the settings for the niDCPower Measure property or the

NIDCPOWER_ATTR_MEASURE_WHEN attribute.

<table><tr><td>Measure When</td><td>Details</td></tr><tr><td>On Demand</td><td>Acquire measurements on demand using the niDCPower Measure VI and the niDCPower_Measure function to measure either the voltage or the current on a single channel. Or use the niDCPower Measure Multiple VI and the niDCPower_MeasureMultiple function to measure both the voltage and the current on multiple channels. When you call these VIs and functions, the PXIe-4190 takes a measurement and returns it.</td></tr><tr><td>Automatically after Source Complete</td><td>The PXIe-4190 acquires a measurement after every source operation and stores it in a buffer on the device. You can use the niDCPower Fetch Multiple VI and the niDCPower_FetchMultiple function to retrieve measurements from the buffer.</td></tr><tr><td>On Measure Trigger</td><td>The PXIe-4190 acquires a measurement when it receives a Measure trigger and stores it in a buffer on the device. You can use the niDCPower Fetch Multiple VI and the niDCPower_FetchMultiple function to retrieve measurements from the buffer.</td></tr></table>

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

Named trigger types in NI-DCPower define the action you want an instrument or

instrument channel to take upon detecting a specific signal condition.

The following named triggers are available for NI-DCPower instruments:

• Start—In Sequence source mode, a channel waits for a Start trigger upon enteringthe Running state; receiving the Start trigger causes a channel to begin source andmeasure operations.

A channel does not perform any source or measure operations until it receives thistrigger.

This trigger is not used in Single Point source mode.

• Source—Receiving a Source trigger causes a channel to modify the sourceconfiguration.

This trigger is available only when sourcing DC voltage or DC current.

• Measure—Receiving a Measure trigger, if Measure When is set to On MeasureTrigger, causes a channel to take a measurement.

A channel ignores this trigger if a measurement is already in progress or if MeasureWhen is set to a different value.

• Sequence Advance—In Sequence source mode, a channel waits for the Sequence Advance trigger once an iteration of a sequence completes; receiving a SequenceAdvance trigger causes the channel to begin the next iteration of the sequence.

Sequence Loop Count must be set to a value greater than one for a sequence toiterate, and thus for this trigger to occur.

This trigger is not used in Single Point source mode.

# Trigger Signal Conditions

NI-DCPower includes three possible signal conditions that can serve as the stimulusfor an action an instrument or channel can take: digital edge, software edge, and none(disabled).

# Digital Edge

A channel performs an operation corresponding to a trigger when the channel detectsa rising edge or a falling edge on a physical trigger line. Digital edge triggering is idealfor synchronizing channels.

You can configure each named trigger in NI-DCPower to operate based on a digitaledge.

![](images/858e9b17814d1f7f6747296990a8ce2e6dac62943ff1ac9f2d478827c9694b87.jpg)


The channels may be on the same or different physical instruments. If they are ondifferent physical instruments, NI-DCPower routes the signal over the PXI backplanetrigger lines.

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



Note Most NI-DCPower instruments cannot receive external digitaltriggers via their front panels. However, for NI-DCPower instrumentsthat support triggering, you can send an external trigger to theinstrument through another instrument installed in your chassis thatdoes accept external triggers. You can route these trigger signalsthrough the trigger lines on the chassis backplane.

Refer to the for the trigger delay and jitter of your instrument.

# Multichannel Synchronization and Signal Routing in NI-DCPower

You can synchronize multiple channels with NI-DCPower by routing signals—eventsand triggers—from one channel to another, including channels that span multiplephysical instruments.

You can export (route) the trigger and event signals to one of the physical PXIbackplane trigger lines using Export Signal With Channels.


Tip You can use Wait For Event With Channels to make a channel wait to takean action until a specific event is generated.

Instead of explicitly exporting signals to physical trigger lines, NI-DCPower canautomatically create routes for you. To have NI-DCPower automatically create routes,set the digital edge input terminal of one channel to be the event from anotherchannel.

Example: Synchr ample: Synchronizing Me onizing Measure and Sour e and Source Operations

To make PXI1Slot3/0 wait for the measurement of PXI1Slot3/1 to completebefore PXI1Slot3/0 changes the source configuration, route the Measure Completeevent of PXI1Slot3/1 to the Source trigger of PXI1Slot3/0.

To do this, configure the Source trigger of PXI1Slot3/0 to anticipate a digital edgeand set the input terminal to /PXI1Slot3/Engine1/MeasureCompleteEvent.

# Initiate the PXIe-4190 for Sourcing and Measuring

Initiate the channels of the PXIe-4190 to apply a configuration and start generating.

Use the niDCPower Initiate With Channels VI or the niDCPower_InitiateWithChannelsfunction to apply the configuration and start generating voltage or current.

# Acquire Measurements

The applied channel configuration determines how the PXIe-4190 acquiresmeasurements.

# Measuring and Querying

Use the following functions to acquire measurements in Single Point source mode:

1. Measure with the niDCPower Measure Multiple VI or theniDCPower_MeasureMultiple function.

2. Call the niDCPower Query in Compliance VI or the niDCPower_QueryInCompliancefunction to query the output state.

# Fetching

The PXIe-4190 automatically acquires measurements when you configure thefollowing VIs or functions:

• niDCPower Create Advanced Sequence With Channels VI or theniDCPower_CreateAdvancedSequenceWithChannels function

• niDCPower Set Sequence VI or the niDCPower_SetSequence function

• niDCPower Configure Output Function VI set to Pulse Voltage or Pulse Current orthe niDCPower_ConfigureOutputFunction function set toNIDCPOWER_VAL_PULSE_CURRENT or NIDCPOWER_VAL_PULSE_VOLTAGE

These measurements are automatically acquired by coercing the niDCPower MeasureWhen property to Automatically After Source Complete or theNIDCPOWER_ATTR_MEASURE_WHEN attribute toNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE. To fetch thesemeasurements, call the niDCPower Fetch Multiple VI or the niDCPower_FetchMultiplefunction. NI-DCPower returns the measurement values in an array.



Note If you want the measure unit to operate independently of the sourceunit in this context, set the niDCPower Measure When property or theNIDCPOWER_ATTR_MEASURE_WHEN attribute to a value other thanAutomatically After Source Complete orNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE.

# Cease Generation

NI-DCPower includes one option for stopping generation on PXIe-4190 channels andreturning the channels to a known state.

<table><tr><td>Option</td><td>How To</td><td>Description</td></tr><tr><td>Disabling the output</td><td>Set the Output Enabled property to False</td><td>Generates 0 V on a channel. ±2% of the current limit range presently configured for the channel remains on the channel.</td></tr></table>

# Disabling the Output

The output of a channel is enabled by default when the channel enters the Runningstate. However, you can programmatically enable and disable the output channel(s) ofthe PXIe-4190.

When you disable the output of the PXIe-4190, the instrument is configured to output aDC voltage at 0 V with current limits at $\pm 2 \%$ of the presently configured current limitrange in, unless otherwise noted, a low-impedance state.

When you enable a previously disabled channel, levels and limits are applied to thechannel depending on the output function as follows:

• Voltage output functions—The programmed voltage level and current limit areapplied to the channel(s)

• Current output functions—The programmed current level and voltage limit areapplied to the channel(s)

You can use the Configure Output Enabled function to toggle the output of aninstrument.


Tip To ensure the output is disabled on the hardware, after using theConfigure Output Enabled function or Output Enabled property, use the WaitFor Event With Channels function. This function waits for the SourceComplete event before calling the Abort With Channels function to transitionthe session out of the Running state.

# Close the Session

Use the NI-DCPower driver to close a session with the PXIe-4190.

Use the niDCPower Close VI or the niDCPower_close function to close a session.

Closing a session is essential for freeing resources, including deallocating memory,destroying threads, and freeing operating system resources. You should close everysession that you initialize, even if an error occurs during the program. When debuggingyour application, it is common to abort execution before you close. While aborting the

execution should not cause problems, NI does not recommend doing so.

When you close a session, the channels continue to operate in their last configuredstate. If you close a session while the output channels are enabled and activelysourcing or sinking power, the channels continue to source or sink power until they aredisabled or reset.

# Common Challeng Challenges in L es in LCR Measurements

# Negative Loss Measurements (Dissipation and Quality Factor)

Loss measurements represent the energy loss in an oscillating circuit and can berepresented as a resistance, ratio, or phase angle. Dissipation factor is defined as theratio of the real component of the complex impedance (resistance, R) to the imaginarycomponent (reactance, X).


Figure 5. Complex Impedance Plane


![](images/831bf9662a8d4bfae26ae6e3aa6d272304ea3ab0ac8f15a5e2da52fad17bc276.jpg)


The resistive losses in passive components are necessarily positive, so true dissipationand quality factors are positive numbers. Measured dissipation factors, however, maybe negative due to error sources in the measurement.

# Error Source: Measurement Accuracy and Noise

Figure 6. Impedance Specifications Mapped to a Complex Impedance Plane

![](images/2bc9d74be0c7201552714436bd1186c8ba75e3549844f071aeb7306c00a93073.jpg)


A common source of error that may result in negative loss measurements is related tothe absolute accuracy and measurement noise of the instrument. The previous figureshows possible measured values for a component with a small (but positive)dissipation factor based on an instrument’s specifications for impedance magnitudeand phase accuracy. The shaded region indicates possible negative measured valuesthat are within the specifications of the instrument.

Note that measurement noise, under the default conditions of the specifications, isalready included in the absolute magnitude and phase accuracies for the PXIe-4190.

# Related information:

PXIe-4190 Specifications

# Error Source: Compensation Influences

Negative values may also occur when compensation is performed improperly or in away that is not representative of measurements of the device-under-test (DUT).


Figure 7. Connections to DUTHpot Z LpotHcur L cur



Figure 8. Short Compensation with Small Impedance


![](images/e951dab51635ce66946582dc600dafcaf31dfb64df2fc7d13722fefd7966e12f.jpg)



Figure 9. Improved Short Compensation


![](images/c6f244493f52fdacd6b8c2c02bee01ff364e9669d1ea0389773685cffb6be29b.jpg)


The first figure in the previous series shows a typical setup for DUT measurements,while the second figure shows one way of accomplishing compensation using a shortin place of the DUT. With this approach, contact resistance and the impedance of theshort will introduce errors in compensation that can negatively affect DUTmeasurements. Additionally, the measurements acquired during compensation willinclude measurement noise that may need to be considered.

For example, a 0 Ω 0805 SMT jumper may have an actual resistance up to $2 0 { \mathsf { m } } \Omega$ ormore, which will result in $2 0 { \mathsf { m } } \Omega$ of overcorrection when short compensation isapplied. If the equivalent series resistance (ESR) of the DUT is $< 2 0 ~ \mathsf { m } \Omega$ , thecompensated measurement will indicate a negative resistance and consequently anegative dissipation factor. To avoid these influences, use a short with a known lowimpedance, or move the contacts together directly as shown in last figure.

Open/short (O/S) compensation may not be sufficient when using user-fabricated testcables, fixturing with complicated residuals, or switching between the instrument andDUT. In these applications, load compensation (O/S/L) and/or custom cablecompensation may be required. Refer to Compensation of LCR Measurementswith Nl-DcPowerfor more information.

Another compensation-related issue can arise from load compensation performedwith inaccurate actual values for your DUT, for example, where the true loss of a loadcompensation standard is not considered. In this situation, the resultingmeasurements will be overcompensated by an amount equal to the true loss. Considerthe situation when load compensation is performed with 10 pF at 1 MHz, and theactual reactance/resistance values are programmed as -15.915 kΩ and 0 Ω respectively(the appropriate values for an ideal capacitor). If the capacitor has a true dissipationfactor of 0.0001 (an appropriate value for a high-quality MLCC), the real component(resistance) of subsequent measurements will be overcompensated by 1.59 Ω. If theDUTs have similar loss characteristics, the overcompensation results in an impedancephase distribution centered around $\mathfrak { - 9 0 ^ { \circ } }$ , which corresponds to an equal chance of

negative D.

# Related information:

• Compensation of LCR Measurements with NI-DCPower

# Error Source: Temperature Variation

Changes in ambient temperature are often a significant source of measurement driftand variation. For low-loss impedance measurements, the temperature sensitivity ofthe LCR meter phase response may also contribute to negative loss measurements.Ensure that self-calibration and compensation routines are performed under ambientconditions that match the conditions of the DUT measurement to minimize the impactof this variation.

# Error Source: High Current, Low Frequency Testing

The following figures are examples for testing µF-sized caps at high currents, lowfrequencies, or both. Smaller test currents or testing at higher frequencies can causeadditional issues. NI recommends performing an unvalidated characterization tovalidate measurements.


Figure 10. Valid DUT Configuration Example with Two LCRs


![](images/a628fc85d049d44bcd5de5838fd6e150677dc626fc91f46804bf2fccd307bd2c.jpg)


Connect the four shields of a single LCR at the DUT, especially for higher test currents.


Figure 11. Invalid DUT Configuration Example with Two Improperly Connected LCRs


![](images/7a6361fbabb0050b2550684b2b43be88f42fba20a202f9a43109ff10520154b1.jpg)


The four shields of the LCR are not connected at the DUT.


Figure 12. Invalid DUT Configuration Example with Two LCRs


![](images/d08dc621c5d058e2ab8ad651b0fca32306df3d3a7de4f8ba1e098236ceb2eac3.jpg)


Do not connect shields from one LCR to another LCR if you also connect their LOsources.

The shields for HI CUR, HI POT, LO POT, and LO CUR are isolated grounds. Isolatedgrounds are not connected to the chassis or the earth ground.

This configuration results in common mode current flow and measurement error.

# Troubleshooting

If an issue persists after you complete a troubleshooting procedure, search ourKnowledgeBase for additional information our technical support engineers create asthey answer common user questions and resolve unexpected issues.

# What Should I Do if the PXIe-4190 Does Not Appear inMAX?

1. In the MAX configuration tree, expand Devices and Interfaces.

2. Expand the Chassis tree to see the list of installed hardware, and press $\tt { < F 5 > }$ torefresh the list.

3. If the module is still not listed, power off the system, ensure that all hardware iscorrectly installed, and restart the system.

4. Navigate to the Device Manager by right-clicking the Start button, and selectingDevice Manager.

5. Verify the PXIe-4190 appears in the Device Manager.

a. Under an NI entry, confirm that a PXIe-4190 entry appears.



Note If you are using a PC with a device for PXI remote controlsystem, under System Devices, also confirm that no error conditionsappear for the PCI-to-PCI Bridge.

b. If error conditions appear, reinstall NI-DCPower.

# Why Is the Access LED Off When the Chassis Is On?

The LEDs may not light until the module has been configured in HardwareConfiguration Utility or MAX. Before proceeding, verify that the PXIe-4190 appears inHardware Configuration Utility or MAX.

If the Access LED fails to light after you power on the chassis, a problem may exist withthe chassis power rails, a hardware module, or the LED.


Notice Apply external signals only while the PXIe-4190 is powered on.

Applying external signals while the module is powered off may causedamage.

1. Disconnect any signals from the module front panel.

2. Power off the chassis.

3. Remove the module from the chassis and inspect it for damage.


Notice Do not reinstall a damaged module.

4. Install the module in a different, supported slot within the same PXI chassis.

5. Power on the chassis.



Note If you are using a PC with a device for PXI remote control system,power on the chassis before powering on the computer.

6. Verify that the module appears in Hardware Configuration Utility or MAX.

7. Reset the module in Hardware Configuration Utility or MAX and perform a self-test.

# What Should I Do if the PXIe-4190 Fails the Self ails Self-Test?

1. Restart the system.

2. Launch MAX.

◦ Failed self-test—Perform self-calibration, then perform the self-test again. ThePXIe-4190 must be calibrated to pass the self-test.

◦ Failed self-calibration—Perform self-calibration again.

3. Power off the chassis.

4. Reinstall the failed module in a different slot.

5. Power on the chassis

6. Perform the self-test again.