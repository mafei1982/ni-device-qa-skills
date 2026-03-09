# PXIe-4147 Specifications

These specifications apply to the PXIe-4147.


# Definitions

Warranted specifications describe the performance of a model under statedoperating conditions and are covered by the model warranty.

Characteristics describe values that are relevant to the use of the model understated operating conditions but are not covered by the model warranty.

• Typical—describes the performance met by a majority of models.

• Nominal—describes an attribute that is based on design, conformance testing, orsupplemental testing.

• Measured—describes the measured performance of a representative model.

Values are Warranted Specifications unless otherwise noted.

# Conditions

Specifications are valid under the following conditions unless otherwise noted.

• Ambient temperature1 of $2 3 ^ { \circ } \mathsf { C } \pm 5 ^ { \circ } \mathsf { C }$

• Relative humidity between $10 \%$ and $70 \%$ , noncondensing. See Programming andMeasurement Accuracy/Resolution for additional performance derating whenoperating above $70 \%$ relative humidity.

• Chassis with slot cooling capacity $\geq 3 8 \mathrm { ~ } \dot { \mathsf { W } } ^ { 2 }$◦ For chassis with slot cooling capacity $= 3 8 W$ , fan speed set to HIGH

• Calibration interval of 1 year

• 30 minutes warm-up time

• Self-calibration performed within the last 24 hours

• niDCPower Aperture Time property or NIDCPOWER_ATTR_APERTURE_TIMEattribute set to 2 power-line cycles (PLC)

1. The ambient temperature of a PXI system is defined as the temperature at the chassis fan inlet (airintake).

2. For increased capability, NI recommends installing the PXIe-4147 in a chassis with slot coolingcapacity $\mathtt { \ge 5 8 }$ W.

# PXIe-4147 Pinout

Use the pinout to connect to terminals on the PXIe-4147.


Figure 1. PXIe-4147 Connector Pinout


![](images/f53d4a253e0a7a0aaf2e63c51620f348a7501db4308169908ea8115ebbbc39de.jpg)



Table 1. Signal Descriptions


<table><tr><td>Signal Name</td><td>Description</td></tr><tr><td>CH &lt;0..3&gt; Output HI</td><td>HI force terminal connected to channel power stage (generates and/or dissipates power). Positive polarity is defined as voltage measured on HI &gt; LO.</td></tr><tr><td>CH &lt;0..3&gt; Guard</td><td>Buffered output that follows the voltage of the HI force terminal. Used to drive shield conductors surrounding HI force and Sense HI conductors to minimize effects of leakage and capacitance on low level currents.</td></tr><tr><td>CH &lt;0..3&gt; Output LO</td><td>LO force terminal connected to channel power</td></tr><tr><td></td><td>stage (generates and/or dissipates power).Positive polarity is defined as voltage measured on HI &gt; LO.</td></tr><tr><td>CH &lt;0..3&gt; Sense HI</td><td rowspan="2">Voltage remote sense input terminals. Used to compensate for IRVoltage drops in cable leads, connectors, and switches.</td></tr><tr><td>CH &lt;0..3&gt; Sense LO</td></tr><tr><td>NC</td><td>No Connect.</td></tr></table>


Note PXIe-4147 channels are bank-isolated from earth ground, but alsoshare a common LO.

# Voltage


Table 2. Voltage Programming and Measurement Accuracy/Resolution


<table><tr><td rowspan="3">Range</td><td rowspan="3">Resolution (Noise Limited)</td><td rowspan="3">Noise (0.1 Hz to 10 Hz, peak-to-peak, typical)</td><td colspan="2">Accuracy ± (% of Voltage + Offset)3</td><td rowspan="2">Tempco4 ± (% of Voltage + Offset)/°C</td></tr><tr><td colspan="2">Ambient23 °C±5 °C, Tcal5 ±5 °C</td></tr><tr><td>Multiple Channels6</td><td>Single Channel7</td><td>Ambient0 °C to 55 °C, Tcal±5 °C</td></tr><tr><td>1 V</td><td>100 nV</td><td>2 μV</td><td>0.025% + 110 μV</td><td>0.02% + 70 μV</td><td rowspan="2">0.0002% + 1 μV</td></tr><tr><td>8 V</td><td>1 μV</td><td>12 μV</td><td>0.02% + 600 μV</td><td>0.015% + 400 μV</td></tr></table>

3. Refer to the Remote Sense and Load Regulation sections for additional accuracy derating andconditions.

4. Temperature coefficient applies beyond $2 3 ^ { \circ } \mathsf { C } \pm 5 ^ { \circ } \mathsf { C }$ ambient within $\pm 5 ^ { \circ } \mathsf { C }$ of $\mathsf { T } _ { \mathsf { C a l } }$

