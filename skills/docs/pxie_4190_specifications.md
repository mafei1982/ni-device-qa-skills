# PXIe-4190 Specifications

# Notes on PXIe-4190 Variants

In this document, the 500 kHz and 2 MHz variants of the PXIe-4190 are referred toinclusively as the PXIe-4190. The information in this document applies to all variants ofthe PXIe-4190 unless otherwise specified.

To determine which version of the PXIe-4190 you have, locate the device name in oneof the following places:

• On the device front panel, the PXIe-4190 (2 MHz) shows PXIe-4190 2MHz LCRMeter/SMU.The PXle-4190 (500 kHz) shows NI PXle-4190 500kHz LCRMeter/SMU.

• In MAX, the PXIe-4190 (2 MHz) appears as NI PXIe-4190. The PXIe-4190 (500 kHz)appears as NI PXIe-4190 (500 kHz).


# SMU Specifications

# SMU Specifications Conditions

SMU mode specifications are valid only when the following conditions are met unlessotherwise noted.

• Ambient temperature1 of $2 3 ^ { \circ } \mathsf { C } \pm 5 ^ { \circ } \mathsf { C }$

• Temperature is within $\pm 5 ^ { \circ } \mathsf { C }$ of last self-calibration $( T _ { \mathsf { c a l } } )$

• Relative humidity between $10 \%$ and $60 \%$ , noncondensing

• Chassis with slot cooling capacity $\ge 5 8$ W

• Calibration interval of 1 year

• 30 minutes warm-up time

• Self-calibration performed within the last 24 hours

• NI-DCPower 23.3 or later installed

• Connections between force and sense leads are required2

• niDCPower Aperture Time property set to 2 power-line cycles (PLC)

• niDCPower Cable Length property set when using the lower two current ranges



Note To avoid excessive relay wear, avoid setting Output Connected toTRUE with a non-zero voltage connected to the output.

# PXIe-4190 Pinout

The following figure shows the terminals on the PXIe-4190 connector.

1. The ambient temperature of a PXI system is defined as the temperature at the chassis fan inlet (airintake).

2. For the PXIe-4190 revision D and earlier—niDCPower Output Enabled or niDCPower OutputConnected properties must be set to FALSE when making connections between force and senseleads. Disconnecting the sense leads while both these properties are set to TRUE may result in outputprotection errors or long settling tails due to the feedback path for the control loop being open. If thePXIe-4190 is run open loop due to accidental sense lead disconnection, allow a minimum of 1 minuteafter establishing proper lead connections before making measurements.


Figure 1. PXIe-4190 Connector Pinout


![](images/7101aa287c1a7812bbe3130c4ee6aad167b64c5d2f84b7e19ba289f1122bf7a8.jpg)



Table 1. Signal Descriptions


<table><tr><td>Contact</td><td>LCR Mode Functionality</td><td>SMU Mode Functionality</td></tr><tr><td>Pin 1 to Pin 7</td><td colspan="2">General purpose input/output contacts</td></tr><tr><td>A6 (Center Conductor)</td><td>HI CUR</td><td>LO</td></tr><tr><td>A6 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A5 (Center Conductor)</td><td>HI POT</td><td>Sense LO</td></tr><tr><td>A5 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A4 (Center Conductor)</td><td colspan="2">CAL FORCE</td></tr><tr><td>A4 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A3 (Center Conductor)</td><td colspan="2">CAL SENSE</td></tr><tr><td>A3 (Outer Conductor)</td><td colspan="2">Isolated Shield</td></tr><tr><td>A2 (Center Conductor)</td><td>LO POT</td><td>Sense HI</td></tr><tr><td>A2 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr><tr><td>A1 (Center Conductor)</td><td>LO CUR</td><td>HI</td></tr><tr><td>A1 (Outer Conductor)</td><td>Isolated Shield</td><td>GUARD</td></tr></table>

# SMU Instrument Capabilities


Table 2. DC Voltage Ranges


<table><tr><td>PX1e-4190 (2 MHz)</td><td>PX1e-4190 (500 kHz)</td></tr><tr><td>• 1 V
• 10 V
• 40 V</td><td>• 1 V
• 10 V</td></tr></table>


Table 3. DC Current Ranges


<table><tr><td>PXIe-4190 (2 MHz)</td><td>PXIe-4190 (500 kHz)</td></tr><tr><td>· 1 nA
· 100 nA
· 1 μA
· 10 μA
· 100 μA
· 1 mA
· 10 mA
· 100 mA</td><td>· 10 μA
· 100 μA
· 1 mA
· 10 mA
· 100 mA</td></tr></table>


Table 4. Available DC output power


<table><tr><td></td><td>PXIe-4190 (2 MHz)</td><td>PXIe-4190 (500 kHz)</td></tr><tr><td>Sourcing</td><td>4 W</td><td>1 W</td></tr><tr><td>Sinking</td><td>4 W</td><td>1 W</td></tr></table>


Figure 2. PXIe-4190 (2 MHz) Quadrant Diagram


![](images/88f3c534cda6f83d287fa6cfd619190522f119f12b21aaa5447858d05db4de85.jpg)



Figure 3. PXIe-4190 (500 kHz) Quadrant Diagram


![](images/4feb677fdf1b38cd4c5abefba2c54c56e93c52fd31f788f3d5c8bb721fbe007c.jpg)


# SMU Voltage


Table 5. Voltage Programming and Measurement Accuracy/Resolution


<table><tr><td rowspan="3">Range</td><td rowspan="3">Resolution (Noise Limited)</td><td rowspan="3">Noise (0.1 Hz to 10 Hz, peak-to-peak, typical)</td><td colspan="2">Accuracy ± (% of Voltage + Offset)</td><td rowspan="2">Tempco† ± (% of Voltage + Offset)/°C</td></tr><tr><td colspan="2">Tambient 23 °C ±5 °C, Tcal* ±5 °C</td></tr><tr><td>% of Voltage</td><td>Offset</td><td>Tambient 0 °C to 33 °C, Tcal ±5 °C</td></tr><tr><td>1 V</td><td>100 nV</td><td>2 μV</td><td>0.009%</td><td>160 μV</td><td rowspan="3">0.0002% + 1 μV</td></tr><tr><td>10 V</td><td>1 μV</td><td>10 μV</td><td>0.008%</td><td>1 mV</td></tr><tr><td>40 V‡</td><td>4 μV</td><td>50 μV</td><td>0.009%</td><td>4.1 mV</td></tr><tr><td colspan="6">*Tcal is the internal device temperature recorded by the PXIe-4190 at the completion of the last self-calibration. 
†Temperature coefficient applies beyond 23 °C ±5 °C ambient within ±5 °CTcal. 
‡PXIe-4190 (2 MHz) only</td></tr></table>

# SMU Current


Table 6. Current Programming and Measurement Accuracy/Resolution


<table><tr><td rowspan="3">Range</td><td rowspan="3">Resolution (Noise Limited)</td><td rowspan="3">Noise (0.1 Hz to 10 Hz, peak-to-peak, typical)</td><td colspan="2">Accuracy ± (% of Current + Offset)</td><td rowspan="2">Tempco† ± (% of Current + Offset)/°C</td></tr><tr><td colspan="2">Tambient 23 °C ±5 °C, Tcal* ±5 °C</td></tr><tr><td>% of Current</td><td>Offset‡,§</td><td>Tambient 0 °C to 33 °C, Tcal ±5 °C</td></tr><tr><td>1 nA**, ††</td><td rowspan="2">1 fA</td><td>30 fA</td><td rowspan="2">0.14%</td><td rowspan="2">2 pA</td><td rowspan="2">0.0003% + 20 fA</td></tr><tr><td>1 nA‡‡, ††</td><td>60 fA</td></tr><tr><td>100 nA** ,††</td><td rowspan="2">10 fA</td><td>300 fA</td><td rowspan="2">0.091%</td><td rowspan="2">11 pA</td><td rowspan="8"></td></tr><tr><td>100 nA‡‡ ,††</td><td>700 fA</td></tr><tr><td>1 μA††</td><td>100 fA</td><td>2 pA</td><td>0.032%</td><td>140 pA</td></tr><tr><td>10 μA</td><td>1 pA</td><td>15 pA</td><td>0.026%</td><td>1 nA</td></tr><tr><td>100 μA</td><td>10 pA</td><td>120 pA</td><td>0.024%</td><td>10 nA</td></tr><tr><td>1 mA</td><td>100 pA</td><td>1.2 nA</td><td>0.023%</td><td>100 nA</td></tr><tr><td>10 mA</td><td>1 nA</td><td>12 nA</td><td>0.022%</td><td>1 μA</td></tr><tr><td>100 mA</td><td>10 nA</td><td>120 nA</td><td>0.028%</td><td>10 μA</td></tr><tr><td colspan="6">*Tcal is the internal device temperature recorded by the PXIe-4190 at the completion of the last self-calibration. 
†Temperature coefficient applies beyond 23 °C ±5 °C ambient within ±5 °CTcal. 
‡Add 10 pA to current accuracy specifications when using DSUB-DSUB cable accessory (SHDB13W6-DB13W6-LL). 
§Add 10 pA to current accuracy specifications when operating with Tambient &gt;30 °C. 
**Under the following additional conditions: with 10 PLC, and 11-point median filter. 
†† PXIe-4190 (2 MHz) only 
‡‡ Under default specification conditions.</td></tr></table>

