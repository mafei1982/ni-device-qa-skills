# NI-DCPower C API — Functions: Calibration

# Calibration

# Syntax

ViStatus _VI_FUNC niDCPower_ChangeExtCalPassword(ViSessionvi, ViConstString oldPassword, ViConstString newPassword)

# Remarks

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| oldPassword | [in] | ViConstString | Specifies the previous password used to protect the calibration values. |
| newPassword | [in] | ViConstString | Specifies the new password to use to protect the calibration values. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetCalUserDefinedInfo(ViSessionvi, ViString info)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| info | [out] | ViString | Returns the user-defined information stored in the device onboard EEPROM. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_GetCalUserDefinedInfoMaxSize(ViSession vi, ViInt32 *infoSize)
```

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| infoSize | [out] | VInt32 * | Returns the number of characters that can be stored in the device onboard EEPROM. |

# Syntax

```c
ViStatus_VI FUNC  
niDCPower_GetExtCallLastDateTime(ViSession vi, ViInt32 *year, ViInt32 *month, ViInt32 *day, ViInt32 *hour, ViInt32 *minute)
```

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| year | [out] | Vilnt32* | Returns the year the device was last calibrated. |
| month | [out] | Vilnt32* | Returns the month in which the device was last calibrated. |
| day | [out] | Vilnt32* | Returns the day on which the device was last calibrated. |
| hour | [out] | Vilnt32* | Returns the hour (in 24-hour time) in which the device was last calibrated. |
| minute | [out] | Vilnt32* | Returns the minute in which the device was last calibrated. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetExtCalLastTemp(ViSession vi,ViReal64 *temperature)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| temperature | [out] | ViReal64* | Returns the onboard temperature of the device, in degrees Celsius, during the last successful external calibration. |

# Syntax

ViStatus _VI_FUNCniDCPower_GetExtCalRecommendedInterval(ViSession vi,ViInt32 *months)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| months | [out] | Vilnt32 * | Specifies the recommended maximum interval, in months, between external calibrations. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_GetSelfCallLastDateTime(ViSession vi, ViInt32 *year, ViInt32 *month, ViInt32 *day, ViInt32 *hour, ViInt32 *minute)
```

# Remarks

The time returned is 24-hour (military) local time; for example, if you have a sessionusing channels 1 and 2, and a self-calibration was performed on channel 1 at 2:30 PM,and a self-calibration was performed on channel 2 at 3:00 PM on the same day, thisfunction returns 14 for hours and 30 for minutes.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| year | [out] | Vilnt32* | Returns the year the device was last calibrated. |
| month | [out] | Vilnt32* | Returns the month in which the device was last calibrated. |
| day | [out] | Vilnt32* | Returns the day on which the device was last calibrated. |
| hour | [out] | Vilnt32* | Returns the hour (in 24-hour time) in which the device was last calibrated. |
| minute | [out] | Vilnt32* | Returns the minute in which the device was last calibrated. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetSelfCalLastTemp(ViSessionvi, ViReal64 *temperature)

# Remarks