$5 . \mathsf { T } _ { \mathsf { C a l } }$ is the internal device temperature recorded by the PXIe-4147 at the completion of the last self-calibration.

6. Multiple-channel specifications apply whenever two or more channels are connected and sourcing/sinking current. Multiple-channel specifications account for interactions between the channels whenoperated at high current, including board heating.

7. Single-channel specifications assume only one channel is connected and sourcing/sinking currentwhich results in improved accuracy due to the reduction of effects between the channels, includingboard heating. When transitioning from a multiple-channel configuration to a single-channelconfiguration, a ten-minute cool down period is required to meet Single Channel accuracyspecifications.

# Current


Table 3. Current Programming and Measurement Accuracy/Resolution


<table><tr><td rowspan="3">Range</td><td rowspan="3">Resolution (Noise Limited)</td><td rowspan="3">Noise (0.1 Hz to 10 Hz, peak-to-peak, typical)</td><td colspan="2">Accuracy ± (% of Current + Offset)8</td><td>Tempco9 ± (% of Current + Offset)/°C</td></tr><tr><td colspan="2">Tambient23 °C±5 °C, Tcal10±5 °C</td><td rowspan="2">Tambient0 °C to 55 °C, Tcal±5 °C</td></tr><tr><td>Multiple Channels11</td><td>Single Channel12</td></tr><tr><td>1 μA</td><td>100 fA</td><td>8 pA</td><td>0.045% + 250 pA</td><td>0.035% + 150 pA</td><td rowspan="7">0.0003% + 2 pA</td></tr><tr><td>10 μA</td><td>1 pA</td><td>60 pA</td><td>0.05% + 1.6 nA</td><td>0.035% + 1 nA</td></tr><tr><td>100 μA</td><td>10 pA</td><td>400 pA</td><td>0.045% + 14 nA</td><td>0.035% + 8 nA</td></tr><tr><td>1 mA</td><td>100 pA</td><td>4 nA</td><td>0.04% + 120 nA</td><td>0.03% + 70 nA</td></tr><tr><td>10 mA</td><td>1 nA</td><td>40 nA</td><td>0.04% + 1.2 μA</td><td>0.03% + 700 nA</td></tr><tr><td>100 mA</td><td>10 nA</td><td>400 nA</td><td>0.045% + 12 μA</td><td>0.035% + 7 μA</td></tr><tr><td>3 A</td><td>1 μA</td><td>40 μA</td><td>0.07% + 800 μA</td><td>0.07% + 400 μA</td></tr></table>


Note For more information about the impact to specifications when usingNI-DCPower Merged Channels, refer to Effect of Merging Channels on Performance Specifications in the PXle-4147 User Manual.

# Related information:

8. Relative humidity between $10 \%$ and $70 \%$ , noncondensing. When operating above $70 \%$ relativehumidity, add 30 pA to current accuracy specifications.

9. Temperature coefficient applies beyond $2 3 ^ { \circ } \mathsf { C } \pm 5 ^ { \circ } \mathsf { C }$ ambient within $\pm 5 ^ { \circ } \mathsf { C }$ of $\mathsf { T } _ { \mathsf { C a l } }$

$1 0 . \mathsf { T } _ { \mathsf { C a l } }$ is the internal device temperature recorded by the PXIe-4147 at the completion of the last self-calibration.

11. Multiple-channel specifications apply whenever two or more channels are connected and sourcing/sinking current. Multiple-channel specifications account for interactions between the channels whenoperated at high current, including board heating.

12. Single-channel specifications assume only one channel is connected and sourcing/sinking currentwhich results in improved accuracy due to the reduction of effects between the channels, includingboard heating. When transitioning from a multiple-channel configuration to a single-channelconfiguration, a ten-minute cool down period is required to meet Single Channel accuracyspecifications.

• Effect of Merging Channels on Performance Specifications - PXIe-4147 User Manual

# Noise


Table 4. Noise


<table><tr><td>Wideband source noise13</td><td>&lt;10 mVpk-pk, typical</td></tr></table>

The following figures illustrate measurement noise as a function of measurementaperture for the PXIe-4147.


Figure 2. Voltage RMS Noise Versus Aperture Time, Nominal


![](images/2f9e94e68d0e92429a2c925e374c8f010be1601351b1b41528218cc0b37ee564.jpg)



Note When the aperture time is set to two power-line cycles (PLCs),measurement noise differs slightly depending on whether NI-DCPower PowerLine Frequency is set to 50 Hertz or 60 Hertz.