# SMU Noise

<table><tr><td>Wideband source noise</td><td>&lt;20 mV peak-to-peak, typical3</td></tr></table>


Figure 4. Voltage RMS Noise versus Aperture Time, Nominal


![](images/3b0ffcfe677d06286f7f9412373cda8b2973f0586513a47042e5b5f494236065.jpg)



Figure 5. Current RMS Noise versus Aperture Time, Nominal


![](images/93a0cb9f64fb40bedf6a42d6b48ed0faafd018e6dd5228aaa983a4c5d79af3e2.jpg)



Note Use an aperture time of at least 1 PLC to minimize powerline noise

3. 10 Hz to 20 MHz bandwidth, PXIe-4190 configured for normal transient response.

pickup in the 1 nA range.

# SMU Load Regulation

<table><tr><td>Voltage</td><td>Error included in accuracy specifications</td></tr><tr><td>Current</td><td>Error included in accuracy specifications</td></tr></table>

# SMU Transient Response and Settling Time


Table 7. Settling Time, Typical


<table><tr><td>Range</td><td>Voltage Mode, ≤5 V Step, Unloaded*</td><td>Current Mode, Full-Scale Step†</td></tr><tr><td>100 mA to 10 μA</td><td>&lt;200 μs</td><td>&lt;200 μs</td></tr><tr><td>1 μA</td><td>&lt;350 μs</td><td>&lt;2 ms</td></tr><tr><td>100 nA</td><td>&lt;2 ms</td><td>&lt;8 ms</td></tr><tr><td>1 nA</td><td>&lt;40 ms</td><td>&lt;1,100 ms</td></tr></table>

Note: Measured as the time to settle to within $0 . 1 \%$ of step amplitude, PXIe-4190configured for fasttransient response, with 1 m cable.

* Current limit set to $100 \%$ of selected current range for 1 nA and 100 nA ranges, all other ranges setto $5 0 \%$ of selected current range.

† Voltage limit set to $\geq 2 \mathrm { ~ V ~ }$ , resistive load set to 1 V/selected current range.


Table 8. Transient Response, Typical


<table><tr><td>Current Range</td><td>Recovery Time*</td><td>Voltage Dip</td><td>Time Constant†</td></tr><tr><td>100 mA</td><td>&lt;40 μs</td><td>&lt;1.3 V</td><td>&lt;10 μs</td></tr><tr><td>10 mA</td><td>&lt;40 μs</td><td>&lt;1.2 V</td><td>&lt;10 μs</td></tr><tr><td>1 mA</td><td>&lt;40 μs</td><td>&lt;800 mV</td><td>&lt;17 μs</td></tr><tr><td>100 μA</td><td>&lt;65 μs</td><td>&lt;500 mV</td><td>&lt;35 μs</td></tr><tr><td>10 μA</td><td>&lt;150 μs</td><td>&lt;200 mV</td><td>&lt;50 μs</td></tr><tr><td>1 μA</td><td>&lt;450 μs</td><td>&lt;35 mV</td><td>&lt;340 μs</td></tr><tr><td>100 nA</td><td>—</td><td>&lt;8 mV</td><td>&lt;3 ms</td></tr><tr><td>1 nA</td><td>—</td><td>&lt;800 μV</td><td>&lt;300 ms</td></tr><tr><td colspan="4">Note: Load current change from 10% to 90% of range, PXle-4190 configured for fast transient response, with 1 m cable. 
*Recovery Time defined as the time to recover within 10 mV after load current change. 
†Time Constant defined as the time to recover within 63% of Voltage Dip after load current change.</td></tr></table>

# SMU Remote Sense

<table><tr><td>Maximum sense lead resistance</td><td>200 Ω</td></tr><tr><td>Maximum lead drop per lead</td><td>1 V</td></tr></table>

# SMU Guard Output Characteristics

<table><tr><td colspan="2">Cable guard</td></tr><tr><td>Output impedance</td><td>&lt;100 mΩ, nominal</td></tr><tr><td>Offset voltage</td><td>1 mV, typical</td></tr></table>

# SMU Measurement and Update Timing

<table><tr><td>Available sample rates4</td><td>(600 kS/s)/N, nominal</td></tr></table>

where

• $\mathsf { N } = 1 , 2 , 3 , \hdots 2 ^ { 2 4 }$

• S is samples

<table><tr><td>Sample rate accuracy</td><td>Equal to PXIe_CLK100 accuracy, nominal</td></tr><tr><td>Maximum measure rate to host</td><td>600 kS/s, nominal</td></tr><tr><td>Maximum source update rate, sequence mode</td><td>100,000 updates/s (10 μs/update), nominal</td></tr></table>

<table><tr><td colspan="2">Input trigger to</td></tr><tr><td>Source event delay</td><td>10 μs nominal</td></tr><tr><td>Source event jitter</td><td>2 μs peak-to-peak, nominal</td></tr><tr><td>Measure event jitter</td><td>2 μs peak-to-peak, nominal</td></tr></table>

4. When source-measuring, both the NI-DCPower Source Delay and Aperture Time properties affect thesampling rate. When taking a measure record, only the Aperture Time property affects the samplingrate.

# LCR Specifications

# LCR Specifications Conditions

LCR mode specifications are valid only when the following conditions are met unlessotherwise noted.

• Ambient temperature5 of $2 3 ^ { \circ } \mathsf C \pm 1 0 ^ { \circ } \mathsf C$

• Temperature is within $\pm 5 ^ { \circ } \mathsf { C }$ of last self-calibration $( T _ { \mathtt { C a l } } )$

• Relative humidity between $10 \%$ and $60 \%$ , noncondensing

• Chassis with slot cooling capacity $\ge 5 8$ W

• Calibration interval of 1 year

• 30 minutes warm-up time

• Self-calibration performed within the last 24 hours

• NI-DCPower 23.3 or later installed

• AC Stimulus Automatic Level Control (ALC) is On

• DC Bias Automatic Level Control (ALC) set to On

• Impedance range is within $30 \%$ of DUT impedance

• LCR Measurement Time is Long unless otherwise stated

• Source delay set to Automatic

• Open and short LCR compensation has been completed.

• Connections between force and sense leads are required6

• Four-terminal pair (4TP) connections to load7

• niDCPower Cable Length property set


Note To avoid excessive relay wear, avoid setting Output connected toTRUE with a non-zero voltage connected to the output.

5. The ambient temperature of a PXI system is defined as the temperature at the chassis fan inlet (airintake).

6. For the PXIe-4190 revision D and earlier—niDCPower Output Enabled or niDCPower OutputConnected properties must be set to FALSE when making connections between force and senseleads. Disconnecting the sense leads while both these properties are set to TRUE may result in outputprotection errors or long settling tails due to the feedback path for the control loop being open. If thePXIe-4190 is run open loop due to accidental sense lead disconnection, allow a minimum of 1 minuteafter establishing proper lead connections before making measurements.

7. Refer to the PXIe-4190 Getting Started for more information on 4TP connections.

# Related information:

• Compensation of LCR Measurements with NI-DCPower

# LCR Instrument Capabilities

The PXIe-4190 is capable of measuring the following elements using AC stimulusfrequencies from 40 Hz to 2 MHz:

• Capacitors—100 fF to 5 mF, with up to 100 aF sensitivity

• Inductors—Greater than $1 0 \mathsf { n H }$ , with up to 10 pH sensitivity

• Resistors—100 mΩ to 1 GΩ, with up to $1 0 \mu \Omega$ sensitivity

<table><tr><td colspan="2">Maximum AC voltage</td><td>7.07 V RMS</td></tr><tr><td colspan="2">Maximum AC current</td><td>70.7 mA RMS</td></tr><tr><td colspan="3">Maximum DC bias voltage range</td></tr><tr><td>PXIe-4190 (2 MHz)</td><td colspan="2">±40 V, including peak AC stimulus</td></tr><tr><td>PXIe-4190 (500 kHz)</td><td colspan="2">±10 V, including peak AC stimulus</td></tr></table>

<table><tr><td>Maximum DC bias current range</td><td>±100 mA, including peak AC stimulus</td></tr></table>