For example, if you have a session using channels 1 and 2, and you perform a self-calibration on channel 1 with a device temperature of 25 degrees Celsius at 2:00, and aself-calibration was performed on channel 2 at 27 degrees Celsius at 3:00 on the sameday, this function returns 25 for the temperature parameter.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| temperature | [out] | ViReal64* | Returns the onboard temperature of the device, in degrees Celsius, during the oldest successful calibration. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ReadCurrentTemperature(ViSession vi, ViReal64 *temperature)
```

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitExtCal or niDCPower_InitializeWithIndependentChannels function. |
| temperature | [out] | ViReal64* | Returns the onboard temperature, in degrees Celsius, of the device. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetCalUserDefinedInfo(ViSessionvi, ViConstString info)

# Remarks

If you call this function in a regular session, info is immediately changed. If you call thisfunction in an external calibration session, info is changed only after you close thesession using the niDCPower_CloseExtCal function with action set toNIDCPOWER_VAL_COMMIT.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitExtCal or niDCPower InitializeWithIndependentChannels function. |
| info | [in] | ViConstString | Specifies the string to store in the device onboard EEPROM. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalAdjustACFlatness(ViSessionvi, ViConstString channelName, ViReal64 generatedFrequency,ViReal64 generatedVoltageRMS, ViReal64 measuredVoltageRMS,ViUInt32 *numberOfStepsRemaining)

# Remarks

This function returns the number of steps remaining in the calibration procedure.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel to which these calibration settings apply. Only one channel at a time can be calibrated. |
| generatedFrequency | [in] | ViReal64 | Specifies the generated frequency, in Hz, utilized by the oscilloscope for the present AC flatness calibration step. |
| generatedVoltageRMS | [in] | ViReal64 | Specifies the RMS voltage, in volts, utilized by the oscilloscope for the present AC flatness calibration step. |
| measuredVoltageRMS | [in] | ViReal64 | Specifies the RMS voltage, in volts, measured by the oscilloscope for the present AC flatness calibration step. |
| numberOfStepsRemaining | [out] | ViUInt32* | Returns the remaining number of steps to complete the AC flatness calibration. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalAdjustCurrentLimit(ViSessionvi, ViConstString channelName, ViReal64 range, ViUInt32numberOfMeasurements, const ViReal64 requestedOutputs[],const ViReal64 measuredOutputs[])

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel name to which these calibration settings apply. |
| range | [in] | ViReal64 | Specifies the range to calibrate with these settings. Only one channel at a time may be calibrated. |
| numberOfMeasurements | [in] | ViUInt32 | Specifies the number of elements in requestedOutputs and measuredOutputs. |
| requestedOutputs | [in] | const ViReal64[] | Specifies an array of the output values that were requested in the niDCPower_ConfigureCurrentLimit function. |
| measuredOutputs | [in] | const ViReal64[] | Specifies an array of the output values measured by an external precision digital multimeter. |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustCurrentMeasurement(ViSession vi,ViConstString channelName, ViReal64 range, ViUInt32numberOfMeasurements, const ViReal64 reportedOutputs[],const ViReal64 measuredOutputs[])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel name to which these calibration settings apply. |
| range | [in] | ViReal64 | Specifies the range to calibrate with these settings. Only one channel at a time may be calibrated. |
| numberOfMeasurements | [in] | ViUInt32 | Specifies the number of elements in reportedOutputs and measuredOutputs. |
| reportedOutputs | [in] | const ViReal64[] | Specifies an array of the output values that were returned by the niDCPower_Measure function. |
| measuredOutputs | [in] | const ViReal64[] | Specifies an array of the output values measured by an external precision digital multimeter. |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustInternalReference(ViSession vi, ViInt32internalReference, ViReal64 adjustedInternalReference)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |  |
| --- | --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from niDCPower_InitializeWithIndependentChannels function. |  |
| Specifies the internal reference to be adjusted. Defined Values: |  |  |  |  |
| Name | Value |  |  |  |
| NIDCPOWER_VAL/Internal参考值 5V | 1054 (0x41) |  |  |  |
| NIDCPOWER_VAL_internal参考值 100KOH | 1055 (0x41) |  |  |  |
| NIDCPOWER_VAL_internal参考值 100KOH | 1056 (0x42) |  |  |  |
| Name | Direction | Type |  |  |
| Name | Value |  |  |  |
| NIDCPOWER_VAL_INTERNALREFERENCE_NONE | 1057(0x42) |  |  |  |
| NIDCPOWER_VAL_INTERNALREFERENCE_7V | 1119(0x45) |  |  |  |
| NIDCPOWER_VAL_INTERNALREFERENCE_1KOHM | 1120(0x46) |  |  |  |
| adjustedInternalReference | [in] | ViReal64 |  |  |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustOutputResistance(ViSession vi,ViConstString channelName, ViUInt32 numberOfMeasurements,const ViReal64 requestedOutputs[], const ViReal64measuredOutputs[])

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel name to which these calibration settings apply. Only one channel at a time can be calibrated. |
| numberOfMeasurements | [in] | ViUInt32 | Specifies the number of elements in requestedOutputs and measuredOutputs. |
| requestedOutputs | [in] | const ViReal64[] | Specifies an array of the output values that were requested in the niDCPower ConfigureOutputResistance function. |
| measuredOutputs | [in] | const ViReal64[] | Specifies an array of the output values measured by an external precision digital multimeter. |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustResidualCurrentOffset(ViSession vi,ViConstString channelName)

# Remarks

This function requires that the output be open prior to it being invoked.

Refer to the calibration procedure for the device you are calibrating for detailedinstructions on the appropriate use of this function. This function can be called only inan external calibration session.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustResidualVoltageOffset(ViSession vi,ViConstString channelName)

# Remarks

This function requires that the output be shorted prior to it being invoked.

Refer to the calibration procedure for the device you are calibrating for detailedinstructions on the appropriate use of this function. This function can be called only inan external calibration session.

Note

NI-DCPower uses the terms "source" and "output". However, while sinkingwith electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalAdjustVoltageLevel(ViSessionvi, ViConstString channelName, ViReal64 range, ViUInt32numberOfMeasurements, const ViReal64 requestedOutputs[],const ViReal64 measuredOutputs[])

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel to which these calibration settings apply. |
| range | [in] | ViReal64 | Specifies the range to calibrate with these settings. Only one channel at a time may be calibrated. |
| numberOfMeasurements | [in] | ViUInt32 | Specifies the number of elements in requestedOutputs and measuredOutputs. |
| requestedOutputs | [in] | const ViReal64[] | Specifies an array of the output values requested in the niDCPower_ConfigurationVoltageLevel function. |
| measuredOutputs | [in] | const ViReal64[] | Specifies an array of the output values measured by an external precision digital multimeter. |

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustVoltageMeasurement(ViSession vi,ViConstString channelName, ViReal64 range, ViUInt32numberOfMeasurements, const ViReal64 reportedOutputs[],const ViReal64 measuredOutputs[])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel name to which these calibration settings apply. |
| range | [in] | ViReal64 | Specifies the range to calibrate with these settings. Only one channel at a time may be calibrated. |
| numberOfMeasurements | [in] | ViUInt32 | Specifies the number of elements in reportedOutputs and measuredOutputs. |
| reportedOutputs | [in] | const ViReal64[] | Specifies an array of the output values that were returned by the niDCPower_Measure function. |
| measuredOutputs | [in] | const ViReal64[] | Specifies an array of the output values measured by an external precision digital multimeter. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalBeginACFlatness(ViSessionvi, ViConstString channelName, ViUInt32*totalNumberOfSteps)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel to which these calibration settings apply. Only one channel at a time can be calibrated. |
| totalNumberOfSteps | [out] | ViUInt32* | Returns the total number of steps required to complete AC voltage flatness calibration. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalConfigACFlatness(ViSessionvi, ViConstString channelName, ViReal64*generatedFrequency, ViReal64 *generatedVoltageRMS)

# Remarks

This function returns the generated frequency and voltage stimulus value.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel to which these calibration settings apply. Only one channel at a time can be calibrated. |
| generatedFrequency | [out] | ViReal64 * | Returns the generated frequency for the present AC flatness calibration step. |
| generatedVoltageRMS | [out] | ViReal64 * | Returns the generated nominal RMS voltage, in volts, for the present AC flatness calibration step. |

# Syntax

ViStatus _VI_FUNC niDCPower_CalEndACFlatness(ViSession vi,ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument calibration session. vi is obtained from the niDCPower_InitExtCal function. |
| channelName | [in] | ViConstString | Specifies the channel to which these calibration settings apply. Only one channel at a time can be calibrated. |

# Syntax

ViStatus _VI_FUNC niDCPower_CloseExtCal(ViSession vi,ViInt32 action)

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| action | [in] | ViInt32 |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VALCANCEL | 1001(0x3e9) | The old calibration constants are kept, and the new ones are discarded. |
| NIDCPOWER_VAL_COMMIT | 1002(0x3ea) | The new calibration constants are stored in the EEPROM. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConnectInternalReference(ViSession vi, ViInt32internalReference)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
|  |  |  |
| Name | Value | Desc |
| Name | Value | Desc |
| NIDCPOWER_VAL_INTERNALREFERENCE_5V | 1054(0x41e) | 5 V in referen |
| NIDCPOWER_VAL_INTERNALREFERENCE_100KOHM | 1055(0x41f) | 100 kinterfer |
| NIDCPOWER_VAL_INTERNALREFERENCEGROUND | 1056(0x420) | Group refer |
| NIDCPOWER_VAL_INTERNALREFERENCE_NONE | 1057(0x421) | No in refer |
| NIDCPOWER_VAL/internalREFERENCE_7V | 1119(0x45f) | 7 V in refer |
| NIDCPOWER_VAL/internalREFERENCE_1KOHM | 1120(0x460) | 1 koh interfer |

# Syntax

ViStatus _VI_FUNC niDCPower_InitExtCal(ViRsrc resourceName,ViConstString password, ViSession *vi)

# Remarks

Opening a calibration session always performs a reset. Refer to the calibrationprocedure for the device you are calibrating for detailed instructions on theappropriate use of this function.

# Note

This function and the sessions is creates do not support fully qualifiedchannel names.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| resourceName | [in] | ViRsrc | Specifies the resourceName assigned by Measurement & Automation Explorer (MAX), for example "PXI1Slot3" where "PXI1Slot3" is an instrument's resourceName. resourceName can also accept a logical IVI name for a device. |
| password | [in] | ViConstString | Specifies the password for opening a calibration session. The initial password is factory configured to "NI". password can be a maximum of four alphanumeric characters. |
| vi | [out] | ViSession* | Returns a handle that you use to identify the session in all subsequent NI-DCPower function calls. |

# LCR Compensation

# niDCPower_Ge ower_GetLCRCompensa CRCompensationData

Collects previously generated open, short, load compensation data as well as openand short custom cable compensation data so you can then apply it to LCRmeasurements with niDCPower_ConfigureLCRCompensation.

# Syntax

ViStatus _VI_FUNCniDCPower_GetLCRCompensationData(ViSession vi,ViConstString channelName, ViInt32 compensationDataSize,ViAddr compensationData)

# Remarks

Call this function after you have obtained open, short, load compensation data as wellas open and short custom cable compensation data. Pass the compensation data toniDCPower_ConfigureLCRCompensation.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| compensationDataSize | [in] | Vilnt32 | Specifies the size, in bytes, of compensationData to retrieve. If you enter 0, this function returns the needed size. |
| compensationData | [out] | ViAddr | The open, short, load as well as open and short custom cable compensation data to retrieve. |

# niDCPower_PerformLCROpenC CROpenCustomCableCompomCableComp

Generates open custom cable compensation data for LCR measurements.

# Syntax

ViStatus _VI_FUNCniDCPower_PerformLCROpenCustomCableCompensation(ViSessionvi, ViConstString channelName)

# Remarks

To use this function, you must physically configure an open LCR circuit to generatevalid open custom cable compensation data.

# Note

When you call this function:

• The open compensation data is written to the onboard storage of theinstrument. Onboard storage can contain only the most recent set ofdata.

• Most NI-DCPower attributes in the session are reset to their defaultvalues. Rewrite the values of any attributes you want to maintain.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# niDCPower_PerformLCRShortCustomCableCompomCableComp

Generates short custom cable compensation data for LCR measurements.

# Syntax

ViStatus _VI_FUNCniDCPower_PerformLCRShortCustomCableCompensation(ViSessionvi, ViConstString channelName)

# Remarks

To use this function:

• You must physically configure your LCR circuit with a short to generate valid shortcustom cable compensation data.

• Set NIDCPOWER_ATTR_LCR_SHORT_CUSTOM_CABLE_COMPENSATION_ENABLEDto VI_TRUE.

# Note

When you call this function:

• The short compensation data is written to the onboard storage of the

instrument. Onboard storage can contain only the most recent set ofdata.

• Most NI-DCPower attributes in the session are reset to their defaultvalues. Rewrite the values of any attributes you want to maintain.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Options for Short Custom Cable Compensation

Custom cable compensation requires both open and short compensation data. Youmust generate your own open data, but you can choose among two options forproviding short data.

• Use this function if you want to generate short custom cable compensation dataspecific to your setup.

• You can also use a generic set of short cable compensation data for cablecompensation. To use generic short cable compensation data, setNIDCPOWER_ATTR_LCR_SHORT_CUSTOM_CABLE_COMPENSATION_ENABLED toVI_FALSE and do not call this function.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureLCRCompensation(ViSession vi,  
ViConstString channelName, ViInt32 compensationDataSize,  
ViAddr compensationData)
```

