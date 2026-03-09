# NI-DCPower C API — Functions Reference

# Functions

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

# Control

# Syntax

ViStatus _VI_FUNC niDCPower_Abort(ViSession vi)

# Remarks

Transitions the NI-DCPower session from the Running state to the Uncommitted state.If a sequence is running, it is stopped. Any configuration functions called after thisfunction are not applied until the niDCPower_Initiate function is called. If poweroutput is enabled when you call the niDCPower_Abort function, the channels remainin their current state and continue providing power.

Use the niDCPower_ConfigureOutputEnabled function to disable power output on aper channel basis. Use the niDCPower_reset function to disable output on allchannels.

Refer to the Programming States topic in the NI DC Power Supplies and SMUs Help for information about the specific Nl-DCPower software states.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_AbortWithChannels

Transitions the specified channel(s) from the Running state to the Uncommitted state.If a sequence is running, it is stopped.

# Syntax

ViStatus _VI_FUNC niDCPower_AbortWithChannels(ViSession vi,ViConstString channelName)

# Remarks

Any configuration functions called after this function are not applied until theniDCPower_InitiateWithChannels function is called. If power output is enabled whenyou call this function, the channel(s) remain in their current state and continueproviding power.

Use the niDCPower_ConfigureOutputEnabled function or theniDCPower_ResetWithChannels function to disable power output on a per-channelbasis.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# niDCPower_Commit

This function is deprecated. Use niDCPower_CommitWithChannels instead.

# Syntax

ViStatus _VI_FUNC niDCPower_Commit(ViSession vi)

# Remarks

Applies previously configured settings to the device. Calling this function moves theNI-DCPower session from the Uncommitted state into the Committed state. Aftercalling this function, modifying any attribute reverts the NI-DCPower session to theUncommitted state. Use the niDCPower_Initiate function to transition to the Runningstate. Refer to the Programming States topic in the NI DC Power Supplies and SMUs Help for details about the specific Nl-DCPower software states.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_CommitWithChannels

Applies previously configured settings to the specified channel(s). Calling this functionmoves the channel(s) from the Uncommitted state into the Committed state. Aftercalling this function, modifying any attribute reverts the channel(s) to theUncommitted state. Use the niDCPower_InitiateWithChannels function to transition tothe Running state.

# Syntax

ViStatus _VI_FUNC niDCPower_CommitWithChannels(ViSessionvi, ViConstString channelName)

# Remarks

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0,2,and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_Initiate(ViSession vi)

# Remarks

Starts generation or acquisition, causing the NI-DCPower session to leave theUncommitted state or Committed state and enter the Running state. To return to theUncommitted state call the niDCPower_Abort function. Refer to the ProgrammingStates topic in the NI DC Power Supplies and SMUs Help for information aboutthe specific NI-DCPower software states.

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_InitiateWithChannels

Starts generation or acquisition, causing the specified channel(s) to leave theUncommitted state or Committed state and enter the Running state. To return to theUncommitted state call the niDCPower_AbortWithChannels function.

# Syntax

ViStatus _VI_FUNC niDCPower_InitiateWithChannels(ViSessionvi, ViConstString channelName)

# Remarks

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Initialize/Close

# niDCPower_close

Closes the session specified in vi and deallocates the resources that NI-DCPowerreserves. If power output is enabled when you call this function, the channels remainin their existing state and continue providing power. Use theniDCPower_ConfigureOutputEnabled function to disable power output on a perchannel basis. Use the niDCPower_ResetWithChannels function to disable poweroutput on all channel(s).

# Syntax

ViStatus _VI_FUNC niDCPower_close(ViSession vi)

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_InitializeWithChannels(ViRsrcresourceName, ViConstString channels, ViBoolean reset,ViConstString optionString, ViSession *vi)

# Remarks

Creates and returns a new NI-DCPower session to the instrument specified in resourcename to be used in all subsequent NI-DCPower function calls. With this function, youcan optionally set the initial state of the following session attributes:

NIDCPOWER_ATTR_SIMULATE

NIDCPOWER_ATTR_DRIVER_SETUP

After calling this function, the session will be in the Uncommitted state. Refer to theProgramming States topic for details about specific software states.

To place the device in a known start-up state when creating a new session, set reset to

VI_TRUE. This action is equivalent to using the niDCPower_reset function immediatelyafter initializing the session.

To open a session and leave the device in its existing configuration without passingthrough a transitional output state, set reset to VI_FALSE. Then configure the device asin the previous session, changing only the desired settings, and then call theniDCPower_Initiate function.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| resourceName | [in] | ViSrc | Specifies the resourceName assigned by Measurement & Automation Explorer (MAX), for example "PXI1Slot3" where "PXI1Slot3" is an instrument's resourceName. resourceName can also be a logical IVI name. |
| channels | [in] | ViConstString | Specifies which channel(s) to include in a new session. Specify multiple channels by using a channel list or a channel range. A channel list is a comma (, ) separated sequence of channel names (for example, 0,2 specifies channels 0 and 2). A channel range is a lower bound channel followed by a hyphen (-) or colon (:) followed by an upper bound channel (for example, 0-2 specifies channels 0, 1, and 2). In the Running state, multiple channel configurations are performed sequentially based on the order specified in this parameter. If you do not specify any channels, by default all channels on the device are included in the session. |
| reset | [in] | ViBoolean | Specifies whether to reset the device during the initialization procedure. |
| optionString | [in] | ViConstString | Specifies the initial value of certain attributes for the session. The syntax for optionString is a list of attributes with an assigned value where 1 is VI_true and 0 is VIFalse. For example:  "Simulate=0"  You do not have to specify a value for all the attributes. If you do not specify a value for an attribute, the default value is used.  For more information about simulating a device, refer to Simulating an Instrument. |
| vi | [out] | ViSession * | Returns a session handle that you use to identify the device in all subsequent NI-DCPower function calls. |

# Syntax

ViStatus _VI_FUNCniDCPower_InitializeWithIndependentChannels(ViRsrcresourceName, ViBoolean reset, ViConstString optionString,ViSession *vi)

# Remarks

After calling this function, the specified channel or channels will be in theUncommitted state.

With this function and channel-based NI-DCPower functions and attributes, you canuse any channels in the session independently. For example, you can initiate a subsetof channels in the session with niDCPower_InitiateWithChannels, and the otherchannels in the session remain in the Uncommitted state.

# Details

# Details of Independent Channel Operation

When you initialize with independent channels, each channel steps through the NI-DCPower programming state model independently of all other channels, and you canspecify a subset of channels for most operations.

# Note

You can make concurrent calls to a session from multiple threads, but thesession executes the calls one at a time. If you specify multiple channels for afunction or attribute, the session may perform the operation on multiplechannels in parallel, though this is not guaranteed, and some operations may

execute sequentially.

# Related Topics:

Programming States

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| resourceName | [in] | ViRsrc | Specifies the NI-DCPower resources to use in the session. NI-DCPower resources can be names of the instrument(s) assigned by Measurement & Automation Explorer (MAX) and the channel(s) to initialize. Specify the instrument(s) and channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels of the instrument(s) are included in the session. |
| reset | [in] | ViBoolean | Specifies whether to reset channel(s) during the initialization procedure. The default is VI_FALSE. To place channel(s) in a known startup state when creating a new session, set reset to VI_true. This action is equivalent to using the niDCPower_ RESETWithChannels function immediately after initializing the session. To open a session and leave the channel(s) in an existing configuration without passing through a transitional output state, set reset to VI_FALSE. Next, configure the channel(s) as in the previous session, change the desired settings, and then call the niDCPower_InitiateWithChannels function to write both settings. |
| optionString | [in] | ViConstString | Specifies the initial value of certain attributes for the session. The syntax for optionString is a list of attributes with an assigned value where 1 is VI_true and 0 is VI_FALSE. For example:Simulate=0, DriverSetup=Model:<model number>;BoardType:<bus connector>To simulate a multi-instrument session, set Simulate to 1 and list multiple instruments for DriverSetup. For example:Simulate=1, DriverSetup=ResourceName:<instrument name>; Model:<model number>; BoardType:<bus connector> & ResourceName:<resource name>;Model:<model number>; BoardType:<bus connector>You do not have to specify a value for all the attributes. If you do not specify a value for an attribute, the default value is used.For more information about simulating a device, refer to Simulating an Instrument. |
| vi | [out] | ViSession* | Returns a session handle that you use to identify the session in all subsequent NI-DCPower function calls. |

# Query

# Syntax

ViStatus _VI_FUNCniDCPower_ClearLatchedOutputCutoffState(ViSession vi,ViConstString channelName, ViInt32 outputCutoffReason)

# Remarks

To clear the state for all output cutoff reasons, useNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_ALL.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the 2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used |
| outputCutoffReason | [in] | Vilnt32 | Specifies the reasons for which to clear the output cutoff state. Defined Values: Name NIDCPower_VAL_OUTPUT_CUTOFF_REASON_ALL Name NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUT NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUT NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_CHA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_CHA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_CHA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_CHA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_SATU NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_SAT NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASONSELF_TEST_MI NIDCPOWER_VAL_OUTPUT_CUTOFF_REASONSELF_TEST_MI |

# Syntax

ViStatus _VI_FUNC niDCPower_QueryInCompliance(ViSession vi,ViConstString channelName, ViBoolean *inCompliance)

# Remarks

The compliance limit is the current limit when theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_VOLTAGE, NIDCPOWER_VAL_PULSE_VOLTAGE,NIDCPOWER_VAL_CONSTANT_RESISTANCE orNIDCPOWER_VAL_CONSTANT_POWER. If the output is operating at the compliancelimit, the output reaches the current limit before the desired voltage, resistance orpower level.

The compliance limit is the voltage limit when theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_CURRENT or NIDCPOWER_VAL_PULSE_CURRENT. If theoutput is operating at the compliance limit, the output reaches the voltage limit beforethe desired current level.

Refer to the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute for more informationabout output function and voltage or current limit.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel to query. Compliance status can only be queried for one channel at a time.Specify the channel using the form PXI1Slot3/0, where PXI1Slot3 is the instrument resource name and 0 is the channel. |
| inCompliance | [out] | ViBoolean * | Returns whether the specified channel is in compliance. |

# niDCPower_Quer ower_QueryLatchedOutputC chedOutputCutoffState

Discovers if an output cutoff limit was exceeded for the specified reason. When anoutput cutoff is engaged, the output of the channel(s) is disconnected. If a limit wasexceeded, the state is latched until you clear it with