<table><tr><td colspan="2">AC stimulus frequency range</td></tr><tr><td>PXIe-4190 (2 MHz)</td><td>40 Hz to 2 MHz</td></tr><tr><td>PXIe-4190 (500 kHz)</td><td>40 Hz to 500 kHz</td></tr><tr><td colspan="2">Measurement time settings</td></tr><tr><td>Short</td><td>1 ms</td></tr><tr><td>Medium</td><td>10 ms</td></tr><tr><td>Long</td><td>100 ms</td></tr><tr><td>Custom</td><td>0 to 0.99999 s</td></tr></table>

Note Measurement times round up to the nearest positive integer number ofcycles of the AC stimulus frequency.

# Calculating Total LCR Measurement Time per Setpoint

Total Measurement Time per setpoint $=$ LCR Source Delay $^ +$ Total LCR MeasurementTime

# Calculating LCR Source Delay Time

• LCR Source Delay Mode $=$ Automatic

◦ In Automatic mode, the source delay is 20 cycles of the AC stimulus frequencywith a minimum source delay of 1 ms.

◦ LCR Source Delay $=$ Maximum( 20 × 1 , 1 ms)

• LCR Source Delay Mode $=$ Manual

◦ LCR Source Delay time is as specified for the Source Delay property.


Note Using a source delay smaller than the default value may not allowthe output to sufficiently settle, resulting in measurement inaccuracy.

• Setpoint changes that result in a range change add an additional $6 0 0 \mu \mathsf { s }$ of source

delay in either mode.

# Calcula Calculating Total LCR Measurement Time ement Time

• Total LCR Measurement Time $= N \times$ (CoercedMeasurementTime + 10 μs)

◦ ◦ N—Measurement count

◦ CoercedMeasurementTime—

▪ The measurement time coerces to a full sinewave cycle boundaryregardless of mode.

$\lceil x \rceil =$ Ceiling function

⌈LCR Measurement Time × f⌉CoercedMeasurementTime $=$f

Where LCR Measurement Time $=$

Short (1 ms)/Medium (10 ms))/Long (100 ms)/Custom

![](images/73300e5504a89e105deb78d8b77d4a0d20d5df90b1d23f1a45e19ddb6d123f58.jpg)


Note LCR Custom Measurement Time $= 0$ is a special case thatgives 1 cycle for any frequency.

# LCR Measurements

• Z—Impedance

• Y—Admittance

• Ls—Inductance using series-equivalent circuit model

• Cs—Capacitance using series-equivalent circuit model

• Rs—Resistance using series-equivalent circuit model

• Lp—Inductance using parallel-equivalent circuit model

• Cp—Capacitance using parallel-equivalent circuit model

• Rp—Resistance using parallel-equivalent circuit model

• D—Dissipation factor

• Q—Quality factor

• V DC—DC voltage measurement

• I DC—DC current measurement

• AC voltage—AC voltage magnitude and phase angle

• AC current—AC current magnitude and phase angle

# LCR AC Stimulus

<table><tr><td colspan="3">Voltage stimulus</td></tr><tr><td colspan="2">Maximum</td><td>7.07 V RMS</td></tr><tr><td colspan="2">Minimum</td><td>7.07 mV RMS</td></tr><tr><td colspan="2">Resolution</td><td>&lt;1 μV RMS</td></tr><tr><td colspan="2">Maximum current</td><td>70.7 mA RMS</td></tr><tr><td colspan="3">Accuracy (ALC on)</td></tr><tr><td></td><td>≤10 kHz</td><td>±0.4%</td></tr><tr><td></td><td>&gt;10 kHz</td><td>±4%</td></tr></table>

<table><tr><td colspan="3">Current stimulus</td></tr><tr><td colspan="2">Maximum</td><td>70.7 mA RMS</td></tr><tr><td colspan="2">Minimum</td><td>707 nA RMS</td></tr><tr><td colspan="2">Resolution</td><td>&lt;100 pA RMS</td></tr><tr><td colspan="2">Maximum voltage</td><td>7.07 V RMS</td></tr><tr><td colspan="3">Accuracy (ALC on)</td></tr><tr><td></td><td>≤10 kHz</td><td>±0.5%</td></tr><tr><td></td><td>&gt;10 kHz</td><td>±6%</td></tr></table>

# LCR DC Bias

<table><tr><td colspan="2">Voltage DC bias - PXIe-4190 (2 MHz)</td></tr><tr><td>Maximum</td><td>±40 V, including peak AC stimulus</td></tr><tr><td>Resolution</td><td>&lt;10 μV</td></tr><tr><td>Accuracy</td><td>0.02% + 5 mV</td></tr><tr><td colspan="2">Voltage DC bias - PXIe-4190 (500 kHz)</td></tr><tr><td>Maximum</td><td>±10 V, including peak AC stimulus</td></tr><tr><td>Resolution</td><td>&lt;10 μV</td></tr><tr><td>Accuracy</td><td>0.02% + 5 mV</td></tr><tr><td colspan="2">Current DC bias</td></tr><tr><td>Maximum</td><td>±100 mA, including peak AC stimulus</td></tr><tr><td>Resolution</td><td>&lt;10 nA</td></tr><tr><td>Accuracy</td><td>0.04% + 10 μA</td></tr></table>

# LCR Frequency

<table><tr><td>Accuracy</td><td>Equal to PXIe_CLK100 accuracy, nominal</td></tr><tr><td>Frequency resolution</td><td>1 mHz</td></tr></table>

# LCR Measurement Accuracy

This topic shows the illustrated LCR measurement accuracy for capacitive DUTs.

The following figure shows capacitor impedance magnitude versus test frequency tohelp quickly identify the appropriate impedance range for your measurements.Additionally, several important DUT test points across frequency are highlighted, withthe corresponding Absolute Measurement Accuracy and AC Stimulus range shown inTable 9. Specifications for Representative DUT Test Points.

Complete absolute accuracy specifications are described beginning in Table 11.Absolute Impedance Magnitude Accuracy, 708 mV RMS to 7.07 V RMS AC StimulusVoltage.


Figure 6. Capacitor Impedance versus Frequency, with Representative Test Points Identified


![](images/f31f501e5bf6c6ee84aa8f4c17563f083b71564dc96aa6c4455dacaf39ea9a47.jpg)



Table 9. Specifications for Representative DUT Test Points


<table><tr><td rowspan="2">Test Point</td><td rowspan="2">Capacitor Value</td><td rowspan="2">AC Stimulus Frequency</td><td rowspan="2">AC Stimulus Level</td><td rowspan="2">ZC at AC Stimulus Frequency</td><td colspan="2">Measurement Accuracy</td></tr><tr><td>Magnitude (Capacitance)</td><td>Phase (Dissipation Factor)</td></tr><tr><td>1</td><td>1 pF</td><td>10 kHz</td><td>708 mV RMS to 7.07 V RMS</td><td>15.9 MΩ</td><td>0.15% (1.5 fF)</td><td>0.08° (0.0014)</td></tr><tr><td>2</td><td>1 pF</td><td>100 kHz</td><td>708 mV RMS to 7.07 V RMS</td><td>1.59 MΩ</td><td>0.30% (3 fF)</td><td>0.19° (0.0033)</td></tr><tr><td>3</td><td>1 pF</td><td>2 MHz</td><td>708 mV RMS</td><td>79.6 kΩ</td><td>0.60% (6 fF)</td><td>0.26°</td></tr><tr><td></td><td></td><td></td><td>to 5 V RMS</td><td></td><td></td><td>(0.0045)</td></tr><tr><td>4</td><td>100 pF</td><td>1 kHz</td><td>708 mV RMS to 7.07 V RMS</td><td>1.59 MΩ</td><td>0.06% (60 fF)</td><td>0.03° (0.0005)</td></tr><tr><td>5</td><td>1 nF</td><td>2 MHz</td><td>150 mV RMS to 707 mV RMS</td><td>79.6 Ω</td><td>0.50% (50 pF)</td><td>0.18° (0.0031)</td></tr><tr><td>6</td><td>100 nF</td><td>1 kHz</td><td>150 mV RMS to 707 mV RMS</td><td>1.59 kΩ</td><td>0.05% (50 pF)</td><td>0.02° (0.00035)</td></tr><tr><td>7</td><td>1 μF</td><td>10 kHz</td><td>150 mV RMS to 707 mV RMS</td><td>15.9 Ω</td><td>0.08% (800 pF)</td><td>0.22° (0.0038)</td></tr><tr><td>8</td><td>100 μF</td><td>120 Hz</td><td>50 mV RMS to 150 mV RMS</td><td>13.3 Ω</td><td>0.08% (80 nF)</td><td>0.04° (0.0007)</td></tr></table>



Note Equations to solve for capacitor impedance, inductor impedance, anddissipation factor are shown in Example 1.


Table 10. Calculated Accuracy for Capacitive DUTs (Cp, Cs) for Common MLCC AC StimulusFrequencies from Absolute Impedance Magnitude Accuracy and Absolute Impedance Phase AccuracyTables