Note To configure DC noise rejection, set NI-DCPower DC Noise Rejection toNormal or Second-Order.

13. 10 Hz to 20 MHz bandwidth. PXIe-4147 configured for normal transient response.


Figure 3. Current RMS Noise Versus Aperture Time, Nominal


![](images/8d1f1f02b94fdc4c7f6a571994bc046d8712d0912153b63a0bcad9025a9bbfe9.jpg)




Note When the aperture time is set to two power-line cycles (PLCs),measurement noise differs slightly depending on whether NI-DCPower PowerLine Frequency is set to 50 Hertz or 60 Hertz.



Note To configure DC noise rejection, set NI-DCPower DC Noise Rejection toNormal or Second-Order.


Note For more information about the impact to specifications when usingNI-DCPower Merged Channels, refer to Effect of Merging Channels on Performance Specificationsin the PXle-4147 User Manual.

# Related information:

• Effect of Merging Channels on Performance Specifications - PXIe-4147 User Manual

# Transient Response and Settling Time


Table 5. Settling Time (Measured as the time to settle to within $0 . 1 \%$ of step amplitude, PXIe-4147configured for fast transient response.)


<table><tr><td>Voltage mode, ≤4 V
step, unloaded14</td><td>&lt;50 μs, typical</td></tr><tr><td>Current mode, full-scale step, 3 A to 100 μA ranges15</td><td>&lt;50 μs, typical</td></tr><tr><td>Current mode, full-scale step, 10 μA range16</td><td>&lt;100 μs, typical</td></tr><tr><td>Current mode, full-scale step, 1 μA range17</td><td>&lt;200 μs, typical</td></tr></table>


Table 6. Transient Response (Time to recover within $1 0 \mathsf { m V }$ after a load current change from $10 \%$ to$90 \%$ of range, PXIe-4147 configured for fast transient response.)


<table><tr><td>3 A to 100 μA ranges</td><td>&lt;40 μs, typical</td></tr><tr><td>10 μA range</td><td>&lt;100 μs, typical</td></tr><tr><td>1 μA range</td><td>&lt;200 μs, typical</td></tr></table>

# Remote Sense


Table 7. Remote Sense


<table><tr><td>Voltage accuracy</td><td>Add (10 ppm of voltage range + 25 μV) per volt of LO lead drop, plus 10 μV per volt of HI lead drop to voltage accuracy specification</td></tr><tr><td>Maximum sense lead resistance</td><td>100 Ω</td></tr><tr><td>Maximum lead drop per lead</td><td>1 V, maximum 8 V between HI and LO terminals</td></tr></table>

# Load Regulation


Table 8. Load Regulation


<table><tr><td>Voltage, local sense18</td><td>100 μV/mA, nominal; 200 μV/mA, maximum</td></tr></table>

14. Current limit set to ${ \geq } 3 0 \mu \mathsf { A }$ and $\geq 2 0 \%$ of the selected current limit range.

15. Voltage limit set to $\geq 2 \vee$ , resistive load set to 1 V/selected current range.

16. Voltage limit set to $\geq 2 \mathrm { ~ V ~ }$ , resistive load set to 1 V/selected current range.

17. Voltage limit set to $\geq 2 \vee$ , resistive load set to 1 V/selected current range.

18. At the output terminals of attached TB-414X Screw Terminal Connector Kit.

<table><tr><td>Voltage, remote sense</td><td>Error included in accuracy specifications</td></tr><tr><td>Current</td><td>Error included in accuracy specifications</td></tr></table>


Note For more information about the impact to specifications when usingNI-DCPower Merged Channels, refer to Effect of Merging Channels on Performance Specifications in the PXle-4147 User Manual.

# Related information:

• Effect of Merging Channels on Performance Specifications - PXIe-4147 User Manual

# Isolation


Table 9. Isolation


<table><tr><td>Isolation voltage, any pin to earth ground19</td><td>60 V DC, CAT I</td></tr><tr><td>Withstand voltage</td><td>800 Vpk</td></tr></table>

# Protection


Table 10. Absolute Maximum Voltage to Output LO, All Pins


<table><tr><td>Output HI</td><td>±10 V</td></tr><tr><td>All other pins</td><td>±60 V</td></tr></table>


Table 11. Output Channel Protection


<table><tr><td>Overcurrent or overvoltage</td><td>Automatic shutdown, output disconnect relay opens</td></tr><tr><td>Overtemperature</td><td>Automatic shutdown, output disconnect relay opens</td></tr></table>

19. Channels isolated from earth ground, but share a common LO for all channels (bank isolation).