niDCPower_ClearLatchedOutputCutoffState or niDCPower_ResetWithChannels.

# Syntax

ViStatus _VI_FUNC

niDCPower_QueryLatchedOutputCutoffState(ViSession vi,ViConstString channelName, ViInt32 outputCutoffReason,ViBoolean *outputCutoffState)

# Remarks

outputCutoffReason specifies the conditions for which an output is disconnected.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName Specifies which output cutoff conditions to query. Defined Values: Name NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_ALL NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUT Name NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUT NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEA NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_CHA | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the 2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

| Name | Direction | Type |  |  |
| --- | --- | --- | --- | --- |
| Name | Direction | Type |  |  |
| Name | Direction | Type |  |  |
| outputCutoffState | [out] | ViBoolean * |  |  |
|  |  |  | VI:true | An output cutoff has engaged for the condit |
|  |  |  | VIFalse | No output cutoff has engaged. |

# niDCPower_Quer ower_QueryMaxCurrentLimit entLimit

Queries the maximum current limit on a channel if the channel is set to the specifiedvoltageLevel.

# Syntax

ViStatus _VI_FUNC niDCPower_QueryMaxCurrentLimit(ViSessionvi, ViConstString channelName, ViReal64 voltageLevel,ViReal64 *maxCurrentLimit)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel to query. The maximum current limit may only be queried for one channel at a time.Specify the channel using the form PXI1Slot3/0, where PXI1Slot3 is the instrument resource name and 0 is the channel. |
| voltageLevel | [in] | ViReal64 | Specifies the voltage level to use when calculating the maxCurrentLimit. |
| maxCurrentLimit | [out] | ViReal64 * | Returns the maximum current limit that can be set with the specified voltageLevel. |

# niDCPower_Quer ower_QueryMaxVoltageLevel

Queries the maximum voltage level on a channel if the channel is set to the specifiedcurrentLimit.

# Syntax

ViStatus _VI_FUNC niDCPower_QueryMaxVoltageLevel(ViSessionvi, ViConstString channelName, ViReal64 currentLimit,ViReal64 *maxVoltageLevel)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel to query. The maximum voltage level may only be queried for one channel at a time. Specify the channel using the form PXI1Slot3/0, where PXI1Slot3 is the instrument resource name and 0 is the channel. |
| currentLimit | [in] | ViReal64 | Specifies the current limit to use when calculating the maxVoltageLevel. |
| maxVoltageLevel | [out] | ViReal64 * | Returns the maximum voltage level that can be set on a channel with the specified currentLimit. |

# Syntax

ViStatus _VI_FUNC niDCPower_QueryMinCurrentLimit(ViSessionvi, ViConstString channelName, ViReal64 voltageLevel,ViReal64 *minCurrentLimit)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel to query. The minimum current limit may only be queried for one channel at a time.Specify the channel using the form PXI1Slot3/0, where PXI1Slot3 is the instrument resource name and 0 is the channel. |
| voltageLevel | [in] | ViReal64 | Specifies the voltage level to use when calculating the minCurrentLimit. |
| minCurrentLimit | [out] | ViReal64 * | Returns the minimum current limit that can be set on a channel with the specified voltageLevel. |

# niDCPower_Quer ower_QueryOutputS yOutputState

Queries the specified channel to determine if the channel is currently in the statespecified by outputState.

# Syntax

ViStatus _VI_FUNC niDCPower_QueryOutputState(ViSession vi,ViConstString channelName, ViInt32 outputState, ViBoolean*inState)

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
|  |  |  |
| Name | Value | Descrip |
| NIDCPOWER_VAL_OUTPUT_constant_VOLTAGE | 0 (0x0) | The de manta constant |
| Name | Value | Descript |
| NIDCPOWER_VAL_OUTPUTCONSTANT_CURRENT | 1 (0x1) | The de- maina- constant current- adjusti- the vol |
| NIDCPOWER_VAL_OUTPUT_OVER_VOLTAGE | 2 (0x2) | Not support |
| NIDCPOWER_VAL_OUTPUT_OVER_CURRENT | 3 (0x3) | Not support |
| NIDCPOWER_VAL_OUTPUT_UNREGULATED | 4 (0x4) | Not support |
| NIDCPOWER_VAL_OUTPUT_INHIBITED | 1163 (0x48b) | The channel- in the inhibit- state. |
| inState | [out] | ViBoolean * |
| Name | Direction | Type |

# Set/Get Attribute

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViBoolean(ViSessionvi, ViConstString channelName, ViAttr attributeId,ViBoolean *attributeValue)

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [out] | ViBoolean * | Returns the current value of the attribute. Passes the address of a ViBoolean variable. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViInt32(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViInt32*attributeValue)

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| attributEd | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [out] | Vilnt32 * | Returns the current value of the attribute. Passes the address of a Vilnt32 variable. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViInt64(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViInt64*attributeValue)

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributed | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [out] | ViInt64 * | Returns the current value of the attribute. Passes the address of a ViInt64 variable. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViReal64(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViReal64*attributeValue)

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [out] | ViReal64 * | Returns the current value of the attribute. Passes the address of a ViReal64 variable. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViSession(ViSessionvi, ViConstString channelName, ViAttr attributeId,ViSession *attributeValue)

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| attributEd | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [out] | ViSession * | Returns the current value of the attribute. Passes the address of a ViSession variable. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetAttributeViString(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViInt32bufferSize, ViChar attributeValue[])

# Remarks