<table><tr><td>Capacitor Value</td><td>AC Stimulus Voltage</td><td>AC Stimulus Frequency</td><td>Capacitance Magnitude Accuracy</td><td>Phase Accuracy</td><td>Df Accuracy</td></tr><tr><td>13.3 pF &lt; C ≤ 132.6 pF</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.15%</td><td>±0.08°</td><td>±0.001396</td></tr><tr><td>132.6 pF &lt; C ≤ 1.3 nF</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.06%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td>1.3 nF &lt; C ≤</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.06%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>13.3 nF</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>13.3 nF &lt; C ≤ 132.6 nF</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.05%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>132.6 nF &lt; C ≤ 1.3 μF</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.06%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>1.3 μF &lt; C ≤ 93.8 μF</td><td>1.0 V RMS</td><td>120 Hz</td><td>±0.08%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td>93.8 μF &lt; C ≤ 132.6 μF</td><td>0.5 V RMS</td><td>120 Hz</td><td>±0.08%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td colspan="6"></td></tr><tr><td>1.6 pF &lt; C ≤ 15.9 pF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.15%</td><td>±0.08°</td><td>±0.001396</td></tr><tr><td>15.9 pF &lt; C ≤ 159.2 pF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.06%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td>159.2 pF &lt; C ≤ 1.6 nF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.06%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>1.6 nF &lt; C ≤ 15.9 nF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.05%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>15.9 nF &lt; C ≤ 159.2 nF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.06%</td><td>±0.02°</td><td>±0.000349</td></tr><tr><td>159.2 nF &lt; C ≤ 11.3 μF</td><td>1.0 V RMS</td><td>1 kHz</td><td>±0.08%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td>11.3 μF &lt; C ≤ 15.9 μF</td><td>0.5 V RMS</td><td>1 kHz</td><td>±0.08%</td><td>±0.03°</td><td>±0.000524</td></tr><tr><td colspan="6"></td></tr><tr><td>624 fF &lt; C ≤ 1.6 pF</td><td>1.0 V RMS</td><td>1 MHz</td><td>±0.30%</td><td>±0.16°</td><td>±0.002793</td></tr><tr><td>1.6 pF &lt; C ≤ 15.9 pF</td><td>1.0 V RMS</td><td>1 MHz</td><td>±0.30%</td><td>±0.13°</td><td>±0.002269</td></tr><tr><td>15.9 pF &lt; C ≤ 159.2 pF</td><td>1.0 V RMS</td><td>1 MHz</td><td>±0.20%</td><td>±0.12°</td><td>±0.002094</td></tr><tr><td>159.2 pF &lt; C ≤ 530.5 pF</td><td>1.0 V RMS</td><td>1 MHz</td><td>±0.20%</td><td>±0.12°</td><td>±0.002094</td></tr><tr><td>530.5 pF &lt; C ≤ 11.3 nF</td><td>1.0 V RMS</td><td>1 MHz</td><td>±0.20%</td><td>±0.11°</td><td>±0.001920</td></tr><tr><td>11.3 nF &lt; C ≤ 15.9 nF</td><td>0.5 V RMS</td><td>1 MHz</td><td>±0.20%</td><td>±0.13°</td><td>±0.002269</td></tr></table>

# LCR Magnitude and Phase Accuracy


Table 11. Absolute Impedance Magnitude Accuracy, 708 mV RMS to 7.07 V RMS AC Stimulus Voltage


<table><tr><td rowspan="2">Impedance Range</td><td colspan="7">AC Stimulus Frequency</td></tr><tr><td>40 Hz to 100 Hz</td><td>100 Hz to 1 kHz</td><td>1 kHz to 10 kHz</td><td>10 kHz to 200 kHz</td><td>200 kHz to 500 kHz</td><td>500 kHz to 1 MHz*</td><td>1 MHz to 2 MHz*</td></tr><tr><td>100 MΩ to 1 GΩ</td><td>1.00%, typical</td><td>1.00%</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>0.15%, typical</td><td>0.15%</td><td>0.15%</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>1 MΩ to 10 MΩ</td><td>0.06%, typical</td><td>0.06%</td><td>0.15%</td><td>0.30%</td><td>—</td><td>—</td><td>—</td></tr><tr><td>100 kΩ to 1 MΩ</td><td>0.05%</td><td>0.06%</td><td>0.08%</td><td>0.30%</td><td>0.30%†</td><td>0.30%‡</td><td>0.60%§</td></tr><tr><td>10 kΩ to 100 kΩ</td><td>0.05%</td><td>0.05%</td><td>0.08%</td><td>0.30%</td><td>0.30%</td><td>0.30%</td><td>0.60%</td></tr><tr><td>1 kΩ to 10 kΩ</td><td>0.05%</td><td>0.06%</td><td>0.08%</td><td>0.20%</td><td>0.20%</td><td>0.20%</td><td>0.50%</td></tr><tr><td>300 Ω to 1 kΩ</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.15%</td><td>0.15%</td><td>0.20%</td><td>0.50%</td></tr><tr><td>10 Ω to 300 Ω</td><td>0.08%</td><td>0.08%</td><td>0.20%</td><td>0.20%</td><td>0.20%</td><td>0.20%</td><td>0.50%</td></tr><tr><td colspan="8">* PXIe-4190 (2 MHz) only† Up to 640 kΩ impedance range.‡ Up to 255 kΩ impedance range.§ Up to 130 kΩ impedance range. Note: Impedances &lt;10 Ω require a reduced AC stimulus. Refer to the following table for more information.Note: When on boundary, use lower adjacent value.Note: Add the following derating factor to LCR magnitude when AC stimulus level is &gt;5 V RMS and &gt;1 MHz:Additional magnitude error (%) = (f/1 MHz)2 × (Vstim - 5 V)2 × 0.025%</td></tr></table>


Table 12. Absolute Impedance Magnitude Accuracy, 150 mV RMS to 707 mV RMS AC Stimulus Voltage


<table><tr><td rowspan="2">Impedance Range</td><td colspan="7">AC Stimulus Frequency</td></tr><tr><td>40 Hz to 100 Hz</td><td>100 Hz to 1 kHz</td><td>1 kHz to 10 kHz</td><td>10 kHz to 200 kHz</td><td>200 kHz to 500 kHz</td><td>500 kHz to 1 MHz*</td><td>1 MHz to 2 MHz*</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>0.20%, typical</td><td>0.40%</td><td>1.10%</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>1 MΩ to 10 MΩ</td><td>0.06%, typical</td><td>0.06%</td><td>0.20%</td><td>0.90%</td><td>-</td><td>-</td><td>-</td></tr><tr><td>100 kΩ to 1 MΩ</td><td>0.05%</td><td>0.06%</td><td>0.08%</td><td>0.90%</td><td>0.60%†</td><td>0.60%‡</td><td>0.60%§</td></tr><tr><td>10 kΩ to 100 kΩ</td><td>0.05%</td><td>0.05%</td><td>0.08%</td><td>0.30%</td><td>0.30%</td><td>0.30%</td><td>0.50%</td></tr><tr><td>1 kΩ to 10 kΩ</td><td>0.05%</td><td>0.05%</td><td>0.08%</td><td>0.20%</td><td>0.20%</td><td>0.20%</td><td>0.50%</td></tr><tr><td>300 Ω to 1 kΩ</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.15%</td><td>0.15%</td><td>0.20%</td><td>0.50%</td></tr><tr><td>10 Ω to 300 Ω</td><td>0.08%</td><td>0.08%</td><td>0.08%</td><td>0.20%</td><td>0.20%</td><td>0.20%</td><td>0.50%</td></tr><tr><td>&lt;10 Ω**</td><td>0.08% + 1 mΩ</td><td>0.08% + 1 mΩ</td><td>0.08% + 1 mΩ</td><td>0.90% + 1 mΩ</td><td>0.90% + 1 mΩ</td><td>1.20% + 1 mΩ††</td><td>2.00% + 2 mΩ††</td></tr><tr><td colspan="8">* PXIe-4190 (2 MHz) only
† Up to 640 kΩ impedance range.
‡ Up to 255 kΩ impedance range.
§ Up to 130 kΩ impedance range.
** Typical, offset relative to short compensation.
†† Refer to AC Stimulus Current Short Offset Multiplier table for offset multiplier.
Note: When on boundary, use lower adjacent value.</td></tr></table>


Table 13. AC Stimulus Current Short Offset Multiplier


<table><tr><td>AC Stimulus Current</td><td>Short Offset Multiplier</td></tr><tr><td>&lt;7.07 mA</td><td>5</td></tr><tr><td>7.08 mA to 20 mA</td><td>1</td></tr><tr><td>&gt;20 mA</td><td>2</td></tr></table>


Table 14. Absolute Impedance Magnitude Accuracy Multiplier for AC Stimuli Below 150 mV RMS