# Guard Output Characteristics


Table 12. Cable Guard


<table><tr><td>Output impedance</td><td>2 kΩ, nominal</td></tr><tr><td>Offset voltage</td><td>1 mV, typical</td></tr></table>

# Output Resistance Programming Accuracy


Table 13. Output Resistance Programming Accuracy


<table><tr><td rowspan="2">Current Level/ Limit Range</td><td colspan="2">Voltage Mode</td><td colspan="2">Current Mode</td></tr><tr><td>Programmable Resistance Range</td><td>Accuracy, ±(% of Resistance Setting + Offset)20[20]</td><td>Programmable Resistance Range</td><td>Accuracy, ±(% of resistance setting || Offset)20</td></tr><tr><td>1 μA</td><td>0 to ±4 MΩ</td><td>0.05% + 100 Ω</td><td>±2.5 MΩ to ±infinity</td><td>0.05% || 100 GΩ</td></tr><tr><td>10 μA</td><td>0 to ±400 kΩ</td><td>0.05% + 10 Ω</td><td>±250 kΩ to ±infinity</td><td>0.05% || 10 GΩ</td></tr><tr><td>100 μA</td><td>0 to ±40 kΩ</td><td>0.05% + 1 Ω</td><td>±25 kΩ to ±infinity</td><td>0.05% || 1 GΩ</td></tr><tr><td>1 mA</td><td>0 to ±4 kΩ</td><td>0.05% + 100 mΩ</td><td>±2.5 kΩ to ±infinity</td><td>0.05% || 100 MΩ</td></tr><tr><td>10 mA</td><td>0 to ±400 Ω</td><td>0.05% + 10 mΩ</td><td>±250 Ω to ±infinity</td><td>0.05% || 10 MΩ</td></tr><tr><td>100 mA</td><td>0 to ±40 Ω</td><td>0.05% + 1 mΩ</td><td>±25 Ω to ±infinity</td><td>0.05% || 1 MΩ</td></tr><tr><td>3 A</td><td>0 to ±1.25 Ω</td><td>0.08% + 100 μΩ</td><td>±750 mΩ to ±infinity</td><td>0.08% || 10 kΩ</td></tr></table>

# Measurement and Update Timing


Table 14. Measurement and Update Timing


<table><tr><td>Available sample rates21</td><td>(1.8 MS/s)/N, nominal where</td></tr></table>

20. Accuracy is typical and applies within $\pm 5 ^ { \circ } \mathsf { C }$ of last self calibration.

<table><tr><td></td><td>N=1,2,3,...224
S is samples</td></tr><tr><td>Sample rate accuracy</td><td>Equal to PXle_CLK100 accuracy, nominal</td></tr><tr><td>Maximum measure rate to host</td><td>1.8 MS/s per channel, continuous, nominal</td></tr><tr><td>Maximum source update rate22</td><td>100,000 updates/s, nominal</td></tr></table>


Table 15. Input Trigger To


<table><tr><td>Source event delay</td><td>10 μs, nominal</td></tr><tr><td>Source event jitter</td><td>2 μspk-pk, nominal</td></tr><tr><td>Measure event jitter</td><td>2 μspk-pk, nominal</td></tr></table>

# Triggers

# Input Triggers


Table 16. Input Triggers


<table><tr><td>Input trigger types</td><td>Start, Source, Sequence Advance, Measure</td></tr></table>


Table 17. Input Trigger Sources (PXI trigger lines 0 to 7)*


<table><tr><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td>Minimum pulse width</td><td>100 ns</td></tr></table>


# Note * Pulse widths and logic levels are compliant with PXI Express

21. When source-measuring, both the NI-DCPowerSource Delay and Aperture Time properties affect thesampling rate. When taking a measure record, only the Aperture Time property affects the samplingrate.

22. As the source delay is adjusted or if advanced sequencing is used, maximum source update rates mayvary.

# Hardware Specification Revision 1.0 ECN 1.


Table 18. Input Trigger Destinations† (PXI trigger lines 0 to 7)*


<table><tr><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td>Minimum pulse width</td><td>&gt;200 ns</td></tr></table>



Note † Input triggers can come from any source (PXI trigger or softwaretrigger) and be exported to any PXI trigger line. This allows for easier multi-board synchronization regardless of the trigger source.


Note * Pulse widths and logic levels are compliant with PXI Express Hardware Specification Revision 1.0 ECN 1.

# Output Triggers (Events)


Table 19. Output Triggers


<table><tr><td>Output trigger types</td><td>Source Complete, Sequence Iteration Complete, Sequence Engine Done, Measure Complete</td></tr></table>