You can use this function to get the values of device-specific attributes and inherent IVIattributes.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| bufferSize | [in] | ViInt32 | Passes the number of bytes in the buffer and specifies the number of bytes in the ViChar array you specify for attributeValue. If the current value of attributeValue, including the terminating NUL byte, is larger than the size you indicate in this parameter, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. To obtain the required buffer size, you can pass 0 for this attribute and VI_NULL for attributeValue. If you want the function to fill in the buffer regardless of the number of bytes in the value, pass a negative number for this attribute. |
| attributeValue | [out] | ViChar[] | The buffer in which the function returns the current value of the attribute. The buffer must be of type ViChar and have at least as many bytes as indicated in bufferSize. If the current value of the attribute, including the terminating NUL byte, contains more bytes that you indicate in this attribute, the function copies (buffer size -1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you specify 0 for bufferSize, you can pass VI_NULL for this attribute. |

# Set Attribute

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViBoolean(ViSessionvi, ViConstString channelName, ViAttr attributeId,ViBoolean attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | ViBoolean | Specifies the value to which you want to set the attribute. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViInt32(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViInt32attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| attributEd | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | VInt32 | Specifies the value to which you want to set the attribute. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViInt64(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViInt64attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | Vilnt64 | Specifies the value to which you want to set the attribute. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViReal64(ViSessionvi, ViConstString channelName, ViAttr attributeId, ViReal64attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributEd | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | ViReal64 | Specifies the value to which you want to set the attribute. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViSession(ViSessionvi, ViConstString channelName, ViAttr attributeId,ViSession attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributEd | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | ViSession | Specifies the value to which you want to set the attribute. |

# Syntax

ViStatus _VI_FUNC niDCPower_SetAttributeViString(ViSessionvi, ViConstString channelName, ViAttr attributeId,ViConstString attributeValue)

# Remarks

This is a low-level function that you can use to set the values of device-specificattributes and inherent IVI attributes.

# Note

Some of the values might not be valid depending upon the current settings ofthe device session.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| attributeld | [in] | ViAttr | Specifies the ID of an attribute. |
| attributeValue | [in] | ViConstString | Specifies the value to which you want to set the attribute. |

# Functions Supported by the PXI-4110

| Function | PXI-4110 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | Yes |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | Yes |
| niDCPower_CalSelfCalibrate | X |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_ClosExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurationApertureTime | X |
| niDCPower_ConfigurationAutoZero | X |
| niDCPower_ConfigurationCurrentLevel | Yes |
| niDCPower_ConfigurationCurrentLevelRange | Yes |
| niDCPower_ConfigurationCurrentLimit | Yes |
| niDCPower_ConfigurationCurrentLimitRange | Yes |
| niDCPower_ConfigurationDigitalEdgeMeasureTriggerWithChannels | X |
| niDCPower_ConfigurationDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeSequenceAdvanceTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | X |
| niDCPower_ConfiguredLCRCompensation | X |
| niDCPower_ConfiguredLCRCustomCableCompensation | X |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | X |
| niDCPower_ConfiguredPowerLineFrequency | X |
| niDCPower_ConfiguredPulseBiasCurrentLevel | X |
| niDCPower_ConfiguredPulseBiasCurrentLimit | X |
| niDCPower_ConfiguredPulseBiasVoltageLevel | X |
| niDCPower_ConfigurE PulseBiasVoltageLimit | X |
| niDCPower_ConfigurE PulseCurrentLevel | X |
| niDCPower_ConfigurE PulseCurrentLevelRange | X |
| niDCPower_ConfigurE PulseCurrentLimit | X |
| niDCPower_ConfigurE PulseCurrentLimitRange | X |
| niDCPower_ConfigurE PulseVoltageLevelRange | X |
| niDCPower_ConfigurE PulseVoltageLevelRange | X |
| niDCPower_ConfigurE PulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE Sense | Yes |
| niDCPower_ConfigurE SoftwareEdgeMeasureTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | X |
| niDCPower_ConfiguredSourceModeWithChannels | Yes |
| niDCPower_ConfiguredVoltageLevel | Yes |
| niDCPower_ConfiguredVoltageLevelRange | Yes |
| niDCPower_ConfiguredVoltageLimit | Yes |
| niDCPower_ConfiguredVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | X |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | X |
| niDCPower_CreateAdvancedSequenceStepWithChannels | X |
| niDCPower 删除AdvancedSequenceWithChannels | X |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | X |
| niDCPower_DisableSourceTriggerWithChannels | X |
| niDCPower_DisableStartTriggerWithChannels | X |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_AtExportSignalWithChannels | X |
| niDCPower_FetchMultiple | X |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | X |
| niDCPower_GetSelfCalLastTemp | X |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower self test | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | X |
| niDCPower SetAttributeViBoolean | Yes |
| niDCPower SetAttributeVilnt32 | Yes |
| niDCPower SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | X |
| niDCPower_WaitForEventWithChannels | Yes3 |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Supported by the PXI-4130

| Function | PXI-4130 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | Yes |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | Yes |
| niDCPower_CalSelfCalibrate | X |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurApertureTime | X |
| niDCPower_ConfigurAutoZero | X |
| niDCPower_ConfigurCurrentLevel | Yes |
| niDCPower_ConfigurCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels | X |
| niDCPower_ConfigureLCRCompensation | X |
| niDCPower_ConfigureLCRCustomCableCompensation | X |
| niDCPower_ConfigureOutputEnabled | Yes |
| niDCPower_ConfigureOutputFunction | Yes |
| niDCPower_ConfigureOutputResistance | X |
| niDCPower_ConfigurationPowerLineFrequency | X |
| niDCPower_ConfigurationPulseBiasCurrentLevel | X |
| niDCPower_ConfigurationPulseBiasCurrentLimit | X |
| niDCPower_ConfigurationPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLevel | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE Sense | Yes |
| niDCPower_ConfigurE SoftwareEdgeMeasureTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgeSequenceAdvanceTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgeSourceTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgeStartTriggerWithChannels | X |
| niDCPower_ConfigurE SourceModeWithChannels | Yes |
| niDCPower_ConfigurEVoltageLevel | Yes |
| niDCPower_ConfigurEVoltageLevelRange | Yes |
| niDCPower_ConfigurEVoltageLimit | Yes |
| niDCPower_ConfigurEVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | X |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | X |
| niDCPower_createAdvancedSequenceStepWithChannels | X |
| niDCPower 删除AdvancedSequenceWithChannels | X |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | X |
| niDCPower_DisableSourceTriggerWithChannels | X |
| niDCPower_DisableStartTriggerWithChannels | X |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | X |
| niDCPower_FetchMultiple | X |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateAndTime | X |
| niDCPower_GetSelfCallLastTemp | X |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_ InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower_QrylnCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | X |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | X |
| niDCPower_WaitForEventWithChannels | Yes3 |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Supported by the PXI-4132

| Function | PXI-4132 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | Yes |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | Yes |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_ClearExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurationApertureTime | Yes |
| niDCPower_ConfigurationAutoZero | Yes |
| niDCPower_ConfigurationCurrentLevel | Yes |
| niDCPower_ConfigurationCurrentLevelRange | Yes |
| niDCPower_ConfigurationCurrentLimit | Yes |
| niDCPower_ConfigurationCurrentLimitRange | Yes |
| niDCPower_ConfigurationDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigurationDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigureLCRCompensation | X |
| niDCPower_ConfigureLCRCustomCableCompensation | X |
| niDCPower_ConfigureOutputEnabled | Yes |
| niDCPower_ConfigureOutputFunction | Yes |
| niDCPower_ConfigureOutputResistance | X |
| niDCPower_ConfigurePowerLineFrequency | Yes |
| niDCPower_ConfigurePulseBiasCurrentLevel | X |
| niDCPower_ConfigurePulseBiasCurrentLimit | X |
| niDCPower_ConfigurePulseBiasVoltageLevel | X |
| niDCPower_ConfigurePulseBiasVoltageLimit | X |
| niDCPower_ConfigurePulseCurrentLevel | X |
| niDCPower_ConfigurePulseCurrentLevelRange | X |
| niDCPower_ConfiguredPulseCurrentLimit | X |
| niDCPower_ConfiguredPulseCurrentLimitRange | X |
| niDCPower_ConfiguredPulseVoltageLevel | X |
| niDCPower_ConfiguredPulseVoltageLevelRange | X |
| niDCPower_ConfiguredPulseVoltageLimit | X |
| niDCPower_ConfiguredPulseVoltageLimitRange | X |
| niDCPower_ConfiguredPulseVoltageSense | Yes |
| niDCPower_ConfiguredSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurationModeWithChannels | Yes |
| niDCPower_ConfigurationVoltageLevel | Yes |
| niDCPower_ConfigurationVoltageLevelRange | Yes |
| niDCPower_ConfigurationVoltageLimit | Yes |
| niDCPower_ConfigurationVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | X |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | X |
| niDCPower_createAdvancedSequenceStepWithChannels | X |
| niDCPower 删除AdvancedSequenceWithChannels | X |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_AtExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | Yes |
| niDCPower_GetSelfCalLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPowerRESETDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower self test | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower SetAttributeViBoolean | Yes |
| niDCPower SetAttributeVInt32 | Yes |
| niDCPower SetAttributeViReal64 | Yes |
| niDCPower SetAttributeViSession | Yes |
| niDCPower SetAttributeViString | Yes |
| niDCPower SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

NIDCPOWER_VAL_AUXILIARY is the only valid value.

# Functions Support tions Supported by the P ed the PXIe-4051

| Function | PXle-4051 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | Yes |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | X |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_ClosExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | Yes |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredLCRCompensation | X |
| niDCPower_ConfiguredLCRCustomCableCompensation | X |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | Yes |
| niDCPower_ConfiguredPowerLineFrequency | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLevel | X |
| niDCPower_ConfiguredPulseBiasCurrentLimit | X |
| niDCPower_ConfigurE PulseBiasVoltageLevel | X |
| niDCPower_ConfigurE PulseBiasVoltageLimit | X |
| niDCPower_ConfigurE PulseCurrentLevel | X |
| niDCPower_ConfigurE PulseCurrentLevelRange | X |
| niDCPower_ConfigurE PulseCurrentLimit | X |
| niDCPower_ConfigurE PulseCurrentLimitRange | X |
| niDCPower_ConfigurE PulseVoltageLevel | X |
| niDCPower_ConfigurE PulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE PulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE PulseMeasureTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredSourceModeWithChannels | Yes |
| niDCPower_ConfiguredVoltageLevel | Yes |
| niDCPower_ConfiguredVoltageLevelRange | Yes |
| niDCPower_ConfiguredVoltageLimit | Yes |
| niDCPower_ConfiguredVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | Yes |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_AtExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateAndTime | Yes |
| niDCPower_GetSelfCallLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower.Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPower_ResetWithChannels | Yes |
| niDCPowerRESETDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

Functions Support tions Supported by the P ed the PXIe-4112/4113 -4112/4113

| Function | PXle-4112 | PXle-4113 |
| --- | --- | --- |
| niDCPower_AbortWithChannels | Yes | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes | Yes |
| niDCPower_CalAdjustCurrentMeasurement | Yes | Yes |
| niDCPower_CalAdjustInternalReference | X | X |
| niDCPower_CalAdjustOutputResistance | X | X |
| niDCPower_CalAdjustResidualCurrentOffset | X | X |
| niDCPower_CalAdjustResidualVoltageOffset | X | X |
| niDCPower_CalAdjustVoltageLevel | Yes | Yes |
| niDCPower_CalAdjustVoltageMeasurement | Yes | Yes |
| niDCPower_CalSelfCalibrate | X | X |
| niDCPower_ChangeExtCalPassword | Yes | Yes |
| niDCPower_ClearInterchangeWarnings | Yes | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X | X |
| niDCPower_close | Yes | Yes |
| niDCPower_CloseExtCal | Yes | Yes |
| niDCPower_CommitWithChannels | Yes | Yes |
| niDCPower_ConfigurationApertureTime | Yes | Yes |
| niDCPower_ConfigurationAutoZero | X | X |
| niDCPower_ConfigurationCurrentLevel | Yes | Yes |
| niDCPower_ConfigurationCurrentLevelRange | Yes | Yes |
| niDCPower_ConfigurationCurrentLimit | Yes | Yes |
| niDCPower_ConfigurationCurrentLimitRange | Yes | Yes |
| niDCPower_ConfigurationDigitalEdgeMeasureTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationDigitalEdgePulseTriggerWithChannels | X | X |
| niDCPower_ConfigurationDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationDigitalEdgeSourceTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationDigitalEdgeStartTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigureLCRCompensation | X |  |
| niDCPower_ConfigureLCRCustomCableCompensation | X |  |
| niDCPower_ConfigUREOutputEnabled | Yes | Yes |
| niDCPower_ConfigUREOutputFunction | Yes | Yes |
| niDCPower_ConfigUREOutputResistance | X | X |
| niDCPower_ConfigUREPowerLineFrequency | Yes | Yes |
| niDCPower_ConfigurePulseBiasCurrentLevel | X | X |
| niDCPower_ConfigurePulseBiasCurrentLimit | X | X |
| niDCPower_ConfigurePulseBiasVoltageLevel | X | X |
| niDCPower_ConfigurePulseBiasVoltageLimit | X | X |
| niDCPower_ConfigurePulseCurrentLevel | X | X |
| niDCPower_ConfigurePulseCurrentLevelRange | X | X |
| niDCPower_ConfigurationPulseCurrentLimit | X | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X | X |
| niDCPower_ConfigurationPulseVoltageLevel | X | X |
| niDCPower_ConfigurationPulseVoltageLevelRange | X | X |
| niDCPower_ConfigurationPulseVoltageLimit | X | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X | X |
| niDCPower_ConfigurationSense | Yes | Yes |
| niDCPower_ConfigurationSoftwareEdgeMeasureTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationSoftwareEdgePulseTriggerWithChannels | X | X |
| niDCPower_ConfigurationSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationSoftwareEdgeSourceTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationSoftwareEdgeStartTriggerWithChannels | Yes | Yes |
| niDCPower_ConfigurationSourceWithChannels | Yes | Yes |
| niDCPower_ConfigurationVoltageLevel | Yes | Yes |
| niDCPower_ConfigurationVoltageLevelRange | Yes | Yes |
| niDCPower_ConfigurationVoltageLimit | Yes | Yes |
| niDCPower_ConfigurationVoltageLimitRange | Yes | Yes |
| niDCPower_ConnectInternalReference | X | X |
| niDCPower_CreateAdvancedSequenceWithChannels | X | X |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | X | X |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | X | X |
| niDCPower_CreateAdvancedSequenceStepWithChannels | X | X |
| niDCPower 删除AdvancedSequenceWithChannels | X | X |
| niDCPower_Disable | Yes | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes | Yes |
| niDCPower_ExportAttributeConfigurationBuffer | Yes | Yes |
| niDCPower_ExportAttributeConfigurationFile | Yes | Yes |
| niDCPower_ExportSignalWithChannels | Yes | Yes |
| niDCPower_FetchMultiple | Yes | Yes |
| niDCPower_FetchMultipleLCR | X | X |
| niDCPower_GetAttributeViBoolean | Yes | Yes |
| niDCPower_GetAttributeVilnt32 | Yes | Yes |
| niDCPower_GetAttributeViReal64 | Yes | Yes |
| niDCPower_GetAttributeViSession | Yes | Yes |
| niDCPower_GetAttributeViString | Yes | Yes |
| niDCPower_GetCalUserInfoInfo | Yes | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes | Yes |
| niDCPower_GetChannelName | Yes | Yes |
| niDCPower_GetChannelNameFromString | Yes | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes | Yes |
| niDCPower_GetExtCalLastTemp | Yes | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |  |
| niDCPower_GetLCRCompensationData | X |  |
| niDCPower_GetLCRCustomCableCompensationData | X |  |
| niDCPower_GetNextCoercionRecord | Yes | Yes |
| niDCPower_GetNextInterchangeWarning | Yes | Yes |
| niDCPower_GetSelfCallLastDateTime | X | X |
| niDCPower_GetSelfCalLastTemp | X | X |
| niDCPower_ImportAttributeConfigurationBuffer | Yes | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes | Yes |
| niDCPower_InitExtCal | Yes | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes | Yes |
| niDCPower_InitWithOptions | Yes | Yes |
| niDCPower_Measure | Yes | Yes |
| niDCPower_MeasureMultiple | Yes | Yes |
| niDCPower_MeasureMultipleLCR | X | X |
| niDCPower.PerformLCRLoadCompensation | X | X |
| niDCPower.PerformLCROpenCompensation | X | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X | X |
| niDCPower.PerformLCRShortCompensation | X | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X | X |
| niDCPower 查询InCompliance | Yes | Yes |
| niDCPower 查询LatchedOutputCutoffState | X | X |
| niDCPower 查询MaxCurrentLimit | Yes | Yes |
| niDCPower 查询MaxVoltageLevel | Yes | Yes |
| niDCPower 查询MinCurrentLimit | Yes | Yes |
| niDCPower 查询OutputState | Yes | Yes |
| niDCPower_ReadCurrentTemperature | Yes | Yes |
| niDCPower_ResetWithChannels | Yes | Yes |
| niDCPowerRESETDevice | Yes | Yes |
| niDCPower ResetInterchangeCheck | Yes | Yes |
| niDCPower ResetWithDefaults | Yes | Yes |
| niDCPower revision_query | Yes | Yes |
| niDCPower self test | Yes | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | Yes | Yes |
| niDCPower SetAttributeViBoolean | Yes | Yes |
| niDCPower SetAttributeVInt32 | Yes | Yes |
| niDCPower SetAttributeViReal64 | Yes | Yes |
| niDCPower SetAttributeViSession | Yes | Yes |
| niDCPower SetAttributeViString | Yes | Yes |
| niDCPower SetCalUserDefinedInfo | Yes | Yes |
| niDCPower_SetSequence | Yes | Yes |
| niDCPower_WaitForEventWithChannels | Yes | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

# Functions Support tions Supported by the P ed the PXIe-4135

| Function | PXle-4135 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | Yes |
| niDCPower_close | Yes |
| niDCPower_ClosExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredLCRCompensation | X |
| niDCPower_ConfiguredLCRCustomCableCompensation | X |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | Yes1 |
| niDCPower_ConfiguredPowerLineFrequency | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLevel | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLimit | Yes |
| niDCPower_ConfigurE PulseBiasVoltageLevel | Yes |
| niDCPower_ConfigurE PulseBiasVoltageLimit | Yes |
| niDCPower_ConfigurE PulseCurrentLevel | Yes |
| niDCPower_ConfigurE PulseCurrentLevelRange | Yes |
| niDCPower_ConfigurE PulseCurrentLimit | Yes |
| niDCPower_ConfigurE PulseCurrentLimitRange | Yes |
| niDCPower_ConfigurE PulseVoltageLevel | Yes |
| niDCPower_ConfigurE PulseVoltageLimit | Yes |
| niDCPower_ConfigurE PulseVoltageLimitRange | Yes |
| niDCPower_ConfigurE PulseVoltageLimit | Yes |
| niDCPower_ConfigurE PulseVoltageLimitRange | Yes |
| niDCPower_ConfigurE PulseMeasureTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredSourceModeWithChannels | Yes |
| niDCPower_ConfiguredVoltageLevel | Yes |
| niDCPower_ConfiguredVoltageLevelRange | Yes |
| niDCPower_ConfiguredVoltageLimit | Yes |
| niDCPower_ConfiguredVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | Yes |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_ExportAttributeConfigurationBuffer | Yes |
| niDCPower_ExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateAndTime | Yes |
| niDCPower_GetSelfCallLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower.Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | Yes |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision query | Yes |
| niDCPower self test | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Support tions Supported by the P ed the PXIe-4136/4137-4136/4137

| Function | PXle-4136/4137 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | Yes |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurApertureTime | Yes |
| niDCPower_ConfigurAutoZero | X |
| niDCPower_ConfigurCurrentLevel | Yes |
| niDCPower_ConfigurationLevelRange | Yes |
| niDCPower_ConfigurationLimit | Yes |
| niDCPower_ConfigurationLimitRange | Yes |
| niDCPower_ConfigurationDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurationLCRCompensation | X |
| niDCPower_ConfigurationLCRCustomCableCompensation | X |
| niDCPower_ConfigurationOutputEnabled | Yes |
| niDCPower_ConfigurationOutputFunction | Yes |
| niDCPower_ConfigurationResistance | Yes1 |
| niDCPower_ConfigurationPowerLineFrequency | Yes |
| niDCPower_ConfigurationPulseBiasCurrentLevel | Yes |
| niDCPower_ConfigurationPulseBiasCurrentLimit | Yes |
| niDCPower_ConfigurationPulseBiasVoltageLevel | Yes |
| niDCPower_ConfigurationPulseBiasVoltageLimit | Yes |
| niDCPower_ConfigurationPulseCurrentLevel | Yes |
| niDCPower_ConfigurationPulseCurrentRange | Yes |
| niDCPower_ConfigurationPulseCurrentLimit | Yes |
| niDCPower_ConfigurationPulseCurrentLimitRange | Yes |
| niDCPower_ConfigurationPulseVoltageLevel | Yes |
| niDCPower_ConfigurationPulseVoltageLimit | Yes |
| niDCPower_ConfigurEVoltageLimit | Yes |
| niDCPower_ConfigurEVoltageLimitRange | Yes |
| niDCPower_ConfigurESense | Yes |
| niDCPower_ConfigurESoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurESoftwareEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigurESoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurESoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurESoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurEModeWithChannels | Yes |
| niDCPower_ConfigurEVoltageLevel | Yes |
| niDCPower_ConfigurEVoltageLevelRange | Yes |
| niDCPower_ConfigurEVoltageLimit | Yes |
| niDCPower_ConfigureVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | Yes |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_ExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserDefinedInfo | Yes |
| niDCPower_GetCalUserDefinedInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCalLastDateAndTime | Yes |
| niDCPower_GetSelfCalLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | Yes |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a number

# appears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Support tions Supported by the P ed the PXIe-4138/4139-4138/4139

| Function | PXIe-4138/4139 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| Function | PXle-4138/4139 |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | Yes |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeShutdownTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredLCRCustomCableCompensation | X |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | Yes1 |
| niDCPower_ConfiguredPowerLineFrequency | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLevel | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLimit | Yes |
| niDCPower_ConfiguredPulseBiasVoltageLevel | Yes |
| niDCPower_ConfiguredPulseBiasVoltageLimit | Yes |
| niDCPower_ConfiguredPulseCurrentLevel | Yes |
| niDCPower_ConfigurPulseCurrentLevelRange | Yes |
| niDCPower_ConfigurPulseCurrentLimit | Yes |
| niDCPower_ConfigurPulseCurrentLimitRange | Yes |
| niDCPower_ConfigurPulseVoltageLevel | Yes |
| niDCPower_ConfigurPulseVoltageLimitRange | Yes |
| niDCPower_ConfigurPulseVoltageLimit | Yes |
| niDCPower_ConfigurPulseVoltageLimitRange | Yes |
| niDCPower_ConfigurSense | Yes |
| niDCPower_ConfigurSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgeShutdownTriggerWithChannels | Yes |
| niDCPower_ConfigurationEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurationEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurationModeWithChannels | Yes |
| niDCPower_ConfigurationVoltageLevel | Yes |
| niDCPower_ConfigurationVoltageLevelRange | Yes |
| niDCPower_ConfigurationVoltageLimit | Yes |
| niDCPower_ConfigurationVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | Yes |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableShutdownTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_AtExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | Yes |
| niDCPower_GetSelfCalLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | Yes |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPower_SetDevice | Yes |
| niDCPower_SetInterchangeCheck | Yes |
| niDCPower_SetWithDefaults | Yes |
| niDCPower revision query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Support tions Supported by the P ed the PXIe-4140/4141/4142/4143/4144/4145 -4140/4141/4142/4143/4144/4145

| Function | PXle-4140/4141/4142/4143/4144/4145 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | X |
| niDCPower_CalAdjustCurrentMeasurement | Yes |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | X |
| niDCPower_CalAdjustVoltageMeasurement | Yes |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurApertureTime | Yes |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigurationLevel | Yes |
| niDCPower_ConfigurationLevelRange | Yes |
| niDCPower_ConfigurationLimit | Yes |
| niDCPower_ConfigurationLimitRange | Yes |
| niDCPower_ConfigurationDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigurationDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurationDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurationLCRCompensation | X |
| niDCPower_ConfigurationLCRCustomCableCompensation | X |
| niDCPower_ConfigurationEnabled | Yes |
| niDCPower_ConfigurationFunction | Yes |
| niDCPower_ConfigurationResistance | Yes1 |
| niDCPower_ConfigurationPowerLineFrequency | Yes |
| niDCPower_ConfigurationPulseBiasCurrentLevel | X |
| niDCPower_ConfigurationPulseBiasCurrentLimit | X |
| niDCPower_ConfigurationPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurePulseCurrentLimitRange | X |
| niDCPower_ConfigurePulseVoltageLevel | X |
| niDCPower_ConfigurePulseVoltageLevelRange | X |
| niDCPower_ConfigurePulseVoltageLimit | X |
| niDCPower_ConfigurePulseVoltageLimitRange | X |
| niDCPower_ConfigureSense | Yes |
| niDCPower_ConfigureSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureSoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigureSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigureSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigureSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurationModeWithChannels | Yes |
| niDCPower_ConfigurationVoltageLevel | Yes |
| niDCPower_ConfigurationVoltageLevelRange | Yes |
| niDCPower_ConfigurationVoltageLimit | Yes |
| niDCPower_ConfigurationVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes9 |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | Yes9 |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes9 |
| niDCPower 删除AdvancedSequenceWithChannels | Yes9 |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_AtExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCallLastDateAndTime | Yes |
| niDCPower_GetExtCallLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCalLastDateTime | Yes |
| niDCPower_GetSelfCalLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower.Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower_QryInCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

9 NI-DCPower 15.1 and later support this function.

Functions Support tions Supported by the P ed the PXIe-4147

| Function | PXle-4147 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigurApertureTime | Yes |
| niDCPower_ConfigurAutoZero | X |
| niDCPower_ConfigurCurrentLevel | Yes |
| niDCPower_ConfigurCurrentLevelRange | Yes |
| niDCPower_ConfigurCurrentLimit | Yes |
| niDCPower_ConfigurCurrentLimitRange | Yes |
| niDCPower_ConfigurDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurDigitalEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigurDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurLCRCompensation | X |
| niDCPower_ConfigureLCRCustomCableCompensation | X |
| niDCPower_ConfigureOutputEnabled | Yes |
| niDCPower_ConfigureOutputFunction | Yes |
| niDCPower_ConfigureOutputResistance | Yes |
| niDCPower_ConfigurePowerLineFrequency | Yes |
| niDCPower_ConfigurePulseBiasCurrentLevel | X |
| niDCPower_ConfigurePulseBiasCurrentLimit | X |
| niDCPower_ConfigurePulseBiasVoltageLevel | X |
| niDCPower_ConfigurePulseBiasVoltageLimit | X |
| niDCPower_ConfigurePulseCurrentLevel | X |
| niDCPower_ConfigurePulseCurrentLevelRange | X |
| niDCPower_ConfigurePulseCurrentLimit | X |
| niDCPower_ConfigurPulseCurrentLimitRange | X |
| niDCPower_ConfigurPulseVoltageLevel | X |
| niDCPower_ConfigurPulseVoltageLevelRange | X |
| niDCPower_ConfigurPulseVoltageLimit | X |
| niDCPower_ConfigurPulseVoltageLimitRange | X |
| niDCPower_ConfigurSense | Yes |
| niDCPower_ConfigurSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgePulseTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurSourceModeWithChannels | Yes |
| niDCPower_ConfigurationVoltageLevel | Yes |
| niDCPower_ConfigurationVoltageLevelRange | Yes |
| niDCPower_ConfigurationVoltageLimit | Yes |
| niDCPower_ConfigurationVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | Yes |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_DisportAttributeConfigurationBuffer | Yes |
| niDCPower_DisportAttributeConfigurationFile | Yes |
| niDCPower_DisportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | Yes |
| niDCPower_GetSelfCallLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower_QryInCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserInfoInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

Functions Support tions Supported by the P ed the PXIe-4150/4151-4150/4151

| Function | PXle-4150/4151 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | Yes |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigureLCRCompensation | X |
| niDCPower_ConfigureLCRCustomCableCompensation | X |
| niDCPower_ConfigureOutputEnabled | Yes |
| niDCPower_ConfigureOutputFunction | Yes |
| niDCPower_ConfigureOutputResistance | Yes |
| niDCPower_ConfigurationPowerLineFrequency | Yes |
| niDCPower_ConfigurationPulseBiasCurrentLevel | X |
| niDCPower_ConfigurationPulseBiasCurrentLimit | X |
| niDCPower_ConfigurationPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLevel | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE Sense | Yes |
| niDCPower_ConfigurE SoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurE SourceModeWithChannels | Yes |
| niDCPower_ConfigurEVoltageLevel | Yes |
| niDCPower_ConfigurEVoltageLevelRange | Yes |
| niDCPower_ConfigurEVoltageLimit | Yes |
| niDCPower_ConfigurEVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_createAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserDefinedInfo | Yes |
| niDCPower_GetCalUserDefinedInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCallLastDateTime | Yes |
| niDCPower_GetExtCallLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateAndTime | Yes |
| niDCPower_GetSelfCalLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_ InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Functions Support tions Supported by the P ed the PXIe-4154

| Function | PXle-4154 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | Yes |
| niDCPower_CalAdjustInternalReference | X |
| niDCPower_CalAdjustOutputResistance | Yes |
| niDCPower_CalAdjustResidualCurrentOffset | X |
| niDCPower_CalAdjustResidualVoltageOffset | X |
| niDCPower_CalAdjustVoltageLevel | Yes |
| niDCPower_CalAdjustVoltageMeasurement | Yes |
| niDCPower_CalSelfCalibrate | X |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | X |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredLCRCompensation | X |
| niDCPower_ConfiguredLCRCustomCableCompensation | X |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | Yes2 |
| niDCPower_ConfiguredPowerLineFrequency | X |
| niDCPower_ConfiguredPulseBiasCurrentLevel | X |
| niDCPower_ConfiguredPulseBiasCurrentLimit | X |
| niDCPower_ConfiguredPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLevel | X |
| niDCPower_ConfigurationPulseVoltageLevelRange | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X |
| niDCPower_ConfigurationSense | Yes |
| niDCPower_ConfigurationSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurationSoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredSourceModeWithChannels | Yes |
| niDCPower_ConfiguredVoltageLevel | Yes |
| niDCPower_ConfiguredVoltageLevelRange | Yes |
| niDCPower_ConfiguredVoltageLimit | Yes |
| niDCPower_ConfiguredVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | X |
| niDCPower_CreateAdvancedSequenceWithChannels | X |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | X |
| niDCPower_CreateAdvancedSequenceStepWithChannels | X |
| niDCPower 删除AdvancedSequenceWithChannels | X |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_ExportAttributeConfigurationBuffer | Yes |
| niDCPower_ExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | X |
| niDCPower_GetSelfCallLastTemp | X |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询lnCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower self test | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower SetAttributeViBoolean | Yes |
| niDCPower SetAttributeVilnt32 | Yes |
| niDCPower SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

Functions Support tions Supported by the P ed the PXIe-4162/4163 -4162/4163

| Function | PXle-4162/4163 |
| --- | --- |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | Yes |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | Yes |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | X |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigureLCRCompensation | X |
| niDCPower_ConfigureLCRCustomCableCompensation | X |
| niDCPower_ConfigureOutputEnabled | Yes |
| niDCPower_ConfigureOutputFunction | Yes |
| niDCPower_ConfigureOutputResistance | X |
| niDCPower_ConfigurationPowerLineFrequency | Yes |
| niDCPower_ConfigurationPulseBiasCurrentLevel | X |
| niDCPower_ConfigurationPulseBiasCurrentLimit | X |
| niDCPower_ConfigurationPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLevel | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurE PulseVoltageLimitRange | X |
| niDCPower_ConfigurE Sense | Yes |
| niDCPower_ConfigurE SoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfigurE SoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfigurE SoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfigurE SourceModeWithChannels | Yes |
| niDCPower_ConfigurEVoltageLevel | Yes |
| niDCPower_ConfigurEVoltageLevelRange | Yes |
| niDCPower_ConfigurEVoltageLimit | Yes |
| niDCPower_ConfigurEVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | Yes |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_createAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower_Disable | Yes |
| niDCPower_DisablePulseTriggerWithChannels | X |
| niDCPower_DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_DisableSourceTriggerWithChannels | Yes |
| niDCPower_DisableStartTriggerWithChannels | Yes |
| niDCPower_AtExportAttributeConfigurationBuffer | Yes |
| niDCPower_AtExportAttributeConfigurationFile | Yes |
| niDCPower_ExportSignalWithChannels | Yes |
| niDCPower_FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | X |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserDefinedInfo | Yes |
| niDCPower_GetCalUserDefinedInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCallLastDateTime | Yes |
| niDCPower_GetExtCallLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | X |
| niDCPower_GetLCRCompensationData | X |
| niDCPower_GetLCRCustomCableCompensationData | X |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateAndTime | Yes |
| niDCPower_GetSelfCallLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_ InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower_MeasureMultiple | Yes |
| niDCPower_MeasureLCR | X |
| niDCPower.PerformLCRLoadCompensation | X |
| niDCPower.PerformLCROpenCompensation | X |
| niDCPower.PerformLCROpenCustomCableCompensation | X |
| niDCPower.PerformLCRShortCompensation | X |
| niDCPower.PerformLCRShortCustomCableCompensation | X |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower ReadCurrentTemperature | Yes |
| niDCPower ResetWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower_self_test | Yes |
| niDCPower_SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower_SetAttributeViBoolean | Yes |
| niDCPower_SetAttributeVilnt32 | Yes |
| niDCPower_SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes |
| niDCPower_WaitForEventWithChannels | Yes |

# Functions Support tions Supported by the P ed the PXIe-4190

| Function | PXIe-4190 |
| --- | --- |
| Function | PXle-4190 |
| niDCPower_AbortWithChannels | Yes |
| niDCPower_CalAdjustCurrentLimit | X |
| niDCPower_CalAdjustCurrentMeasurement | X |
| niDCPower_CalAdjustInternalReference | Yes |
| niDCPower_CalAdjustOutputResistance | X |
| niDCPower_CalAdjustResidualCurrentOffset | Yes |
| niDCPower_CalAdjustResidualVoltageOffset | Yes |
| niDCPower_CalAdjustVoltageLevel | X |
| niDCPower_CalAdjustVoltageMeasurement | X |
| niDCPower_CalSelfCalibrate | Yes |
| niDCPower_ChangeExtCalPassword | Yes |
| niDCPower_ClearInterchangeWarnings | Yes |
| niDCPower_ClearLatchedOutputCutoffState | X |
| niDCPower_close | Yes |
| niDCPower_CloseExtCal | Yes |
| niDCPower_CommitWithChannels | Yes |
| niDCPower_ConfigureApertureTime | Yes |
| niDCPower_ConfigureAutoZero | X |
| niDCPower_ConfigureCurrentLevel | Yes |
| niDCPower_ConfigureCurrentLevelRange | Yes |
| niDCPower_ConfigureCurrentLimit | Yes |
| niDCPower_ConfigureCurrentLimitRange | Yes |
| niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredigitalEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredigitalEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredLCRCompensation | Yes |
| niDCPower_ConfiguredLCRCustomCableCompensation | Yes |
| niDCPower_ConfiguredOutputEnabled | Yes |
| niDCPower_ConfiguredOutputFunction | Yes |
| niDCPower_ConfiguredOutputResistance | X |
| niDCPower_ConfiguredPowerLineFrequency | Yes |
| niDCPower_ConfiguredPulseBiasCurrentLevel | X |
| niDCPower_ConfiguredPulseBiasCurrentLimit | X |
| niDCPower_ConfiguredPulseBiasVoltageLevel | X |
| niDCPower_ConfigurationPulseBiasVoltageLimit | X |
| niDCPower_ConfigurationPulseCurrentLevel | X |
| niDCPower_ConfigurationPulseCurrentLevelRange | X |
| niDCPower_ConfigurationPulseCurrentLimit | X |
| niDCPower_ConfigurationPulseCurrentLimitRange | X |
| niDCPower_ConfigurationPulseVoltageLevelRange | X |
| niDCPower_ConfigurationPulseVoltageLevelRange | X |
| niDCPower_ConfigurationPulseVoltageLimit | X |
| niDCPower_ConfigurationPulseVoltageLimitRange | X |
| niDCPower_ConfigurationSense | Yes |
| niDCPower_ConfigurationSoftwareEdgeMeasureTriggerWithChannels | Yes |
| niDCPower_ConfigurationSoftwareEdgePulseTriggerWithChannels | X |
| niDCPower_ConfiguredSoftwareEdgeSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeSourceTriggerWithChannels | Yes |
| niDCPower_ConfiguredSoftwareEdgeStartTriggerWithChannels | Yes |
| niDCPower_ConfiguredSourceModeWithChannels | Yes |
| niDCPower_ConfiguredVoltageLevel | Yes |
| niDCPower_ConfiguredVoltageLevelRange | Yes |
| niDCPower_ConfiguredVoltageLimit | Yes |
| niDCPower_ConfiguredVoltageLimitRange | Yes |
| niDCPower_ConnectInternalReference | Yes |
| niDCPower_CreateAdvancedSequenceWithChannels | Yes |
| niDCPower_createAdvancedSequenceCommitStepWithChannels | Yes |
| niDCPower_CreateAdvancedSequenceStepWithChannels | Yes |
| niDCPower 删除AdvancedSequenceWithChannels | Yes |
| niDCPower Disable | Yes |
| niDCPower DisablePulseTriggerWithChannels | X |
| niDCPower DisableSequenceAdvanceTriggerWithChannels | Yes |
| niDCPower DisableSourceTriggerWithChannels | Yes |
| niDCPower DisableStartTriggerWithChannels | Yes |
| niDCPower ExportAttributeConfigurationBuffer | Yes |
| niDCPower ExportAttributeConfigurationFile | Yes |
| niDCPower ExportSignalWithChannels | Yes |
| niDCPower FetchMultiple | Yes |
| niDCPower_FetchMultipleLCR | Yes |
| niDCPower_GetAttributeViBoolean | Yes |
| niDCPower_GetAttributeVilnt32 | Yes |
| niDCPower_GetAttributeViReal64 | Yes |
| niDCPower_GetAttributeViSession | Yes |
| niDCPower_GetAttributeViString | Yes |
| niDCPower_GetCalUserInfoInfo | Yes |
| niDCPower_GetCalUserInfoMaxSize | Yes |
| niDCPower_GetChannelName | Yes |
| niDCPower_GetChannelNameFromString | Yes |
| niDCPower_GetExtCalLastDateAndTime | Yes |
| niDCPower_GetExtCalLastTemp | Yes |
| niDCPower_GetExtCalRecommendedInterval | Yes |
| niDCPower_GetLCRCompensationLastDateAndTime | Yes |
| niDCPower_GetLCRCompensationData | Yes |
| niDCPower_GetLCRCustomCableCompensationData | Yes |
| niDCPower_GetNextCoercionRecord | Yes |
| niDCPower_GetNextInterchangeWarning | Yes |
| niDCPower_GetSelfCallLastDateTime | Yes |
| niDCPower_GetSelfCallLastTemp | Yes |
| niDCPower_ImportAttributeConfigurationBuffer | Yes |
| niDCPower_ImportAttributeConfigurationFile | Yes |
| niDCPower_InitExtCal | Yes |
| niDCPower_InitializeWithIndependentChannels | Yes |
| niDCPower_InitiateWithChannels | Yes |
| niDCPower_Measure | Yes |
| niDCPower.MeasureMultiple | Yes |
| niDCPower.MeasureMultipleLCR | Yes |
| niDCPower.PerformLCRLoadCompensation | Yes |
| niDCPower.PerformLCROpenCompensation | Yes |
| niDCPower.PerformLCROpenCustomCableCompensation | Yes |
| niDCPower.PerformLCRShortCompensation | Yes |
| niDCPower.PerformLCRShortCustomCableCompensation | Yes |
| niDCPower 查询InCompliance | Yes |
| niDCPower 查询LatchedOutputCutoffState | X |
| niDCPower 查询MaxCurrentLimit | Yes |
| niDCPower 查询MaxVoltageLevel | Yes |
| niDCPower 查询MinCurrentLimit | Yes |
| niDCPower 查询OutputState | Yes |
| niDCPower_ReadCurrentTemperature | Yes |
| niDCPowerRESETWithChannels | Yes |
| niDCPower ResetDevice | Yes |
| niDCPower ResetInterchangeCheck | Yes |
| niDCPower ResetWithDefaults | Yes |
| niDCPower revision_query | Yes |
| niDCPower self test | Yes |
| niDCPower SendSoftwareEdgeTriggerWithChannels | Yes |
| niDCPower SetAttributeViBoolean | Yes |
| niDCPower SetAttributeVilnt32 | Yes |
| niDCPower SetAttributeViReal64 | Yes |
| niDCPower_SetAttributeViSession | Yes |
| niDCPower_SetAttributeViString | Yes |
| niDCPower_SetCalUserDefinedInfo | Yes |
| niDCPower_SetSequence | Yes9 |
| niDCPower_WaitForEventWithChannels | Yes3 |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 The default value is TRUE if you use theniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is FALSE.

2 Channel 0.

3 NIDCPOWER_VAL_REMOTE is the only valid value.

4 Channel 1.

5 Software timed.

6 The default value for channel 1 is NIDCPOWER_VAL_LOW.

7 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

8 NIDCPOWER_VAL_AUXILIARY is the only valid value.

9 This function is supported only if NIDCPOWER_ATTR_INSTRUMENT_MODE attributeis set to NIDCPOWER_VAL_SMU_PS.

# Utility

# Syntax

ViStatus _VI_FUNC niDCPower_ClearError(ViSession vi)

# Remarks

Maintaining the error information separately for each thread is useful if the user doesnot have a session handle to pass to the niDCPower_GetError function, which occurswhen a call to niDCPower_InitializeWithChannels fails.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_error_message(ViSession vi,ViStatus errorCode, ViChar

errorMessage[IVI_MAX_MESSAGE_BUF_SIZE])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannel function. |
| errorCode | [in] | ViStatus | Specifies the status parameter that is returned from any of the NI-DCPower functions. |
| errorMessage | [out] | ViChar[IVI_MAX_MESSAGEBUF_SIZE] | Returns the user-readable message string that corresponds to the status code you specify. You must pass a ViChar array with at least 256 bytes. |

# Syntax

ViStatus _VI_FUNC niDCPower_error_query(ViSession vi,ViInt32 *errorCode, ViCharerrorMessage[IVI_MAX_MESSAGE_BUF_SIZE])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannel function. |
| errorCode | [out] | Vilnt32 * | Returns the error code read from the instrument's error queue. |
| errorCode | [out] | ViChar[IVI_MAX_MESSAGEBUF_SIZE] | Returns the error message string read from the instrument's error message queue. |

# niDCPower_GetError

Retrieves and then clears the IVI error information for the session or the currentexecution thread unless bufferSize is 0, in which case the function does not clear theerror information. By passing 0 for the buffer size, you can ascertain the buffer sizerequired to get the entire error description string and then call the function again witha sufficiently large buffer size.

# Syntax

ViStatus _VI_FUNC niDCPower_GetError(ViSession vi, ViStatus*code, ViInt32 bufferSize, ViChar description[])

# Remarks

If the user specifies a valid IVI session for vi, this function retrieves and then clears theerror information for the session. If the user passes VI_NULL for vi, this functionretrieves and then clears the error information for the current execution thread. If vi isan invalid session, the function does nothing and returns an error. Normally, the errorinformation describes the first error that occurred since the user last calledniDCPower_GetError or niDCPower_ClearError.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| code | [out] | ViStatus* | Returns the error code for the session or execution thread. |
| bufferSize | [in] | Vilnt32 | Specifies the number of bytes in the ViChar array you specify for description. If the error description, including the terminating NUL byte, contains more bytes than you indicate in this attribute, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0 for this attribute, you can pass VI_NULL for description. |
| description | [out] | ViChar[] | Returns the error description for the IVI session or execution thread. If there is no description, the function returns an empty string. The buffer must contain at least as many elements as the value you specify with bufferSize. If the error description, including the terminating NUL byte, contains more bytes than you indicate with bufferSize, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0 for bufferSize, you can pass VI_NULL for this attribute. |

# Syntax

ViStatus _VI_FUNCniDCPower_ExportAttributeConfigurationBuffer(ViSession vi,ViInt32 size, ViAddr configuration)

# Remarks

You can export and import supported configurations only between NI-DCPowerdevices with identical model numbers and the same number of configured channels.

This function verifies that the attributes you have configured for the session are valid.If the configuration is invalid, NI-DCPower returns an error.

# IVI Functions

# Syntax

ViStatus _VI_FUNCniDCPower_ClearInterchangeWarnings(ViSession vi)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureOVP(ViSession vi,ViConstString channelName, ViBoolean enabled, ViReal64limit)

# Remarks

When the enabled parameter is FALSE, the limit parameter does not affect theinstrument's behavior, and the driver ignores the limit parameter.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| enabled | [in] | ViBoolean | Pass whether you want to enable or disable the OVP limit. The driver uses this value to set the NIDCPOWER_ATTR_OVP_ENABLED attribute. Refer to the attribute documentation for more information. |
| limit | [in] | ViReal64 | Pass the overvoltage protection limit you want to use. The driver uses this value to set the NIDCPOWER_ATTR_OVP_LIMIT attribute. Refer to the attribute documentation for more information. |

# Syntax

ViStatus _VI_FUNC niDCPower_GetChannelName(ViSession vi,ViInt32 index, ViInt32 bufferSize, ViChar channelName[])

# Remarks

Use this function to identify the fully qualified names of channels. Fully qualifiedchannel names are required to access channels in multi-instrument sessions.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| index | [in] | Vilnt32 | Specifies which channel name to return. The index values begin at 1. |
| bufferSize | [in] | Vilnt32 | Specifies the number of bytes in the ViChar array you specify for channelName. If the channelName, including the terminating NUL byte, contains more bytes than you indicate in this attribute, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0, you can pass VI_NULL for channelName. |
| channelName | [out] | ViChar[] | Returns a string of the channel name(s). |

# Syntax

ViStatus _VI_FUNCniDCPower_GetChannelNameFromString(ViSession vi,ViConstString index, ViInt32 bufferSize, ViCharchannelName[])

# Remarks

Use this function to identify the fully qualified names of channels. Fully qualifiedchannel names are required to access channels in multi-instrument sessions.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| index | [in] | ViConstString | Specifies an index list for the channels in the session. Valid values are from zero to the total number of channels in the session minus one. The index string can be one of the following formats:  · A comma-separated list - for example, "0,2,3,1"  · A range using a hyphen - for example, "0-3"  · A range using a colon - for example, "0:3" You can combine comma-separated lists and ranges that use a hyphen or colon. Both out-of-order and repeated indices are supported ("2,3,0", "1,2,2,3"). White space characters, including spaces, tabs, feeds, and carriage returns, are allowed between characters. Ranges can be incrementing or decrementing. |
| bufferSize | [in] | Vilnt32 | Specifies the number of bytes in the ViChar array you specify for channelName. If the channelName, including the terminating NUL byte, contains more bytes than you indicate in this attribute, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0, you can pass VI_NULL for channelName. |
| channelName | [out] | ViChar[] | Returns a string of the channel name(s). |

# Syntax

ViStatus _VI_FUNC niDCPower_GetNextCoercionRecord(ViSessionvi, ViInt32 bufferSize, ViChar coercionRecord[])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| bufferSize | [in] | Vilnt32 | Specifies the number of bytes in the ViChar array you specify for coercionRecord. If the next coercion record string, including the terminating NUL byte, contains more bytes than you indicate in this attribute, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0, you can pass VI_NULL for coercionRecord. |
| coercionRecord | [out] | ViChar[] | Returns the next coercionRecord for the IVI session. If there are no coercionRecords, the function returns an empty string. |

# Syntax

ViStatus _VI_FUNCniDCPower_GetNextInterchangeWarning(ViSession vi, ViInt32bufferSize, ViChar interchangeWarning[])

# Remarks

NI-DCPower performs interchangeability checking when theNIDCPOWER_ATTR_INTERCHANGE_CHECK attribute is set to VI_TRUE. This functionreturns an empty string in warning if no interchangeability warnings remain for thesession. In general, NI-DCPower generates interchangeability warnings when anattribute that affects the behavior of the device is in a state that you did not specify.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| bufferSize | [in] | Vilnt32 | Specifies the number of bytes in the ViChar array you specify for interchangeWarning. If the next interchangeability warning string, including the terminating NUL byte, contains more bytes than you indicate in this attribute, the function copies (buffer size - 1) bytes into the buffer, places an ASCII NUL byte at the end of the buffer, and returns the buffer size you must pass to get the entire value. For example, if the value is 123456 and the buffer size is 4, the function places 123 into the buffer and returns 7. If you pass 0, you can pass VI_NULL for interchangeWarning. |
| interchangeWarning | [out] | ViChar[] | Returns the next interchange warning for the IVI session. If there are no interchange warnings, the function returns an empty string. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_InvalidateAllAttributes(ViSession vi)
```

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_ResetInterchangeCheck(ViSessionvi)

# Remarks

You can use this function to test for such cases. After you call this function, theinterchangeability checking algorithms in the specific driver ignore all previousconfiguration operations. By calling this function at the beginning of a test module,you can determine whether the test module has dependencies on the operation ofpreviously executed test modules.

This function does not clear the interchangeability warnings from the list of previouslyrecorded interchangeability warnings. If you want to guarantee that theniDCPower_GetNextInterchangeWarning function only returns thoseinterchangeability warnings that are generated after calling this function, you mustclear the list of interchangeability warnings. You can clear the interchangeabilitywarnings list by repeatedly calling the niDCPower_GetNextInterchangeWarningfunction until no more interchangeability warnings are returned. If you are notinterested in the content of those warnings, you can call theniDCPower_ClearInterchangeWarnings function.

# Note

niDCPower_GetNextInterchangeWarning does not mark any attributes for aninterchange check.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_ResetWithDef tWithDefaults

Resets all channels in the session to a known state. This function disables powergeneration, resets session attributes to their default values, commits the sessionattributes, and leaves the session in the Running state. In addition to exhibiting thebehavior of the niDCPower_ResetWithChannels function, this function can assign user-defined default values for configurable attributes from the IVI configuration.

# Syntax

ViStatus _VI_FUNC niDCPower_ResetWithDefaults(ViSession vi)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_revision_query(ViSession vi,ViChar instrumentDriverRevision[IVI_MAX_MESSAGE_BUF_SIZE],ViChar firmwareRevision[IVI_MAX_MESSAGE_BUF_SIZE])

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument from the niDCPower_InitializeWithIndependent function. |
| instrumentDriverRevision | [out] | ViChar[IVI_MAX_MESSAGE(buf_SIZE] | Returns the driver revision information in multi-instrument sessions, this error if any instruments have different revisions. In this case, instead of using read the NIDCPOWER_ATTR_INSTRUMENT attribute for the instrument you see |
| firmwareRevision | [out] | ViChar[IVI_MAX_MESSAGE(buf_SIZE] | Returns firmware revision information you are using. The size of this array of bytes. |

# Locking

# Syntax

ViStatus _VI_FUNC niDCPower_LockSession(ViSession vi,ViBoolean *callerHasLock)

# Remarks

Other threads may have obtained a lock on this session for the following reasons:

• The application called the niDCPower_LockSession function.

• A call to NI-DCPower locked the session.

• A call to the IVI engine locked the session.

• After a call to the niDCPower_LockSession function returns successfully, no otherthreads can access the device session until you call the niDCPower_UnlockSessionfunction.

• Use the niDCPower_LockSession function and the niDCPower_UnlockSessionfunction around a sequence of calls to instrument driver functions if you requirethat the device retain its settings through the end of the sequence.

You can safely make nested calls to the niDCPower_LockSession function within thesame thread. To completely unlock the session, you must balance each call to theniDCPower_LockSession function with a call to the niDCPower_UnlockSessionfunction. If, however, you use Caller_Has_Lock in all calls to theniDCPower_LockSession and niDCPower_UnlockSession function within a function,the IVI Library locks the session only once within the function regardless of the numberof calls you make to the niDCPower_LockSession function. This behavior allows you tocall the niDCPower_UnlockSession function just once at the end of the function.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| callerHasLock | [out] | ViBoolean* | This parameter is optional. If you do not want to use this parameter, pass VI_NULL.Use this parameter in complex functions to keep track of whether you obtain a lock and therefore need to unlock the session. Pass the address of a local ViBoolean variable. In the declaration of the local variable, initialize it to VIFalse.Pass the address of the same local variable to any other calls you make to the niDCPower_LockSession function or the niDCPower_UlockSession function in the same function.The parameter is an input/output parameter. The niDCPower_LockSession and niDCPower_UlockSession functions each inspect the current value and take the following actions.If the value is VI:true, the niDCPower_LockSession function does not lock the session again.If the value is VI=False, the niDCPower_LockSession function obtains the lock and sets the value of the parameter to VI:true.If the value is VI,False, the niDCPower_UlockSession function does not attempt to unlock the session.If the value is VI:true, the niDCPower_UlockSession function releases the lock and sets the value of the parameter to VI,False.Thus, you can, call the niDCPower_UlockSession function at the end of your function without worrying about whether you actually have the lock, as shown in the following example. ViStatus TestFunc (ViSession vi, ViInt32 flags) {ViStatus error = VI_SUCCESS;ViBoolean haveLock = VIFalse;if (flags & BIT_1){viCheckErr( niDCPower_LockSession(vi,&haveLock));viCheckErr( TakeAction1(vi));if (flags & BIT_2){viCheckErr( niDCPower_Undefession(vi,&haveLock));viCheckErr( TakeAction2(vi));viCheckErr( niDCPower_LockSession(vi,&haveLock);}if (flags & BIT_3){viCheckErr( TakeAction3(vi));}Error:/*At this point, you cannot really be sure that you have the lock. Fortunately, the haveLock variable takes care of that for you.*/niDCPower_Undefession(vi, &haveLock);return error;} |

# Syntax

ViStatus _VI_FUNC niDCPower_UnlockSession(ViSession vi,ViBoolean *callerHasLock)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| callerHasLock | [out] | ViBoolean * | This attribute is optional. If you do not want to use this attribute, pass VI_NULL. Use this attribute in complex functions to keep track of whether you obtain a lock and therefore need to unlock the session. Pass the address of a local ViBoolean variable. In the declaration of the local variable, initialize it to VI_FALSE. Pass the address of the same local variable to any other calls you make to niDCPower_LockSession or niDCPower_Undefinition in the same function. The parameter is an input/output parameter. niDCPower_LockSession and niDCPower_Undefinition each inspect the current value and take the following actions. · If the value is VI:true, niDCPower_LockSession does not lock the session again. · If the value is VIFalse, niDCPower_LockSession obtains the lock and sets the value of the parameter to VI:true. · If the value is VIFalse, niDCPower_Undefinition does not attempt to unlock the session. · If the value is VI:true, niDCPower_Undefinition releases the lock and sets the value of the parameter to VIfalse. Thus, you can, call niDCPower_Undefinition at the end of your function without worrying about whether you actually have the lock, as the following example shows. ViStatus TestFunc (ViSession vi, ViInt32 flags) {   ViStatus error = VI_SUCCESS;   ViBoolean haveLock = VI_FALSE;   if (flags & BIT_1) {     viCheckErr( niDCPower_LockSession(vi, &haveLock));     viCheckErr( TakeAction1(vi));    if (flags & BIT_2) {viCheckErr( niDCPower UngLockSession(vi, &haveLock));viCheckErr( TakeAction2(vi));viCheckErr( niDCPower_LockSession(vi, &haveLock));}if (flags & BIT_3)viCheckErr( TakeAction3(vi));Error:/*At this point, you cannot really be sure that you have the lock. Fortunately, the haveLock variable takes care of that for you.*/niDCPower UngLockSession(vi, &haveLock);return error;} |

# niDCPower_Disable

This function performs the same actions as the niDCPower_ResetWithChannelsfunction, except that this function also immediately sets theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute to VI_FALSE.

# Syntax

ViStatus _VI_FUNC niDCPower_Disable(ViSession vi)

# Remarks

This function opens the output relay on instruments that have an output relay.

This function applies to all channels and instruments in the session.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC niDCPower_reset(ViSession vi)

# Remarks

Resets the device to a known state. This function disables power generation, resetssession attributes to their default values, commits the session attributes, and leavesthe session in the Uncommitted state. Refer to the Programming States topic for moreinformation about NI-DCPower software states.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_ResetDevice

Resets all instruments in the session to a known state. The function disables powergeneration, resets all attributes for all instruments included in the session to theirdefault values, clears errors such as overtemperature and unexpected loss of auxiliarypower, commits the instrument attributes, and leaves the instrument(s) in theUncommitted state. This function also performs a hard reset on the instrument(s) anddriver software. This function has the same functionality as using reset inMeasurement & Automation Explorer (MAX).

# Syntax

ViStatus _VI_FUNC niDCPower_ResetDevice(ViSession vi)

# Remarks

This also opens the output relay on instruments that have an output relay.

Note

NI-DCPower uses the terms "source" and "output". However, while sinkingwith electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Related topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_ResetWithChannels

Resets the specified channel(s) to a known state. This function disables powergeneration, resets channel attributes to their default values, commits the channelattributes, and leaves the channel(s) in the Uncommitted state.

# Syntax

ViStatus _VI_FUNC niDCPower_ResetWithChannels(ViSession vi,ViConstString channelName)

# Remarks

Related topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# niDCPower_self_test

Performs the device self-test routine and returns the test result(s). Calling this functionimplicitly calls the niDCPower_ResetWithChannels function.

# Syntax

ViStatus _VI_FUNC niDCPower_self_test(ViSession vi, ViInt16*selfTestResult, ViCharselfTestMessage[IVI_MAX_MESSAGE_BUF_SIZE])

# Remarks

When calling this function with the PXIe-4162/4163, specify all channels of yourPXIe-4162/4163 with the resourceName input of theniDCPower_InitializeWithIndependentChannels function. You cannot self test a subsetof PXIe-4162/4163 channels.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
|  |  |  |
| Self-Test Code | Description |  |
| 0 | Self test passed. |  |
| 1 | Self test failed. |  |
|  |  |  |
| selfTestMessage | [out] | ViChar[IVI_MAX_MESSAGEBUF_SIZE] |

# nidcpowerObsolete.h

# Functions

# Obsoleted Functions

# Syntax

```csv
ViStatus_VI FUNC  
niDCPower_ConfigureLCRCustomCableCompensation(ViSession vi, ViConstString channelName, ViInt32  
customCableCompensationDataSize, ViAddr  
customCableCompensationData)
```

# Remarks

Applies previously generated open and short custom cable compensation data to LCRmeasurements.

This function applies custom cable compensation data when you have setNIDCPOWER_ATTR_CABLE_LENGTH to NIDCPOWER_VAL_CUSTOM_AS_CONFIGURED.

Call this function after you have obtained custom cable compensation data. IfNIDCPOWER_ATTR_LCR_SHORT_CUSTOM_CABLE_COMPENSATION_ENABLED is set totrue, you must generate data with both

niDCPower_PerformLCROpenCustomCableCompensation andniDCPower_PerformLCRShortCustomCableCompensation; if false, you must only useniDCPower_PerformLCROpenCustomCableCompensation, and NI-DCPower usesdefault short data.

Call niDCPower_GetLCRCustomCableCompensationData and pass the custom cablecompensation data to this function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannel function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| customCableCompensationDataSize | [in] | ViInt32 | Specifies the size, in bytes, of customCableCompensationData to apply. |
| customCableCompensationData | [in] | ViAddr | The open and short custom cable compensation data to apply. |

# niDCPower_ConfigureOutputRange

Configures either the voltage level range or the current limit range. If range type isVoltage, the voltage level range is configured. If range type is Current, the current limitrange is configured.

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureOutputRange(ViSessionvi, ViConstString channelName, ViInt32 rangeType, ViReal64range)

# Remarks

This function does not configure any of the DC Current output function settings. Referto the niDCPower_ConfigureOutputFunction function for more information.

This is a deprecated function. You must use the following functions instead oftheniDCPower_ConfigureOutputRange function:

niDCPower_ConfigureVoltageLevel

niDCPower_ConfigureVoltageLimit

niDCPower_ConfigureCurrentLevel

Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
| channelName | [in] | ViConstString |  |  |  |
|  |  |  |  |  |  |
| Name | Value | Description |  |  |  |
| NIDCPOWER_VAL_RANGE_CURRENT | 0 (0x0) | NI- DCPower configures the current range. |  |  |  |
| NIDCPOWER_VAL_RANGE_VOLTAGE | 1 (0x1) | NI- DCPower |  |  |  |
|  |  |  | Name | Value | Description configures the voltage range. |
| range | [in] | ViReal64 |  |  |  |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_GetLCRCustomCableCompensationData(ViSession vi, ViConstString channelName, ViInt32  
customCableCompensationDataSize, ViAddr  
customCableCompensationData)
```

# Remarks

Collects previously generated open and short custom cable compensation data so youcan then apply it to LCR measurements withniDCPower_ConfigureLCRCustomCableCompensation.

Call this function after you have obtained open and short custom cable compensationdata. Pass the custom cable compensation data toniDCPower_ConfigureLCRCustomCableCompensation.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannel function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| customCableCompensationDataSize | [in] | VInt32 | Specifies the size, in bytes, of customCableCompensationData to retrieve. If you enter 0, this function returns the needed size. |
| customCableCompensationData | [out] | ViAddr | The open and short custom cable compensation data to retrieve. |

# niDCPower_init

This function is deprecated. Use niDCPower_InitializeWithIndependentChannelsinstead.

# Syntax

ViStatus _VI_FUNC niDCPower_init(ViRsrc resourceName,ViBoolean idQuery, ViBoolean resetDevice, ViSession *vi)

# Remarks

Creates a new IVI instrument driver session to the device specified in resourceNameand returns a session handle you use to identify the device in all subsequent NI-DCPower function calls. This function also sends initialization commands to set thedevice to the state necessary for the operation of NI-DCPower.

To place the device in a known start-up state when creating a new session, setresetDevice to VI_TRUE. This action is equivalent to using the niDCPower_resetfunction.

To open a session and leave the device in its existing configuration without passingthrough a transitional output state, set resetDevice to VI_FALSE, and immediately callthe niDCPower_Abort function. Then configure the device as in the previous session,changing only the desired settings, and then call the niDCPower_Initiate function.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| resourceName Specifies whether the device is queried to determine if the device is a valid instrument for NI-DCPower. Defined Values: VI_true (1) Perform ID query. VIFalse (0) Do not perform ID query. | [in] | ViRsrc | Specifies the resourceName assigned by Measurement & Automation Explorer (MAX), for example "PXI1Slot3" where "PXI1Slot3" is an instrument's resourceName. resourceName can also be a logical IVI name. |
| Specifies whether to reset the device during the initialization procedure. Defined Values: VI_true (1) Reset the device. VI,False (0) Do not reset the device. |  |  |  |
|  |  |  |  |
| vi | [out] | ViSession* | Returns a session handle that you use to identify the session in all subsequent NI-DCPower function calls. |

# niDCPower_InitWithOptions

This function is deprecated. Use niDCPower_InitializeWithIndependentChannelsinstead.

# Syntax

ViStatus _VI_FUNC niDCPower_InitWithOptions(ViRsrcresourceName, ViBoolean idQuery, ViBoolean resetDevice,ViConstString optionString, ViSession *vi)

# Remarks

Creates a new IVI instrument driver session to the device specified in resourceNameand returns a session handle you use to identify the device in all subsequent NI-DCPower function calls. With this function, you can optionally set the initial state of thefollo• wing session attributes:

# NIDCPOWER_ATTR_SIMULATE

NIDCPOWER_ATTR_DRIVER_SETUP

NIDCPOWER_ATTR_RANGE_CHECK

NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS

NIDCPOWER_ATTR_CACHE

NIDCPOWER_ATTR_RECORD_COERCIONS

This function also sends initialization commands to set the device to the statenecessary for NI-DCPower to operate.

To place the device in a known start-up state when creating a new session, setresetDevice to VI_TRUE. This action is equivalent to using the niDCPower_resetfunction.

To open a session and leave the device in its existing configuration without passingthrough a transitional output state, set resetDevice to VI_FALSE, and immediately callthe niDCPower_Abort function. Then configure the device as in the previous sessionchanging only the desired settings, and then call the niDCPower_Initiate function.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| resourceName | [in] | ViRsrc | Specifies the resourceName assigned by Measurement & Automation Explorer (MAX), for example "PXI1Slot3" where "PXI1Slot3" is an instrument's resourceName. resourceName can also be a logical IVI name. |
| idQuery | [in] | ViBoolean | Specifies whether the device is queried to determine if the device is a valid instrument for NI-DCPower. |
| resetDevice | [in] | ViBoolean | Specifies whether to reset the device during the initialization procedure. |
| optionString | [in] | ViConstString | Specifies the initial value of certain attributes for the session. The syntax for optionString is a list of attributes with an assigned value where 1 is VI_true and 0 is VIFalse. Each attribute/value combination is delimited with a comma, as shown in the following example:"Simulate=0,RangeCheck=1,QueryInstrStatus=0,Cache=1"If you do not wire this input or pass an empty string, the session assigns the default values, shown in the example, for these attributes. You do not have to specify a value for all the attributes. If you do not specify a value for an attribute, the default value is used.For more information about simulating a device, refer to Simulating an Instrument. |
| vi | [out] | ViSession* | Returns a handle that you use to identify the device in all subsequent NI-DCPower function calls. |

# Unsupported Functions

# Syntax

ViStatus _VI_FUNCniDCPower_CalAdjustACImpedanceReference(ViSession vi,ViConstString channelName, ViReal64 actualResistance,ViInt32 cableLength)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Deprecated. |
| channelName | [in] | ViConstString | Deprecated. |
| actualResistance | [in] | ViReal64 | Deprecated. |
| cableLength | [in] | ViInt32 | Deprecated. |

# niDCPower_ResetOutputPr tOutputProtection

Clears all output-protection conditions on the power supply.

# Syntax

ViStatus _VI_FUNC niDCPower_ResetOutputProtection(ViSessionvi, ViConstString channelName)

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