<table><tr><td rowspan="2">Impedance Range</td><td colspan="2">AC Stimulus Voltage</td></tr><tr><td>50 mV RMS to 150 mV RMS</td><td>7.08 mV RMS to 50 mV RMS, typical</td></tr><tr><td>&lt;10 Ω</td><td>1</td><td>1</td></tr><tr><td>10 Ω to 300 Ω</td><td>2</td><td>5</td></tr><tr><td>300 Ω to 10 MΩ</td><td>2</td><td>11</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>3</td><td>-</td></tr><tr><td colspan="3">Note: Absolute accuracy is the Absolute Impedance Magnitude Accuracy, 150 mV RMS to 707 mV RMS AC Stimulus Voltage table value times the respective multiplier.</td></tr></table>


Table 15. Absolute Impedance Phase Accuracy, 708 mV RMS to 7.07 V RMS AC Stimulus Voltage


<table><tr><td rowspan="2">Impedance Range</td><td colspan="7">AC Stimulus Frequency</td></tr><tr><td>40 Hz to 100 Hz</td><td>100 Hz to 1 kHz</td><td>1 kHz to 10 kHz</td><td>&gt;10 kHz to 200 kHz</td><td>200 kHz to 500 kHz</td><td>500 kHz to 1 MHz*</td><td>1 MHz to 2 MHz*</td></tr><tr><td>100 MΩ to 1 GΩ</td><td>0.55°, typical</td><td>0.55°</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>0.19°, typical</td><td>0.08°</td><td>0.25°</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>1 MΩ to 10 MΩ</td><td>0.02°, typical</td><td>0.03°</td><td>0.21°</td><td>0.19°</td><td>-</td><td>-</td><td>-</td></tr><tr><td>100 kΩ to 1 MΩ</td><td>0.01°</td><td>0.02°</td><td>0.19°</td><td>0.19°</td><td>0.14°†</td><td>0.16°‡</td><td>0.26°§</td></tr><tr><td>10 kΩ to 100 kΩ</td><td>0.01°</td><td>0.02°</td><td>0.10°</td><td>0.11°</td><td>0.12°</td><td>0.13°</td><td>0.26°</td></tr><tr><td>1 kΩ to 10 kΩ</td><td>0.01°</td><td>0.02°</td><td>0.09°</td><td>0.10°</td><td>0.10°</td><td>0.12°</td><td>0.31°</td></tr><tr><td>300 Ω to 1 kΩ</td><td>0.01°</td><td>0.03°</td><td>0.12°</td><td>0.08°</td><td>0.13°</td><td>0.12°</td><td>0.34°</td></tr><tr><td>10 Ω to 300 Ω</td><td>0.01°</td><td>0.03°</td><td>0.13°</td><td>0.08°</td><td>0.09°</td><td>0.11°</td><td>0.15°</td></tr><tr><td colspan="8">* PXIe-4190 (2 MHz) only† Up to 640 kΩ impedance range.‡ Up to 255 kΩ impedance range.§ Up to 130 kΩ impedance range.Note: Impedances &lt;10 Ω require a reduced AC stimulus. Refer to the following table for more information.Note: When on boundary, use lower adjacent value.</td></tr></table>


Table 16. Absolute Impedance Phase Accuracy, 150 mV RMS to 707 mV RMS AC Stimulus Voltage


<table><tr><td rowspan="2">Impedance Range</td><td colspan="7">AC Stimulus Frequency</td></tr><tr><td>40 Hz to 100 Hz</td><td>100 Hz to 1 kHz</td><td>1 kHz to 10 kHz</td><td>&gt;10 kHz to 200 kHz</td><td>200 kHz to 500 kHz</td><td>500 kHz to 1 MHz*</td><td>1 MHz to 2 MHz*</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>0.14°, typical</td><td>0.30°</td><td>0.50°</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>1 MΩ to 10 MΩ</td><td>0.03°, typical</td><td>0.03°</td><td>0.14°</td><td>0.45°</td><td>—</td><td>—</td><td>—</td></tr><tr><td>100 kΩ to 1 MΩ</td><td>0.02°</td><td>0.03°</td><td>0.14°</td><td>0.45°</td><td>0.22°†</td><td>0.22°‡</td><td>0.34°§</td></tr><tr><td>10 kΩ to 100 kΩ</td><td>0.01°</td><td>0.02°</td><td>0.07°</td><td>0.15°</td><td>0.14°</td><td>0.14°</td><td>0.34°</td></tr><tr><td>1 kΩ to 10 kΩ</td><td>0.01°</td><td>0.02°</td><td>0.07°</td><td>0.15°</td><td>0.09°</td><td>0.11°</td><td>0.20°</td></tr><tr><td>300 Ω to 1 kΩ</td><td>0.01°</td><td>0.02°</td><td>0.07°</td><td>0.08°</td><td>0.09°</td><td>0.12°</td><td>0.34°</td></tr><tr><td>10 Ω to 300 Ω</td><td>0.01°</td><td>0.04°</td><td>0.22°</td><td>0.08°</td><td>0.10°</td><td>0.13°</td><td>0.18°</td></tr><tr><td>&lt;10 Ω, typical</td><td>0.01°</td><td>0.04°</td><td>0.08°</td><td>0.03°</td><td>0.07°</td><td>0.15°</td><td>0.20°</td></tr><tr><td colspan="8">* PXIe-4190 (2 MHz) only† Up to 640 kΩ impedance range.‡ Up to 255 kΩ impedance range.§ Up to 130 kΩ impedance range.Note: When on boundary, use lower adjacent value.</td></tr></table>


Table 17. Absolute Impedance Phase Accuracy Multiplier for AC Stimuli Below 150 mV RMS


<table><tr><td rowspan="2">Impedance Range</td><td colspan="2">AC Stimulus Voltage</td></tr><tr><td>50 mV RMS to 150 mV RMS</td><td>7.08 mV RMS to 50 mV RMS, typical</td></tr><tr><td>&lt;10 Ω</td><td>1</td><td>4</td></tr><tr><td>10 Ω to 300 Ω</td><td>2</td><td>20</td></tr><tr><td>300 Ω to 1 kΩ</td><td>2</td><td>70</td></tr><tr><td>1 kΩ to 10 kΩ</td><td>2</td><td>25</td></tr><tr><td>&gt;10 kΩ to 100 kΩ</td><td>2</td><td>25</td></tr><tr><td>100 kΩ to 1 MΩ</td><td>2</td><td>10</td></tr><tr><td>1 MΩ to 10 MΩ</td><td>2</td><td>8</td></tr><tr><td>10 MΩ to 100 MΩ</td><td>3</td><td>8</td></tr><tr><td colspan="3">Note: Absolute accuracy is the Absolute Impedance Phase Accuracy, 150 mV RMS to 707 mV RMS AC Stimulus Voltage table value times the respective multiplier.</td></tr></table>

# LCR Noise


Figure 7. Impedance Magnitude Measurement Noise versus Measurement Time, 1 kΩ, Nominal


![](images/441824635fbe6543ab05a55e867ce75bb0847a6901c938fa1f8fced478c98930.jpg)



Figure 8. Impedance Phase Measurement Noise versus Measurement Time, 1 kΩ, Nominal


![](images/f395a655bf8f1c1849d79b97aeac00333a7bd0399d12b9281a0ff5bf53f4fc67.jpg)



Table 18. Specification Derating for Short and Medium Measurement Time, Typical


Use the following table to multiply the respective magnitude and phase accuracy specification valueby the derating factor for the applicable measurement time.

<table><tr><td>Measurement Time</td><td>Derating Factor</td></tr><tr><td>Medium</td><td>Maximum|1, log||z|/VacStimulus × 106)</td></tr><tr><td>Short</td><td>Maximum|1.5, log||z|/VacStimulus × 5 × 104)</td></tr><tr><td colspan="2">Note: Measurement time derating is a function of impedance magnitude and AC stimulus voltage level, and is independent of frequency. Specifications are determined by comparing differences in the standard deviation for different measurement times.</td></tr></table>


Figure 9. Capacitance versus Frequency, 1 pF, 1 V RMS AC Stimulus, Long Measurement Time,Measured Data for 20 Modules


![](images/dee6088e5854c2bd52ddafe305f90252f1f31f1c3dac3d349b40f2cc1bc1a619.jpg)



Figure 10. Dissipation Factor versus Frequency, 1 pF, 1 V RMS AC Stimulus, Long Measurement Time,



Measured Data for 20 Modules


![](images/6e1a60d9d87e9d398cbe99b9ae76d0b9a02a84d0f64d0258db2dac0a1281db17.jpg)



Figure 11. Capacitance versus Frequency, 100 pF, 1 V RMS AC Stimulus, Long Measurement Time,Measured Data for 20 Modules


![](images/cf43b9e2e4b414493411a46ad0704fdd739ad0332172fd2ac3fd5f620259331b.jpg)



