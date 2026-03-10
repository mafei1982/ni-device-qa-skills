# NI-DCPower C API — Functions: Measure

# Measure

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureApertureTime(ViSessionvi, ViConstString channelName, ViReal64 apertureTime,ViInt32 units)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

The supported values depend on the units. Refer to the Aperture Time topic for yourdevice in the NI DC Power Supplies and SMUs Help for more information. Ingeneral, devices support discrete apertureTime values, and if you configureapertureTime to some unsupported value, NI-DCPower coerces it up to the nextsupported value.

Refer to the Measurement Configuration and Timing or DC Noise Rejectiontopic for your device in the NI DC Power Supplies and SMUs Help for more

information about how to configure your measurements.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| apertureTime | [in] | ViReal64 |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_SECONDDS | 1028 (0x404) | Specifies aperture time in seconds. |
| Name | Value | Description |
| NIDCPOWER_VAL_POWER_LINE_CYCLES | 1029(0x405) | Specifies aperture time in power line cycles (PLCs). |
|  |  |  |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureAutoZero(ViSession vi,ViConstString channelName, ViInt32 autoZero)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Refer to the NI PXI-4132 Auto Zero and NI PXI-4132 MeasurementConfiguration and Timing topics in the Nl DC Power Supplies and SMUs Help for more information about how to configure your measurements.

# Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
| channelName | [in] | ViConstString |  |  |  |
| autoZero | [in] | Vilnt32 |  |  |  |
| Name | Direction | Type |  |  |  |
|  |  |  | Name | Value | Description |
|  |  |  | NIDCPOWER_VAL_OFF | 0 (0x0) | Disables auto-zero. |
|  |  |  | NIDCPOWER_VAL_ONCE | 1024 (0x400) | Makes zero conversions following the first measurement after initiating the channel(s). Channels use these zero conversions for the preceding measurement and future measurements until they are reinitiated. |
|  |  |  | NIDCPOWER_VAL_ON | 1 (0x1) | Makes zero conversions for every measurement. |

# niDCPower_Configur ower_ConfigurePowerLineF owerLineFrequency

Specifies the power line frequency for all channels in the session. NI-DCPower usesthis value to select a timebase for setting the niDCPower_ConfigureApertureTimefunction in power line cycles (PLCs).

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePowerLineFrequency(ViSession vi,ViReal64 powerlineFrequency)

# Note

Set powerlineFrequency to the frequency of the AC power line.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Refer to the Measurement Configuration and Timing topic for your device in theNI DC Power Supplies and SMUs Help for more information about how toconfigure your measurements.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_50_HERTZ | 50.0 | Specifies a power line frequency of |
| Name | Value | Description 50 Hz. |
| NIDCPOWER_VAL_60_HERTZ | 60.0 | Specifies a power line frequency of 60 Hz. |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureSense(ViSession vi,ViConstString channelName, ViInt32 sense)

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_LOCAL | 1008 (0x3f0) | Local sensing |
| NIDCPOWER_VAL remot | 1009 (0x3f1) | Remote sensing |

# niDCPower_FetchMultiple

Returns an array of voltage measurements, an array of current measurements, and anarray of compliance measurements that were previously taken and are stored in theNI-DCPower buffer. This function should not be used when the

NIDCPOWER_ATTR_MEASURE_WHEN attribute is set to

NIDCPOWER_VAL_ON_DEMAND. You must first call niDCPower_InitiateWithChannelsbefore calling this function.

# Syntax

ViStatus _VI_FUNC niDCPower_FetchMultiple(ViSession vi,ViConstString channelName, ViReal64 timeout, ViInt32 count,ViReal64 voltageMeasurements[], ViReal64currentMeasurements[], ViBoolean inCompliance[], ViInt32*actualCount)

# Note

When setting the timeout interval with timeout, ensure you take into accountany triggers so that the timeout interval is long enough for your application.

# Note

This function is not supported on all devices. Refer to Supported Functions

by Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| timeout | [in] | ViReal64 | Specifies the maximum time allowed for this function to complete, in seconds. If the function does not complete within this time interval, NI-DCPower returns an error. |
| count | [in] | ViInt32 | Specifies the number of measurements to fetch. |
| voltageMeasurements | [out] | ViReal64[] | Returns an array of voltage measurements. Ensure that sufficient space has been allocated for the returned array. |
| currentMeasurements | [out] | ViReal64[] | Returns an array of current measurements. Ensure that sufficient space has been allocated for the returned array. |
| inCompliance | [out] | ViBoolean[] | Returns an array of Boolean values indicating whether the output was in compliance at the time the measurement was taken. Ensure that sufficient space has been allocated for the returned array. |
| actualCount | [out] | VInt32* | Indicates the number of measured values actually retrieved from the specified channel. |