# Remarks

```txt
This function applies open, short and load compensation data when you have set NIDCPOWER_ATTR LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE to NIDCPOWER_VAL_AS_CONFIGURED, and it also applies custom cable compensation data when you have set NIDCPOWER_ATTR_CABLE_LENGTH to NIDCPOWER_VAL/custom_AS_CONFIGURED
```

```txt
Call this function after you have obtained LCR compensation data. If NIDCPOWER_ATTR_LCR SHORTCustom_CABLE_COMPENSATION_ENABLED is set to true, you must generate data with both niDCPower.PerformLCROpenCustomCableCompensation and niDCPower.PerformLCRShortCustomCableCompensation; if false, you must only use niDCPower.PerformLCROpenCustomCableCompensation, and NI-DCPower uses default short data.
```

Call niDCPower_GetLCRCompensationData and pass the compensation data to thisfunction.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| compensationDataSize | [in] | Vilnt32 | Specifies the size, in bytes, of compensationData to apply. |
| compensationData | [in] | ViAddr | The open, short and load compensation data to apply. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_GetLCRCompensationLastDateAndTime(ViSession vi, ViConstString channelName, ViInt32 compensationType, ViInt32 *year, ViInt32 *month, ViInt32 *day, ViInt32 *hour, ViInt32 *minute)
```

# Remarks

The time returned is 24-hour (military) local time; for example, if the selected type ofcompensation data was generated at 2:30 PM, this VI returns 14 for hours and 30 forminutes.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName Specifies the type of compensation for LCR measurements. Defined Values: Name NIDCPOWER_VAL_OPEN_COMPENSATION NIDCPOWER_VAL SHORT_COMPENSATION | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the 0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2 if you pass ''' for this control, all channels in the session are used. NIDCPOWER_VAL_LOAD_COMPENSATION NIDCPOWER_VAL_OPEN/custom_CABLE_COMPENSATION NIDCPOWER_VAL SHORT Custom Cable Compensation |
| year | [out] | VInt32* | Returns the year the specific LCR compensationType was performed |
| month | [out] | Vilnt32 * | Returns the month the specific LCR compensationType was performed |
| day | [out] | Vilnt32 * | Returns the day the specific LCR compensationType was performed |
| hour | [out] | Vilnt32 * | Returns the hour the specific LCR compensationType was performed |
| minute | [out] | Vilnt32 * | Returns the minute the specific LCR compensationType was performed |

# Syntax

ViStatus _VI_FUNCniDCPower_PerformLCRLoadCompensation(ViSession vi,ViConstString channelName, ViInt32 numCompensationSpots,const NILCRLoadCompensationSpot compensationSpots[])

# Remarks

You must physically configure your LCR circuit with an appropriate reference load touse this function to generate valid load compensation data.

# Note

When you call this function:

• The load compensation data is written to the onboard storage of theinstrument. Onboard storage can contain only the most recent set ofdata.

• Most NI-DCPower attributes in the session are reset to their defaultvalues. Rewrite the values of any attributes you want to maintain.

To apply the load compensation data you generate with this function to your LCRmeasurements, set NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED toVI_TRUE.

# Note

Load compensation data are generated only for those specific frequenciesyou define with this function; load compensation is not interpolated from thespecific frequencies you define and applied to other frequencies.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

referenceValueType Defined Values:

| Name | Value |
| --- | --- |
| NIDCPOWER_VAL_LCR_LOAD_COMPENSATION_SPOT/reference_VALUE_TYPE_IMPEDANCE | 1076 (0x434) |
| NIDCPOWER_VAL_LCR_LOAD_COMPENSATION_SPOT/reference_VALUE_TYPE_IDEAL_CAPACITANCE | 1077 (0x435) |
| NIDCPOWER_VAL_LCR_LOAD_COMPENSATION_SPOT/reference_VALUE_TYPE_IDEAL_INDUCTANCE | 1078 (0x436) |
| NIDCPOWER_VAL_LCR_LOAD_COMPENSATION_SPOT/reference_VALUE_TYPE_Ideal_RESISTANCE | 1079 (0x437) |

# Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
| channelName | [in] | ViConstString |  |  |  |
| numCompensationSpots | [in] | Vilnt32 |  |  |  |
| Name | Direction | Type |  |  |  |
|  |  |  |  |  |  |
| Name | Type | Descrip |  |  |  |
| frequency | ViReal64 | The spot |  |  |  |
| referenceValueType | ViInt32 | A know specific of your as the b.compen |  |  |  |
| referenceValueA | ViReal64 | A value to describe referen specific indicate referen option |  |  |  |
| referenceValueB | ViReal64 | If applicable value that the referen specific indicate referen |  |  |  |
|  |  |  | Name | Type | Description option y |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower.PerformLCROpenCompensation(ViSession vi, ViConstString channelName, ViInt32 numFrequencies, const ViReal64 additionalFrequencies[])
```