Figure 12. Dissipation Factor versus Frequency, 100 pF, 1 V RMS AC Stimulus, Long Measurement



Time, Measured Data for 20 Modules


![](images/5c749556f4c55b51a0cf8c03276e03c3ea0fc0e610d4325bad4088d0ac158d7f.jpg)


# LCR Accuracy Derating with DC Bias

Above 500 kHz with DC Bias enabled, add the additional error term to the statedmagnitude accuracy specification:

Additional magnitude error $( \% ) \ = \frac { f } { 5 0 0 \ k \mathsf { H } z } \times \left| V _ { \mathsf { D C B i a s } } \ \right| \ \times 0 . 0 0 1 5 \% , \mathrm { t y p i c a l }$

Above 500 kHz with DC Bias enabled, add the additional error term to the stated phaseaccuracy specification:

Additional phase error $\left( ^ { \circ } \right) \ = \frac { f } { 5 0 0 \mathsf { k H z } } \times \left| V _ { \mathsf { D C B i a s } } \ \right| \ \times 0 . 0 0 0 5 ^ { \circ } , \mathrm { t y p }$

# LCR DC Bias Se CR DC Bias Settling Time f tling Time for Large Capacitors

Set DC Bias ALC to Off when measuring capacitors over 1 uF to minimize settling time.


Figure 13. DC Bias Settling Time (40 V Step Settled to 10 mV)


![](images/d83bda38c6799a5a0c9e9b378e07ec37f6f6b80fd66471dea3dbaea442e783b1.jpg)



Table 19. DC Bias Settling Time Required in Addition to LCR Source Delay for Large Capacitors


<table><tr><td>Bias</td><td>Settling Time</td></tr><tr><td>AC Stimulus Voltage / Impedance Range ≤ 7.07 mA</td><td>Add 3 ms per μF of DUT capacitance</td></tr><tr><td>AC Stimulus Voltage / Impedance Range &gt; 7.07 mA</td><td>Add 600 μs per μF of DUT capacitance</td></tr><tr><td colspan="2">Note: When applying a bias voltage to capacitors over 1 mF, the bias voltage steps should be no larger than 40 V x 1 mF/C to avoid tripping overcurrent protection.
Note: For AC Stimulus Voltage / Impedance Range ≤7.07mA, limit DC bias steps to ≤5 V each, up to 40 V total.</td></tr></table>

# LCR Cable Accuracy Derating


Table 20. Cable Accuracy Derating


<table><tr><td rowspan="2">Cable</td><td rowspan="2">Description</td><td colspan="4">NI Part Number</td></tr><tr><td>0.5 m</td><td>1 m</td><td>2 m*</td><td>4 m*</td></tr><tr><td>SHDB13W6-4BNCM-LL</td><td>DSUB to Male BNC</td><td>—</td><td>788280-01</td><td>788280-02</td><td>788280-04</td></tr><tr><td>SHDB13W6-4BNCF-LL</td><td>DSUB to</td><td>789536-0R5</td><td>789536-01</td><td>789536-02</td><td>—</td></tr><tr><td></td><td>Female BNC</td><td></td><td></td><td></td><td></td></tr><tr><td>SHDB13W6-DB13W6-LL</td><td>DSUB to DSUB</td><td>—</td><td>788279-01</td><td>788279-02</td><td>788279-04</td></tr><tr><td>SHDB13W6-4TriaxM-LL</td><td>DSUB to Male Triaxial</td><td>—</td><td>788281-01</td><td>788281-02</td><td>788281-04</td></tr><tr><td colspan="6">* LCR specifications are typical</td></tr></table>

For cable lengths ${ > } 1 \mathsf { m }$ , LCR measurement magnitude specifications are typical withthe following additional derating. Add the following term to the absolute accuracy,where

• L—is the cable length in meters

Additional magnitude error $( \% ) = \frac { \ f \times \ L } { 8 \times 1 0 ^ { 6 } }$8 × 10 6

For cable lengths ${ > } 1 \mathsf { m }$ , LCR measurement phase specifications are typical with thefollowing additional derating. Refer to the following table and add the term thatcorresponds to your measurement frequency and AC stimulus amplitude to theabsolute accuracy, where

• L—is the cable length in meters

• |Z|—is impedance magnitude


Table 21. Additional Phase Error (°)


<table><tr><td></td><td>≤707 mV RMS</td><td>&gt;707 mV RMS</td></tr><tr><td>≤10 kHz</td><td>L×|Z|/5×107</td><td>L×|Z|/5×108</td></tr><tr><td>&gt;10 kHz</td><td>L×|Z|/1×108</td><td>L×|Z|/1×109</td></tr></table>

# Determining LCR Measurement Impedance Range

The impedance range can be calculated and programmed in several ways. Thefollowing methods allow you to set the impedance range directly.

# Calculating Impedance Range Manually

Use the following formulas to determine the expected impedance based on the load.

The impedance of an ideal capacitor is

$$
\left| Z _ {C} \right| = \frac {1}{2 \pi f C} = \frac {0 . 1 5 9}{f C}
$$

where

• ZC—Capacitor impedance (Ω)

• f—AC stimulus frequency (Hz)

• C—Nominal capacitance value (F)

The impedance of an ideal inductor is

$$
\left| Z _ {L} \right| = 2 \pi f L = 6. 2 8 3 \times f \times L
$$

• ZL—Inductor impedance (Ω)

• f—AC stimulus frequency (Hz)

• L—Nominal inductance value (H)

# Setting LCR Impedanc CR Impedance Range Source Programmatically

By setting LCR Impedance Range Source to LCR Load Configuration, the range can bedetermined automatically based on the AC stimulus frequency, and the load settingsLCR Load Resistance, LCR Load Inductance, and LCR Load Capacitance.


Note The PXIe-4190 LCR impedance ranges do not directly correspond to theunderlying hardware ranges. When a measurement is configured, NI-DCPower will determine the best hardware range based on the requestedimpedance range, frequency, AC stimulus level, and bias settings. Todetermine the active hardware ranges for the configured measurement—orto set them manually—NI-DCPower provides these settings:

• LCR Voltage Range

• LCR Current Range

• LCR DC Bias Voltage Range

• LCR DC Bias Current Range

The LCR Voltage Range and LCR Current Range are expressed as RMS valuesbut are equivalent to the corresponding SMU mode ranges when convertedto peak value.

# Translating LCR Specifications to Other Impedance Parameters

Accuracy for additional impedance parameters can be derived from the absoluteimpedance magnitude and phase specifications. For some calculations, the actualDUT impedance must also be known—in these cases, the measured value can be usedas an approximation with typically negligible impact on the result.

• ∆xSpec—Specified accuracy for a parameter x (for example, Δ|Z|Spec is themagnitude accuracy specification)

• xDUT—The actual value of parameter x for a DUT

• |Z|—Impedance magnitude. Δ|Z|Spec corresponds to the numbers listed in themagnitude accuracy tables (in percent).

• θ—Impedance phase angle. ΔθSpec corresponds to the numbers listed in the phaseaccuracy tables (in degrees).

• δ—Phase angle between the impedance vector and the reactive axis.

$$
\Delta \delta_ {\text {S p e c}} = \Delta \theta_ {\text {S p e c}} ^ {\left(^ {\circ}\right)}
$$

• D—Dissipation factor.

$$
D = \tan (\delta) = \frac {R}{| x |}
$$

$$
\Delta D _ {\text {S p e c}} = \pm \tan (\Delta \theta_ {\text {S p e c}})
$$

$$
\left(\text {w h e n} D _ {\text {D U T}} <   0. 1\right).
$$

• Q—Quality factor,

$$
Q = \frac {1}{D}
$$

To determine the specified range of possible Q values, calculate

$$
\frac {1}{D _ {\mathrm {D U T}} \pm \Delta D _ {\mathrm {S p e c}}}
$$

(when DDUT < 0.1).

• C—Capacitance, series (CS) or parallel (CP) equivalent model.

When DDUT is sufficiently small $( < 0 . 1 ) , \Delta \mathsf { C } _ { { \mathsf { S p e c } } } \cong \Delta | Z | _ { { \mathsf { S p e c } } } ( ^ { \circ } \circ ) .$

For a general solution, determine accuracy using the AC stimulus frequency andreactance specification:

$$
\Delta C _ {\text {S p e c}} = \pm \frac {1}{2 \pi f \times \Delta X _ {\text {S p e c}}} (F)
$$

• L—Inductance, series (LS) or parallel (LP) equivalent model.

When DDUT is sufficiently small $( < 0 . 1 ) , \Delta \mathsf { L } _ { \mathsf { S p e c } } \cong \Delta | Z | _ { \mathsf { S p e c } } ( \% ) .$

For a general solution, determine accuracy using the AC stimulus frequency andreactance specification:

$$
\Delta L _ {\text {S p e c}} = \pm (2 \pi f \times \Delta X _ {\text {S p e c}}) (H)
$$

• R—Resistance, the real component of complex impedance.

For typical non-reactive resistance measurements (DDUT > 10), ΔRSpec ≅$\Delta | Z | _ { \mathsf { S p e c } } \left( \% \right)$ .

To determine accuracy for an arbitrary impedance, first find the maximum andminimum values, $\mathsf { R } _ { \mathsf { M a x } }$ and ${ \mathsf { R m i n } }$ , from four calculations:

$$
\left(\left| Z \right| _ {\text {D U T}} \pm \Delta \left| Z \right| _ {\text {S p e c}}\right) \times \cos \left(\theta_ {\text {D U T}} \pm \Delta \theta_ {\text {S p e c}}\right),
$$

then

$$
\Delta R _ {\text {S p e c}} = \pm \frac {R _ {\text {M a x}} - R _ {\text {M i n}}}{2} (\Omega)
$$

• X—Reactance, the imaginary component of complex impedance.

For typical L/C measurements (DDUT < 0.1), ΔXSpec ≅ Δ|Z|Spec (%).

To determine accuracy for an arbitrary impedance, first find the maximum andminimum values, RMax and ${ \mathsf { R M i n } }$ , from four calculations:

$$
\left(\left| Z \right| _ {\text {D U T}} \pm \Delta \left| Z \right| _ {\text {S p e c}}\right) \times \sin \left(\theta_ {\text {D U T}} \pm \Delta \theta_ {\text {S p e c}}\right),
$$

then

$$
\Delta X _ {\text {S p e c}} = \pm \frac {X _ {\text {M a x}} - X _ {\text {M i n}}}{2} (\Omega)
$$

The following figure shows the relationship between these parameters when anexample vector Z is plotted on the complex impedance plane.


Figure 14. Impedance Specification Representation on a Complex Impedance Plane


![](images/c945f99200ee6e03325fb58ab023b69ba12423d448765de6e5760304a105509f.jpg)



Note When computing tan(PhaseInDegrees) using tan(Radians), note thatDegrees $\times \frac { \pi } { 1 8 0 } =$ Radians

# Example 1: Calcula ample Calculating Specific ting Specifications f tions for CapacitanceMeasurement

For a capacitor measurement under the stated conditions, complete the following

steps to determine and interpret the absolute measurement accuracy.

<table><tr><td>DUT Actual Capacitance (CDUT)</td><td>10 pF</td></tr><tr><td>DUT Actual Dissipation (DDUT)</td><td>0.005</td></tr><tr><td>AC Stimulus Frequency (f)</td><td>1 MHz</td></tr><tr><td>AC Stimulus Voltage (Vstim)</td><td>1 V RMS</td></tr><tr><td>DC Bias Voltage (V DC)</td><td>10 V</td></tr><tr><td>Measurement time</td><td>Short</td></tr><tr><td>Cable length</td><td>1 m</td></tr></table>

1. Calculate ideal capacitor impedance as

$$
Z _ {\mathrm {D U T}} = \frac {1}{2 \pi \mathrm {f C}} = \frac {1}{2 \times \pi \times 1 \mathrm {M H z} \times 1 0 \mathrm {p F}} = 1 5. 9 1 5 \mathrm {k} \Omega
$$

2. Based on the 1 V RMS AC stimulus, the applicable magnitude and phase specs arefound in Table 11. Absolute Impedance Magnitude Accuracy, 708 mV RMS to 7.07 VRMS AC Stimulus Voltage and Table 15. Absolute Impedance Phase Accuracy, 708mV RMS to 7.07 V RMS AC Stimulus Voltage, respectively.

◦ From the calculated impedance, ZDUT, the relevant impedance range is 10 kΩ –$1 0 0 \mathsf { k } \Omega$ .

◦ 1 MHz is on the boundary between the 500 kHz to 1 MHz and 1 MHz to 2 MHzfrequency ranges, so choose the smaller of the adjacent values.

◦ The resulting specifications are $0 . 3 \%$ magnitude accuracy and $0 . 1 3 ^ { \circ }$ phaseaccuracy.

3. Base specifications apply to long measurement time. For short measurement time,apply the derating factor:

$$
\operatorname {M a x} \left(1. 5, \log \left(\frac {| Z |}{V _ {\mathrm {s t i m}} \times 5 \times 1 0 ^ {4}}\right)\right) = \operatorname {M a x} \left(1. 5, \log \left(\frac {1 5 . 9 1 5 \mathrm {k} \Omega}{1 \mathrm {V} \times 5 \times 1 0 ^ {4}}\right)\right) = \operatorname {M a x} (1. 5, 0. 5) = 1. 5
$$

◦ The derated magnitude specification is then $1 . 5 ^ { \star } 0 . 3 \% = 0 . 4 5 \%$

◦ The derated phase specification is then $1 . 5 ^ { \star } 0 . 1 3 ^ { \circ } = 0 . 1 9 5 ^ { \circ }$

4. Because DC bias is enabled and $f { > } 5 0 0 \ k { \sf H z }$ , the additional error terms from LCRAccuracy Derating with DC Bias apply:

◦ The additional magnitude error is calculated as

$$
\frac {f \times V _ {\mathrm {DC}} \times 0.0015 \%}{500 \mathrm {kHz}} = \frac {1 \mathrm {MHz} \times 10 \mathrm {V} \times 0.0015 \%}{500 \mathrm {kHz}} = 0.03 \%
$$

◦ The additional phase error is calculated as

$$
\frac {f \times V _ {\mathrm {D C}} \times 0 . 0 0 5 ^ {\circ}}{5 0 0 \mathrm {k H z}} = \frac {1 \mathrm {M H z} \times 1 0 \mathrm {V} \times 0 . 0 0 0 5 ^ {\circ}}{5 0 0 \mathrm {k H z}} = 0. 0 1 ^ {\circ}
$$

5. From the previous steps, the final accuracy specifications under thesemeasurement conditions:

◦ Magnitude accuracy, $\Delta Z _ { \mathsf { S p e c } } = 0 . 4 5 \% + 0 . 0 3 \% = 0 . 4 8 \%$

◦ Phase accuracy, $\Delta \Theta _ { \mathsf { S p e c } } = 0 . 1 9 5 ^ { \circ } + 0 . 0 1 ^ { \circ } = 0 . 2 0 5 ^ { \circ }$

These specifications can then be used to derive accuracies for other parameters.

• Dissipation factor accuracy, $\Delta \mathsf { D } _ { \mathsf { S p e c } } = \pm \mathsf { t a n } ( \Delta \theta _ { \mathsf { S p e c } } ) = \pm 0 . 0 0 3 6$

◦ Specified range is $\mathsf { D } _ { \mathsf { D U T } } \pm \Delta \mathsf { D } _ { \mathsf { S p e c } } = 0 . 0 0 1 3$ to 0.0087

• Quality factor specified range is

$$
\frac {1}{D _ {\mathrm {D U T}} \pm \Delta D _ {\mathrm {S p e c}}} = 1 1 5 \text {t o} 7 6 9
$$

• Impedance phase has an accuracy of $\Delta \theta _ { \mathsf { S p e c } } = 0 . 2 0 5 ^ { \circ }$ and can be expressed as

◦ Loss angle, $\delta _ { \mathsf { D } \mathsf { U } \mathsf { T } } = \mathsf { a r c t a n } ( \mathsf { D } _ { \mathsf { D } \mathsf { U } \mathsf { T } } ) = \mathsf { a r c t a n } ( 0 . 0 0 5 ) = 0 . 2 8 6 ^ { \circ } \pm 0 . 2 0 5 ^ { \circ }$ $=$

◦ Impedance phase angle, $\theta _ { \mathsf { D U T } } = \ S - 9 0 ^ { \circ } = 0 . 2 8 6 ^ { \circ } - 9 0 ^ { \circ } = - 8 9 . 7 1 4 ^ { \circ } \pm 0 . 2 0 5 ^ { \circ }$

• Resistance accuracy, ΔRSpec, can be calculated by

◦ Finding the maximum and minimum values, RMax and ${ \mathsf { R M i n } }$ , from fourcalculations:

$$
\begin{array}{l} \left(Z _ {\text {D U T}} \pm \Delta Z _ {\text {S p e c}}\right) \times \cos \left(\theta_ {\text {D U T}} \pm \Delta \theta_ {\text {S p e c}}\right) \\ = \left(15.915 \mathrm{k} \Omega \pm 0.48 \%\right) \times \cos \left(-89.714 ^ {\circ} \pm 0.205 ^ {\circ}\right) \\ = \left[ 1 5. 9 9 1 k \Omega \times \cos (- 8 9. 9 1 9 ^ {\circ}), 1 5. 9 9 1 k \Omega \times \cos (- 8 9. 5 0 9 ^ {\circ}), 1 5. 8 3 9 k \Omega \times \cos (- 8 9. 9 1 9 ^ {\circ}), 1 5. 8 3 9 k \Omega \times \cos (- 8 9. 5 0 9 ^ {\circ}) \right] \\ = \left[ 2 2. 6 \Omega , 1 3 7 \Omega , 2 2. 4 \Omega , 1 3 5. 7 \Omega \right] \\ \end{array}
$$