# Syntax

ViStatus _VI_FUNC niDCPower_FetchMultipleLCR(ViSession vi,ViConstString channelName, ViReal64 timeout, ViInt32 count,NILCRMeasurement measurements[], ViInt32 *actualCount)

# Remarks

To use this function:

• Set NIDCPOWER_ATTR_MEASURE_WHEN toNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE orNIDCPOWER_VAL_ON_MEASURE_TRIGGER; and

• Put the channel(s) in the Running state (call niDCPower_Initiate).

# Note

When setting the timeout interval with timeout, ensure you take into accountany triggers so that the timeout interval is long enough for your application.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| timeout | [in] | ViReal64 |
| count | [in] | Vilnt32 |
|  |  |  |
| Name | Type | Description |
| Vdc | ViReal64 | The measured DC voltage, in volts. |
| Name | Type | Description |
| Idc | ViReal64 | The measured DC current, in amps. |
| stimulusFrequency | ViReal64 | The frequency of the LCR test signal, in Hz. |
| ACVoltage | NIComplexNumber | The measured AC voltage, in volts RMS. |
| ACCurrent | NIComplexNumber | The measured AC current, in amps RMS. |
| Z | NIComplexNumber | The complex impedance. |
| ZMagnitude | ViReal64 | The magnitude of the complex impedance, in ohms. |
| ZPhase | ViReal64 | The |
| Name | Type | Description impedance phase angle, in degrees. |
| Y | NICplexNumber | The complex admittance. |
| YMagnitude | ViReal64 | The magnitude of the complex admittance, in siemens. |
| YPhase | ViReal64 | The admittance phase angle, in degrees. |
| Ls | ViReal64 | The inductance, in henrys, as measured using a series circuit model. |
| Cs | ViReal64 | The capacitance, |
| Name | Type | Description in farads, as measured using a series circuit model. |
| Rs | ViReal64 | The resistance, in ohms, as measured using a series circuit model. |
| Lp | ViReal64 | The inductance, in henrys, as measured using a parallel circuit model. |
| Cp | ViReal64 | The capacitance, in farads, as measured using a parallel circuit model. |
| Rp | ViReal64 | The |
| Name | Type | Description resistance, in ohms, as measured using a parallel circuit model. |
| D | ViReal64 | The dissipation factor of the circuit. The dimensionless dissipation factor is directly proportional to how quickly an oscillating system loses energy. D is the reciprocal of Q, the quality factor. |
| Q | ViReal64 | The quality factor of the circuit. The dimensionless quality factor is inversely |

| Name | Direction | Type |  |  |
| --- | --- | --- | --- | --- |
|  |  |  | Name | Type |
|  |  |  | measurementMode | ViUInt16 |
|  |  |  | dcInCompliance | ViBoolean |
|  |  |  | acInCompliance | ViBoolean |
| Name | Direction | Type |  |  |
| Name | Description |  |  |  |
| unbalanced | Indicates whether the bridge was unbalanced at the time the measurement was taken. |  |  |  |
|  |  |  |  |  |
| Value | Description |  |  |  |
| 1061 (0x425) | The channel(s) are operating as a power supply/SMU. |  |  |  |
| 1062 (0x426) | The channel(s) are operating as an LCR meter. |  |  |  |
|  |  |  |  |  |
| actualCount | [out] | ViiInt32 * |  |  |

# niDCPower_Measure

Returns the measured value of either the voltage or current on the specified channel.Each call to this function blocks other function calls until the hardware returns themeasurement. To measure multiple channels, use the niDCPower_MeasureMultiplefunction.

# Syntax

ViStatus _VI_FUNC niDCPower_Measure(ViSession vi,ViConstString channelName, ViInt32 measurementType,ViReal64 *measurement)

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| Name | Direction | Type |
| channelName | [in] | ViConstString |
|  |  |  |
| Name | Value | Description |
| NIDCPower_VAL_MEASURE_CURRENT | 0 (0x0) | The instrument measures current. |
| NIDCPower_VAL_MEASURE_VOLTAGE | 1 (0x1) | The instrument measures voltage. |
| measurement | [out] | ViReal64 * |

# niDCPower_MeasureMultiple