# Remarks

You must physically configure an open LCR circuit to use this function to generate validopen compensation data.

# Note

When you call this function:

• The open compensation data is written to the onboard storage of theinstrument. Onboard storage can contain only the most recent set ofdata.

• Most NI-DCPower attributes in the session are reset to their defaultvalues. Rewrite the values of any attributes you want to maintain.

To apply the open compensation data you generate with this function to your LCRmeasurements, set NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED toVI_TRUE.

Corrections for frequencies other than the default frequencies or any additionalfrequencies you specify are interpolated.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Default Open Compensation Frequencies

By default, NI-DCPower uses the following frequencies for LCR open compensation:

• 10 logarithmic steps at 1 kHz frequency decade

• 10 logarithmic steps at 10 kHz frequency decade

• 100 logarithmic steps at 100 kHz frequency decade

• 100 logarithmic steps at 1 MHz frequency decade

# Note

The actual frequencies used depend on the bandwidth of your instrument.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| numFrequencies | [in] | Vilnt32 | Specifies the number of elements in additionalFrequencies. |
| additionalFrequencies | [in] | const ViReal64[] | Defines a further set of frequencies, in addition to the default frequencies, to perform the compensation for. You can specify <=200 additional frequencies. |

# Syntax

ViStatus _VI_FUNCniDCPower_PerformLCRShortCompensation(ViSession vi,ViConstString channelName, ViInt32 numFrequencies, constViReal64 additionalFrequencies[])