◦ Selecting the maximum and minimum values, $\mathsf { R } _ { \mathsf { M a x } } = 1 3 7 \Omega$ , RMin = 22.4 Ω

◦ ΔRSpec = $\Delta { R _ { \mathrm { { S p e c } } } } = \frac { { R _ { \mathrm { { M a x } } } } - { R _ { \mathrm { { M i n } } } } } { 2 } = \frac { 1 3 7 \Omega - 2 2 . 4 \Omega } { 2 } = \ \pm \ 5 7 . 3 \Omega$ = 137Ω − 22.4Ω = ± 57.3Ω

• Reactance accuracy, ΔXSpec, can be calculated by

◦ Since DDUT is small, O $\Delta \mathsf { X } _ { \mathsf { S p e c } } \cong \Delta | \boldsymbol { Z } | _ { \mathsf { S p e c } }$

◦ Using this simplified approximation, $\Delta \mathsf { X } _ { \mathsf { S p e c } } = 0 . 4 8 \% \star 1 5 . 9 1 5 \mathsf { k } \Omega = \pm 7 6 . 4 \Omega$

◦ For example, to compare the explicitly calculated specification, first find themaximum and minimum values, ${ \tt X } _ { \sf M a x }$ and ${ \mathsf { X } } _ { \mathsf { M i n } }$ , from the four calculations:

$$
\begin{array}{l} \left(Z _ {\text {D U T}} \pm \Delta Z _ {\text {S p e c}}\right) \times \sin \left(\theta_ {\text {D U T}} \pm \Delta \theta_ {\text {S p e c}}\right) \\ = \left(15.915 \mathrm{k} \Omega \pm 0.48 \%\right) \times \sin \left(-89.714 ^ {\circ} \pm 0.205 ^ {\circ}\right) \\ = \left[ 1 5. 9 9 1 k \Omega \times \sin (- 8 9. 9 1 9 ^ {\circ}), 1 5. 9 9 1 k \Omega \times \sin (- 8 9. 5 0 9 ^ {\circ}), 1 5. 8 3 9 k \Omega \times \sin (- 8 9. 9 1 9 ^ {\circ}), 1 5. 8 3 9 k \Omega \times \sin (- 8 9. 5 0 9 ^ {\circ}) \right] \\ = \left[ - 1 5. 9 9 1 k \Omega , - 1 5. 9 9 0 k \Omega , - 1 5. 8 3 9 k \Omega , - 1 5. 8 3 8 k \Omega \right] \\ \end{array}
$$

◦ Selecting the maximum and minimum values, $\mathsf { X } _ { \mathsf { M a x } } = - 1 5 . 8 3 8 \mathsf { k } \Omega , \mathsf { X } _ { \mathsf { M i n } } =$-15.991 kΩ

◦ ΔXSpec = $\Delta X _ { \mathrm { S p e c } } = \frac { X _ { \mathrm { M a x } } - X _ { \mathrm { M i n } } } { 2 } = \frac { - 1 5 . 8 3 8 \mathrm { k } \Omega - - 1 5 . 9 9 1 \mathrm { k } \Omega } { 2 } = \pm 7 6 . 5 \Omega$

# General Specifications

# Isolation

Isolation voltage, any pin to earth ground

40 V DC, Measurement Category I, functional


Note Pins are functionally isolated from chassis ground to prevent groundloops, but do not meet IEC 61010-1 for safety isolation.

Note The PXIe-4190 contains an internal switch controlled by theniDCPower Isolation State property that can connect the GUARD terminal tochassis ground and prevent the module output from floating. Isolationratings only apply when this property/attribute is set to Isolated.


Protection


<table><tr><td colspan="2">Absolute maximum voltage</td></tr><tr><td>Output HI/Output LO/Sense HI/Sense LO to Output HI/Output LO/Sense HI/Sense LO</td><td>±42 V</td></tr><tr><td>Output HI/Sense HI to GUARD/Isolated Shield</td><td>±6 V</td></tr><tr><td>GUARD/Isolated Shield to Chassis GND</td><td>±42 V</td></tr><tr><td colspan="2">Absolute maximum current</td></tr><tr><td>All terminals</td><td>±300 mA</td></tr></table>

<table><tr><td colspan="3">Output channel protection</td></tr><tr><td colspan="2">Output HI to GUARD/Isolated Shield</td><td></td></tr><tr><td></td><td>Overvoltage</td><td>Automatic output disable</td></tr><tr><td colspan="2">Output LO to all terminals</td><td></td></tr><tr><td></td><td>Overcurrent</td><td>Automatic output disable</td></tr><tr><td colspan="2">Sense HI/Sense LO to all terminals</td><td></td></tr><tr><td></td><td>Overcurrent</td><td>Current limiter protects inputs up to absolute maximum voltage specification</td></tr><tr><td colspan="2">Overtemperature</td><td>Automatic output disable</td></tr></table>


Physical Characteristics


<table><tr><td>Dimensions</td><td>3U, one-slot, PXI Express/CompactPCI Express module
2.0 cm x 13.0 cm x 21.6 cm (0.8 in. x 5.1 in. x 8.5 in.)</td></tr><tr><td>Weight</td><td>481 g (17.1 oz)</td></tr><tr><td>Front panel connectors</td><td>Mixed layout DSUB, 13W6 contact arrangement (6 coaxial 50 Ω, 7-signal), female</td></tr></table>

# Triggers

<table><tr><td colspan="3">Input triggers</td></tr><tr><td colspan="2">Types</td><td>Start, Source, Sequence Advance, Measure</td></tr><tr><td colspan="3">Sources (PXI trigger lines 0 to 7)</td></tr><tr><td></td><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td></td><td>Minimum pulse width</td><td>100 ns</td></tr><tr><td colspan="3">Destinations8 (PXI trigger lines 0 to 7)</td></tr><tr><td></td><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td></td><td>Minimum pulse width</td><td>200 ns</td></tr></table>

<table><tr><td colspan="3">Output triggers (events)</td></tr><tr><td colspan="2">Types</td><td>Source Complete, Sequence Iteration Complete, Sequence Engine Done, Measure Complete</td></tr><tr><td colspan="3">Destinations (PXI trigger lines 0 to 7)9</td></tr><tr><td></td><td>Polarity</td><td>Active high (not configurable)</td></tr><tr><td></td><td>Pulse width</td><td>230 ns</td></tr></table>

8. Input triggers can come from any source (PXI trigger or software trigger) and be exported to any PXItrigger line. This allows for easier multi-board synchronization regardless of the trigger source.

9. Pulse widths and logic levels are compliant with PXI Express Hardware Specification Revision1.0 ECN1.

# Calibration Interval

<table><tr><td>Recommended calibration interval</td><td>1 year</td></tr></table>

# Power Requirements

<table><tr><td>+3.3 V</td><td>1.0 A</td></tr><tr><td>+12 V</td><td>2.7 A</td></tr></table>

# Environmental Characteristics

<table><tr><td colspan="2">Temperature</td></tr><tr><td>Operating</td><td>0 °C to 55 °C 10</td></tr><tr><td>Storage</td><td>-40 °C to 71 °C</td></tr></table>

<table><tr><td>Pollution Degree</td><td>2</td></tr><tr><td>Maximum altitude</td><td>2,000 m (800 mbar) (at 25 °C ambient temperature)</td></tr></table>

<table><tr><td colspan="2">Humidity</td></tr><tr><td>Operating</td><td>10% RH to 90% RH, noncondensing 11</td></tr></table>

10. Not all chassis can achieve this ambient temperature range. Refer to PXI chassis specifications todetermine the ambient temperature ranges your chassis can achieve.

11. Accuracy specifications are only warranted for operating environments with temperatures below$3 0 ~ ^ { \circ } \mathsf { C }$ and relative humidity levels below $60 \%$ . When transitioning the product from a storage oroperating environment with relative humidity above $6 0 \%$ , you should allow the product to stabilizein the lower humidity environment for several hours before using it.

<table><tr><td>Storage</td><td>5% RH to 95% RH, noncondensing</td></tr></table>

<table><tr><td colspan="2">Shock and Vibration</td></tr><tr><td>Operating vibration</td><td>5 Hz to 500 Hz, 0.3 g RMS</td></tr><tr><td>Non-operating vibration</td><td>5 Hz to 500 Hz, 2.4 g RMS</td></tr><tr><td>Operating shock</td><td>30 g, half-sine, 11 ms pulse</td></tr></table>