Returns arrays of the measured voltage and current values on the specified channel(s).Each call to this function blocks other function calls until the measurements arereturned from the device. The order of the measurements returned in the arraycorresponds to the order on the specified channel(s).

# Syntax

ViStatus _VI_FUNC niDCPower_MeasureMultiple(ViSession vi,ViConstString channelName, ViReal64 voltageMeasurements[],ViReal64 currentMeasurements[])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| voltageMeasurements | [out] | ViReal64[] | Returns an array of voltage measurements. The measurements in the array are returned in the same order as the channels specified in channelName. Ensure that sufficient space has been allocated for the returned array. |
| currentMeasurements | [out] | ViReal64[] | Returns an array of current measurements. The measurements in the array are returned in the same order as the channels specified in channelName. Ensure that sufficient space has been allocated for the returned array. |

# Syntax

ViStatus _VI_FUNC niDCPower_MeasureMultipleLCR(ViSessionvi, ViConstString channelName, NILCRMeasurementmeasurements[])

# Remarks

To use this function:

• Set NIDCPOWER_ATTR_INSTRUMENT_MODE to NIDCPOWER_VAL_LCR;

• Set NIDCPOWER_ATTR_MEASURE_WHEN to NIDCPOWER_VAL_ON_DEMAND; and

• Put the channel(s) in the Running state (call niDCPower_InitiateWithChannels).

# Note

This function is not supported on all devices. Refer to Supported Functions

by Device for more information about supported devices.

Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
| channelName | [in] | ViConstString |  |  |  |
|  |  |  |  |  |  |
| Name | Type | Description |  |  |  |
| Vdc | ViReal64 | The measured DC voltage, in volts. |  |  |  |
| Idc | ViReal64 | The measured |  |  |  |
| Name | Type | Description DC current, in amps. |  |  |  |
| stimulusFrequency | ViReal64 | The frequency of the LCR test signal, in Hz. |  |  |  |
| ACVoltage | NIComplexNumber | The measured AC voltage, in volts RMS. |  |  |  |
| ACCurrent | NIComplexNumber | The measured AC current, in amps RMS. |  |  |  |
| Z | NIComplexNumber | The complex impedance. |  |  |  |
| ZMagnitude | ViReal64 | The magnitude of the complex impedance, in ohms. |  |  |  |
| ZPhase | ViReal64 | The impedance |  |  |  |
| Name | Type | Description phase angle, in degrees. |  |  |  |
| Y | NICplexNumber | The complex admittance. |  |  |  |
| YMagnitude | ViReal64 | The magnitude of the complex admittance, in siemens. |  |  |  |
| YPhase | ViReal64 | The admittance phase angle, in degrees. |  |  |  |
| Ls | ViReal64 | The inductance, in henrys, as measured using a series circuit model. |  |  |  |
| Cs | ViReal64 | The capacitance, in farads, as |  |  |  |
| Name | Type | Description measured using a series circuit model. |  |  |  |
| Rs | ViReal64 | The resistance, in ohms, as measured using a series circuit model. |  |  |  |
| Lp | ViReal64 | The inductance, in henrys, as measured using a parallel circuit model. |  |  |  |
| Cp | ViReal64 | The capacitance, in farads, as measured using a parallel circuit model. |  |  |  |
| Rp | ViReal64 | The resistance, in |  |  |  |
| Name | Type | Description ohms, as measured using a parallel circuit model. |  |  |  |
| D | ViReal64 | The dissipation factor of the circuit. The dimensionless dissipation factor is directly proportional to how quickly an oscillating system loses energy. D is the reciprocal of Q, the quality factor. |  |  |  |
| Q | ViReal64 | The quality factor of the circuit. The dimensionless quality factor is inversely proportional |  |  |  |
|  |  |  | Name | Type | Description to the degree of damping in a system. Q is the reciprocal of D, the dissipation factor. |
|  |  |  | measurementMode | ViUInt16 | Returns the measurement mode. |
|  |  |  | dcInCompliance | ViBoolean | Indicates whether the output was in DC compliance at the time the measurement was taken. |
|  |  |  | acInCompliance | ViBoolean | Indicates whether the output was in AC compliance at the time the measurement was taken. |

| Name | Direction | Type |
| --- | --- | --- |
| Name | Description |  |
| unbalanced | Indicates whether the bridge was unbalanced at the time the measurement was taken. |  |
|  |  |  |
| Value | Description |  |
| 1061(0x425) | The channel(s) are operating as a power supply/SMU. |  |
| 1062(0x426) | The channel(s) are operating as an LCR meter. |  |

# Query

# Syntax