Table 20. Output Trigger Destinations (PXI trigger lines 0 to 7)*


<table><tr><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td>Minimum pulse width</td><td>230 ns</td></tr></table>

Note * Pulse widths and logic levels are compliant with PXI Express Hardware Specification Revision 1.0 ECN 1.

# Physical


Table 21. Physical Characteristics


<table><tr><td>Dimensions</td><td>3U, one-slot, PXI Express/CompactPCI Express module</td></tr><tr><td></td><td>2.0 cm × 13.0 cm × 21.6 cm (0.8 in. × 5.1 in. × 8.5 in.)</td></tr><tr><td>Weight</td><td>448 g (15.8 oz)</td></tr><tr><td>Front panel connectors</td><td>25-position D-SUB, male</td></tr></table>

# Calibration Interval

You can obtain the calibration certificate and information about calibration services forthe PXIe-4147 at ni.com/calibration.


Table 22. Calibration Interval


<table><tr><td>Calibration interval</td><td>1 year</td></tr></table>

# Power Requirements


Table 23. Power Requirements


<table><tr><td>+3.3 V</td><td>1 A, typical</td></tr><tr><td>+12 V</td><td>1.3 A, typical at idle;6 A, maximum at full load</td></tr></table>

# Environmental Characteristics


Table 24. Environmental Characteristics


<table><tr><td>Operating temperature</td><td>0 °C to 55 °C23</td></tr><tr><td>Storage temperature</td><td>-40 °C to 71 °C</td></tr><tr><td>Operating humidity</td><td>10% to 90%, noncondensing24</td></tr></table>

23. Not all chassis can achieve this ambient temperature range. Refer to PXI chassis specifications todetermine the ambient temperature ranges your chassis can achieve.

24. When transitioning a device from a storage or operation environment with relative humidity above$70 \%$ , device should be allowed to stabilize in the lower humidity environment for several hours

<table><tr><td>Storage humidity</td><td>5% to 95%, noncondensing</td></tr><tr><td>Pollution Degree</td><td>2</td></tr><tr><td>Maximum altitude</td><td>2,000 m (800 mbar) (at 25 °C ambient temperature)</td></tr></table>

# Block Diagrams


Figure 4. PXIe-4147 Block Diagram


![](images/613a0e0dda6e838f4d4cf5ee7a13da4fc19551e5de0b85f9a904e6c991ae8cb4.jpg)



Figure 5. Channel-Level Block Diagram


![](images/67caa9963c02752ee37fe1179f5e20562284628b3b1a9457f6e3c36c34707f3a.jpg)


before use. Refer to the PXIe-4147Programming and Measurement Accuracy/Resolutionspecifications for additional performance derating when operating above $70 \%$ relative humidity.

# Instrument Capabilities


Table 25. Instrument Capabilities


<table><tr><td>Channels</td><td>0 through 325</td></tr><tr><td>DC voltage ranges</td><td>1 V, 8 V</td></tr><tr><td>DC current ranges</td><td>1 μA, 10 μA, 100 μA, 1 mA, 10 mA, 100 mA, 3 A</td></tr></table>

The following figure illustrates the voltage and the current source and sink ranges ofthe PXIe-4147.


Figure 6. PXIe-4147 Quadrant Diagram, Any Channel


![](images/ed6362a7ab02433ae1f63debc0b2d80c3cc2d1bab8801568691b5ec9cabf0528.jpg)



Legend


![](images/52c856246df1dff5c42ffd081528c6a23d6edd196515b294bc03ea76c0a79361.jpg)



≥58 W Chassis Only


![](images/3e1ffdbe1f784e5bd26b758dae93c7a19c20ba180a234c568cfb78c6114b49bb.jpg)



All Chassis



Table 26. Available DC Output Power, Sourcing (Power limit defined by voltage measured between HIand LO terminals.)


<table><tr><td>Sourcing26, all chassis</td><td>24 W per channel and 40 W total</td></tr></table>

25. Channels isolated from earth ground, but share a common LO for all channels (bank isolation).

26. Sourcing power may be limited by total power available from the chassis power supply. Refer to thePerforming a Power Budget on a PXI/PXIe System article for more information.


Table 27. Available DC Output Power, Sinking (Power limit defined by voltage measured between HIand LO terminals.)


<table><tr><td>≥58 W slot cooling capacity chassis27</td><td>24 W per channel and 40 W total</td></tr><tr><td>&lt;58 W slot cooling capacity chassis</td><td>15 W per channel and 15 W total</td></tr></table>

27. When sinking more than 15 W into the PXIe-4147, transients may not exceed 200 mW/µs.