# Remarks

You must physically configure your LCR circuit with a short to use this function togenerate valid short compensation data.

# Note

When you call this function:

• The short compensation data is written to the onboard storage of theinstrument. Onboard storage can contain only the most recent set ofdata.

• Most NI-DCPower attributes in the session are reset to their defaultvalues. Rewrite the values of any attributes you want to maintain.

To apply the short compensation data you generate with this function to your LCRmeasurements, set NIDCPOWER_ATTR_LCR_SHORT_COMPENSATION_ENABLED toVI_TRUE.

Corrections for frequencies other than the default frequencies or any additionalfrequencies you specify are interpolated.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Default Short Compensation Frequencies

By default, NI-DCPower uses the following frequencies for LCR short compensation:

• 10 logarithmic steps at 1 kHz frequency decade

• 10 logarithmic steps at 10 kHz frequency decade

• 100 logarithmic steps at 100 kHz frequency decade

• 100 logarithmic steps at 1 MHz frequency decade

# Note

The actual frequencies used depend on the bandwidth of your instrument.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| numFrequencies | [in] | Vilnt32 | Specifies the number of elements in additionalFrequencies. |
| additionalFrequencies | [in] | const ViReal64[] | Defines a further set of frequencies, in addition to the default frequencies, to perform the compensation for. You can specify <=200 additional frequencies. |

# niDCPower_CalSelfCalibrate

Performs a self-calibration upon the specified channel(s).

# Syntax

ViStatus _VI_FUNC niDCPower_CalSelfCalibrate(ViSession vi,ViConstString channelName)

# Remarks

This function disables the output, performs several internal calculations, and updatescalibration values. The updated calibration values are written to the device hardware ifthe NIDCPOWER_ATTR_SELF_CALIBRATION_PERSISTENCE attribute is set toNIDCPOWER_VAL_WRITE_TO_EEPROM. Refer to theNIDCPOWER_ATTR_SELF_CALIBRATION_PERSISTENCE attribute topic for moreinformation about the settings for this attribute.

For the PXIe-4147 and PXIe-4162/4163, you must specify all channels of the instrumentwith the channelName input. You cannot self-calibrate a subset of channels for theseinstruments.

# Note

This function calls the niDCPower_ResetWithChannels function, which putsthe device configuration into the default state without changing theNIDCPOWER_ATTR_SELF_CALIBRATION_PERSISTENCE attribute.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

