# NI-DCPower C API — Functions: Source


ViStatus _VI_FUNCniDCPower_CreateAdvancedSequence(ViSession vi,ViConstString sequenceName, ViInt32 attributeIdCount, constViInt32 attributeIds[], ViBoolean setAsActiveSequence)

# Remarks

Creates an empty advanced sequence. Call theniDCPower_CreateAdvancedSequenceStep function to add steps to the activeadvanced sequence.

You can create multiple advanced sequences in a session.

# Support for this function

You must set the source mode to Sequence to use this function.

# Note

This function is not supported on all devices. Refer to Supported Functions

by Device for more information about supported devices.

Using the niDCPower_SetSequence function with Advanced Sequence functions isunsupported.

Use this function in the Uncommitted or Committed programming states. Refer to theProgramming States topic in the NI DC Power Supplies and SMUs Help for moreinformation about NI-DCPower programming states.

# Related Topics:

Advanced Sequencing

Programming States

niDCPower_CreateAdvancedSequenceStep

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| sequenceName | [in] | ViConstString | Specifies the name of the sequence to create. |
| attributeldCount | [in] | Vilnt32 | Specifies the number of attributes in the attributelds array. |
| attributlds | [in] | const Vilnt32[] | Specifies the attributes you reconfigure per step in the advanced sequence. Refer to Supported Attributes by Device for more information on attributes that can be configured in an advanced sequence and their respective supported device. |
| setAsActiveSequence | [in] | ViBoolean | Specifies that this current sequence is active. |

# Syntax

ViStatus _VI_FUNCniDCPower_CreateAdvancedSequenceCommitStepWithChannels(ViSessionvi, ViConstString channelName, ViBoolean setAsActiveStep)

# Note

You can specify the Active advanced sequence using theNIDCPOWER_ATTR_ACTIVE_ADVANCED_SEQUENCE attribute.

When you create an advanced sequence step, each attribute you passed to theniDCPower_CreateAdvancedSequenceWithChannels function is reset to its defaultvalue for the new step. To configure the step, you must first designate the new step asthe Active step using the NIDCPOWER_ATTR_ACTIVE_ADVANCED_SEQUENCE attributeor the setAsActiveStep parameter of this function. Once the step is Active, use setfunctions to configure new values for the step.

# Support for this Function

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

You must set the source mode to NIDCPOWER_VAL_SEQUENCE to use this function.

Using the niDCPower_SetSequence function with Advanced Sequence functions forthe same channel in the same session is unsupported.

When a Commit step exists in the Active advanced sequence, you cannot set theniDCPower_ConfigureOutputFunction function to NIDCPOWER_VAL_PULSE_VOLTAGEor NIDCPOWER_VAL_PULSE_CURRENT in either the Commit step (-1) or step 0.

# Details

# When Does the Commit Step Run in a Sequence?

The driver applies the Commit step to a channel when it transitions to the Committedstate. After the driver applies the Commit step to channels, the driver waits until thesource delay has elapsed before waiting for the Start trigger.

# Note

• You can provide a specific source delay for the Commit step if you setNIDCPOWER_ATTR_SOURCE_DELAY as one of the attributes to beconfigured with theniDCPower_CreateAdvancedSequenceWithChannels function.

• If you call niDCPower_InitiateWithChannels while a channel is in theUncommitted state, the channel implicitly moves through theCommitted state before moving to the Running state.

# Differences Between the Commit Step and Other Steps

• The source unit does not wait on any triggers before running the Commit step.

• The source unit does not emit a Source Complete Event when the Commit step iscomplete.

• No measurements are taken in the Commit step, therefore you cannot set theNIDCPOWER_ATTR_APERTURE_TIME,

NIDCPOWER_ATTR_MEASURE_RECORD_LENGTH, andNIDCPOWER_ATTR_DC_NOISE_REJECTION attributes in the Commit step.

• The NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME attribute does not apply tothe Commit step, and you cannot configure the

NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME attribute in the Commit step.

# Related Topics:

Advanced Sequencing

Programming States

niDCPower_CreateAdvancedSequence

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| setAsActiveStep | [in] | ViBoolean | Specifies that this current step in the active sequence is active. |

# Syntax

ViStatus _VI_FUNCniDCPower_CreateAdvancedSequenceStep(ViSession vi,ViBoolean setAsActiveStep)

# Remarks

Creates a new advanced sequence step in the advanced sequence specified by theActive advanced sequence. When you create an advanced sequence step, eachattribute you passed to the niDCPower_CreateAdvancedSequence function is reset toits default value for that step unless otherwise specified.

# Support for this Function

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

You must set the source mode to NIDCPOWER_VAL_SEQUENCE to use this function.

Using the niDCPower_SetSequence function with Advanced Sequence functions isunsupported.

# Related Topics:

Advanced Sequencing

Programming States

niDCPower_CreateAdvancedSequence

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| setAsActiveStep | [in] | ViBoolean | Specifies that this current step in the active sequence is active. |

# Syntax

ViStatus _VI_FUNCniDCPower_CreateAdvancedSequenceStepWithChannels(ViSessionvi, ViConstString channelName, ViBoolean setAsActiveStep)

# Remarks

Support for this Function

# Note

This function is not supported on all devices. Refer to Supported Functions

by Device for more information about supported devices.

You must set the source mode to NIDCPOWER_VAL_SEQUENCE to use this function.

Using the niDCPower_SetSequence function with Advanced Sequence functions forthe same channel in the same session is unsupported.

# Related Topics:

Advanced Sequencing

Programming States

niDCPower_CreateAdvancedSequenceWithChannels

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| setAsActiveStep | [in] | ViBoolean | Specifies that this current step in the active sequence is active. |

# Syntax

ViStatus _VI_FUNC

niDCPower_CreateAdvancedSequenceWithChannels(ViSession vi,

ViConstString channelName, ViConstString sequenceName,ViInt32 attributeIdCount, const ViInt32 attributeIds[],ViBoolean setAsActiveSequence)

# Remarks

You can create multiple advanced sequences for a channel. Advanced sequences for aparticular channel are independent from any advanced sequences of other channels.You can configure advanced sequences for one channel at a time or you can confiugreidentical advanced sequences for multiple channels in unison.

# Note

Each channel can have only one active advanced sequence at a time.

# Support for this function

You must set the source mode to Sequence to use this function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Using the niDCPower_SetSequence function with Advanced Sequence functions forthe same channel in the same session is unsupported.

Use this function in the Uncommitted or Committed programming states.

# Related Topics:

Advanced Sequencing

Programming States

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| sequenceName | [in] | ViConstString | Specifies the name of the sequence to create. |
| attributeldCount | [in] | Vilnt32 | Specifies the number of attributes in the attributelds array. |
| attributelds | [in] | const Vilnt32[] | Specifies the attributes you reconfigure per step in the advanced sequence. Refer to Supported Attributes by Device for more information on attributes that can be configured in an advanced sequence and their respective supported device. |
| setAsActiveSequence | [in] | ViBoolean | Specifies that this current sequence is active. |

# Syntax

ViStatus _VI_FUNCniDCPower_DeleteAdvancedSequence(ViSession vi,ViConstString sequenceName)

# Remarks

Deletes a previously created advanced sequence and all the advanced sequence stepsin the advanced sequence.

Support for this Function

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

You must set the source mode to Sequence to use this function.

Using the niDCPower_SetSequence function with Advanced Sequence functions isunsupported.

# Related Topics:

Advanced Sequencing

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| sequenceName | [in] | ViConstString | specifies the name of the sequence to delete. |

# Syntax

ViStatus _VI_FUNCniDCPower_DeleteAdvancedSequenceWithChannels(ViSession vi,ViConstString channelName, ViConstString sequenceName)

# Remarks

Support for this Function

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

You must set the source mode to Sequence to use this function.

Using the niDCPower_SetSequence function with Advanced Sequence functions for

the same channel in the same session is unsupported.

# Related Topics:

Advanced Sequencing

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| sequenceName | [in] | ViConstString | specifies the name of the sequence to delete. |

# DC Current

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureCurrentLevel(ViSessionvi, ViConstString channelName, ViReal64 level)

# Remarks

The current level setting is applicable only if the output function of the channel is setto NIDCPOWER_VAL_DC_CURRENT. Use niDCPower_ConfigureOutputFunction to setthe output function. Channels actively regulate the current at the specified level unlessdoing so causes a voltage greater than the voltage limit

(niDCPower_ConfigureVoltageLimit) across the channels' output terminals.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the current level, in amps, to generate for the specified channel(s). Valid Values: The valid values for this parameter are defined by the current level range that is configured using the niDCPower_ConfigureCurrentLevelRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureCurrentLevelRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

Use the NIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE attribute to enableautomatic selection of the current level range.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the current level range, in amps, for the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureVoltageLimit(ViSessionvi, ViConstString channelName, ViReal64 limit)

# Remarks

The voltage limit is the voltage that the output should not exceed when generating thedesired current level (niDCPower_ConfigureCurrentLevel). The voltage limit setting isapplicable only if the output function of the channel is set to

NIDCPOWER_VAL_DC_CURRENT. Use niDCPower_ConfigureOutputFunction to set theoutput function.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| limit | [in] | ViReal64 | Specifies the voltage limit, in volts, on the specified channel(s). The limit is specified as a positive value, but symmetric positive and negative limits are enforced simultaneously. Valid Values: The valid values for this parameter are defined by the voltage limit range that is configured using the niDCPower ConfigureVoltageLimitRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureVoltageLimitRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

Use the NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE attribute to enableautomatic selection of the voltage limit range.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the voltage limit range, in volts, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# DC Voltage

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureCurrentLimit(ViSessionvi, ViConstString channelName, ViInt32 behavior, ViReal64

limit)

# Remarks

The current limit is the current that the output should not exceed when generating thedesired voltage level (niDCPower_ConfigureVoltageLevel). The current limit setting isapplicable only if the output function of the channel is set to

NIDCPOWER_VAL_DC_VOLTAGE. Use niDCPower_ConfigureOutputFunction to set theoutput function.

# Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
| channelName | [in] | ViConstString |  |  |  |
| behavior | [in] | Vilnt32 |  |  |  |
| Name | Direction | Type |  |  |  |
|  |  |  |  |  |  |
| Name | Value | Description |  |  |  |
| NIDCPower_VAL_CURRENT_REGULATE | 0(0x0) | Controls output current so that it does not exceed the current limit. Power continues to generate even if the current limit is reached. |  |  |  |
| NIDCPower_VAL_CURRENT_TRIP | 1(0x1) | Not supported. |  |  |  |
| limit | [in] | ViReal64 |  |  |  |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureCurrentLimitRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

Use the NIDCPOWER_ATTR_CURRENT_LIMIT_AUTORANGE attribute to enable

automatic selection of the current limit range.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the current limit range, in amps, for the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureOutputResistance(ViSession vi,ViConstString channelName, ViReal64 resistance)

# Remarks

A channel must be enabled for the specified output resistance to take effect. Refer tothe niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel.

Channels actively regulate the current and voltage to reach the specified outputresistance, although in DC Voltage output mode, the voltage at the output experiencesa "virtual drop" that is proportional to its current. In DC Current output mode, theoutput experiences a "virtual leakage current" that is proportional to the outputvoltage.

# Note

To specify the resistance level that the device attempts to generate whenNIDCPOWER_ATTR_OUTPUT_FUNCTION is set toNIDCPOWER_VAL_CONSTANT_RESISTANCE, use theNIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL attribute.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Depending on the instrument, output resistance is configurable only if you set theoutput function of the channel using the niDCPower_ConfigureOutputFunctionfunction as follows:

• PXIe-4141, PXIe-4143, PXIe-4145: NIDCPOWER_VAL_DC_VOLTAGE

• PXIe-4135, PXIe-4137, PXIe-4139, PXIe-4147, PXIe-4162, PXIe-4163:NIDCPOWER_VAL_DC_CURRENT or NIDCPOWER_VAL_DC_VOLTAGE

Details: Programmable Resistance Range and Merged Channels

Using the NIDCPOWER_ATTR_MERGED_CHANNELS attribute to merge instrumentoutputs affects the valid output resistance range you can program. Refer to the MergedChannels topic for your device for details.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| resistance | [in] | ViReal64 | Specifies the output resistance, in ohms, for the specified channel(s). For more information about configuring output resistance, refer to the topic on output resistance for your instrument. |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureVoltageLevel(ViSessionvi, ViConstString channelName, ViReal64 level)

# Remarks

The voltage level setting is applicable only if the output function of the channel is setto NIDCPOWER_VAL_DC_VOLTAGE. Use niDCPower_ConfigureOutputFunction to setthe output function.

Channels actively regulate the voltage at the specified level unless doing so causes acurrent output greater than the current limit (NIDCPOWER_ATTR_CURRENT_LIMIT)across the channels' output terminals.

respectively.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the voltage level, in volts, for the channel(s) generation. Valid Values: The valid values for this parameter are defined by the voltage level range that is selected using the niDCPower_ConfigureVoltageLevelRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureVoltageLevelRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

Use the NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE attribute to enableautomatic selection of the voltage level range.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the voltage level range, in volts, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Pulse Current

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigurePulseBiasCurrentLevel(ViSession vi, ViConstString channelName, ViReal64 level)
```

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse current level setting is applicable only if the channel isset to the NIDCPOWER_VAL_PULSE_CURRENT output function using theniDCPower_ConfigureOutputFunction function.

Channels actively regulate the current at the specified level unless doing so causes avoltage drop greater than the pulse bias voltage limit(NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT) across the channels' outputterminals.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the pulse bias current level, in amps, on the specified channel(s). Valid Values: The valid values for this parameter are defined by the pulse current level range that is configured using the niDCPower_ConfigurePulseCurrentLevelRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseBiasVoltageLimit(ViSession vi,ViConstString channelName, ViReal64 limit)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse bias voltage limit is the voltage that the output mustnot exceed when generating the desired pulse bias current level(NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL). The pulse bias voltage limitsetting is only applicable if the channel is set to theNIDCPOWER_VAL_PULSE_CURRENT output function using theniDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| limit | [in] | ViReal64 | Specifies the pulse bias voltage limit, in volts, on the specified channel(s). The limit is specified as a positive value, but symmetric positive and negative limits are enforced simultaneously. Valid Values: The valid values for this parameter are defined by the pulse voltage limit range that is configured using the niDCPower_ConfigurePulseVoltageLimitRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseCurrentLevel(ViSession vi,ViConstString channelName, ViReal64 level)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse current level setting is applicable only if the channel isset to the NIDCPOWER_VAL_PULSE_CURRENT output function using theniDCPower_ConfigureOutputEnabled function.

Channels actively regulate the current at the specified level unless doing so causes avoltage drop greater than the pulse voltage limit(NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT) across the channels' output terminals.

with electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the pulse current level, in amps, on the specified channel(s). Valid Values: The valid values for this parameter are defined by the pulse current level range that is configured using the niDCPower_ConfigurePulseCurrentLevelRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseCurrentLevelRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

The configured range defines the valid values to which you can set the pulse currentlevel and pulse bias current level using the niDCPower_ConfigurePulseCurrentLeveland niDCPower_ConfigurePulseBiasCurrentLevel functions. The pulse current levelrange setting is applicable only if the channel is set to theNIDCPOWER_VAL_PULSE_CURRENT output function using theniDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the pulse current level range, in amps, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseVoltageLimit(ViSession vi,ViConstString channelName, ViReal64 limit)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse voltage limit is the voltage that the output must notexceed when generating the desired pulse current level

(NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL). The pulse voltage limit setting is onlyapplicable if the channel is set to the NIDCPOWER_VAL_PULSE_CURRENT outputfunction using the niDCPower_ConfigureOutputFunction function.

with electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| limit | [in] | ViReal64 | Specifies the pulse voltage limit, in volts, on the specified channel(s). The limit is specified as a positive value, but symmetric positive and negative limits are enforced simultaneously. Valid Values: The valid values for this parameter are defined by the pulse voltage limit range that is configured using the niDCPower ConfigurePulseVoltageLimitRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseVoltageLimitRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

The configured range defines the valid values to which you can set the pulse voltagelimit and pulse bias voltage limit using the niDCPower_ConfigurePulseVoltageLimitand niDCPower_ConfigurePulseBiasVoltageLimit functions. The pulse voltage limitrange setting is applicable only if the channel is set to theNIDCPOWER_VAL_PULSE_CURRENT output function using theniDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the pulse voltage limit range, in volts, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Pulse Voltage

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseBiasCurrentLimit(ViSession vi,

ViConstString channelName, ViReal64 limit)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse bias current limit is the current that the output mustnot exceed when generating the desired pulse bias voltage level

(NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL). The pulse bias current limitsetting is only applicable if the channel is set to the

NIDCPOWER_VAL_PULSE_VOLTAGE output function using the

niDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| limit | [in] | ViReal64 | Specifies the pulse bias current limit, in amps, on the specified channel(s). The limit is specified as a positive value, but symmetric positive and negative limits are enforced simultaneously. Valid Values: The valid values for this parameter are defined by the pulse current limit range that is configured using the niDCPower ConfigurePulseCurrentLimitRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseBiasVoltageLevel(ViSession vi,ViConstString channelName, ViReal64 level)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse bias voltage level setting is applicable only if thechannel is set to the NIDCPOWER_VAL_PULSE_VOLTAGE output function using theniDCPower_ConfigureOutputFunction function.

Channels actively regulate the voltage at the specified level unless doing so causes acurrent greater than the pulse bias current limit(NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT) through the channels' outputterminals.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the pulse bias voltage level, in volts, for the channel(s) generation. Valid Values: The valid values for this parameter are defined by the pulse voltage level range that is selected using the niDCPower_ConfigurePulseVoltageLevelRange function. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigurePulseCurrentLimit(ViSession vi, ViConstString channelName, ViReal64 limit)
```

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse current limit is the current that the output must notexceed when generating the desired pulse voltage level

(NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL). The pulse current limit setting is onlyapplicable if the channel is set to the NIDCPOWER_VAL_PULSE_VOLTAGE outputfunction using the niDCPower_ConfigureOutputFunction function.

Note

NI-DCPower uses the terms "source" and "output". However, while sinkingwith electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| limit | [in] | ViReal64 | Specifies the pulse current limit, in amps, on the specified channel(s). The limit is specified as a positive value, but symmetric positive and negative limits are enforced simultaneously. Valid Values: The valid values for this parameter are defined by the pulse current limit range that is configured using the niDCPower_ConfigurePulseCurrentLimitRange function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseCurrentLimitRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

The configured range defines the valid values to which you can set the pulse currentlimit and pulse bias current limit using the niDCPower_ConfigurePulseCurrentLimitand niDCPower_ConfigurePulseBiasCurrentLimit functions. The pulse current limitrange setting is applicable only if the channel is set to theNIDCPOWER_VAL_PULSE_VOLTAGE output function using theniDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the pulse current limit range, in amps, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigurePulseVoltageLevel(ViSession vi,ViConstString channelName, ViReal64 level)

# Remarks

Refer to the niDCPower_ConfigureOutputEnabled function for more information aboutenabling the channel. The pulse voltage level setting is applicable only if the channel isset to the NIDCPOWER_VAL_PULSE_VOLTAGE output function using theniDCPower_ConfigureOutputFunction function.

Channels actively regulate the voltage at the specified level unless doing so causes acurrent greater than the pulse current limit

(NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT) through the channels' output terminals.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| level | [in] | ViReal64 | Specifies the pulse voltage level, in volts, for the channel(s) generation. Valid Values: The valid values for this parameter are defined by the voltage level range that is selected using the niDCPower_ConfigurePulseVoltageLevelRange function. |

# Syntax

ViStatus _VI_FUNC

niDCPower_ConfigurePulseVoltageLevelRange(ViSession vi,ViConstString channelName, ViReal64 range)

# Remarks

The configured range defines the valid values to which you can set the pulse voltagelevel and pulse bias voltage level using the niDCPower_ConfigurePulseVoltageLeveland niDCPower_ConfigurePulseBiasVoltageLevel functions. The pulse voltage levelrange setting is applicable only if the channel is set to theNIDCPOWER_VAL_PULSE_VOLTAGE output function using theniDCPower_ConfigureOutputFunction function.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |
| range | [in] | ViReal64 | Specifies the pulse voltage level range, in volts, on the specified channel(s). For valid ranges, refer to the Ranges topic for your device in the NI DC Power Supplies and SMUs Help. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureOutputEnabled(ViSession vi,

ViConstString channelName, ViBoolean enabled)

# Remarks

Depending on the selected output function, the corresponding level properties orNIDCPOWER_ATTR_OUTPUT_RESISTANCE must be set in addition to enabling theoutput to generate the desired level. For more information about configuring theoutput level, refer to niDCPower_ConfigureOutputFunction .

# Note

If a channel is in the Uncommitted state, enabling the output does not takeeffect until you call the niDCPower_InitiateWithChannels function.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. |

| Name | Direction | Type | Description |  |
| --- | --- | --- | --- | --- |
|  |  |  | If you pass "" for this control, all channels in the session are used. |  |
| Specifies whether the channels are enabled or disabled. Defined Values: |  |  |  |  |
| VI_true | Enables generation on the specified channel(s). |  |  |  |
| VIFalse | Disables generation on the specified channel(s). This parameter has no effect on the output disconnect relay. To toggle the relay, use the NIDCPOWER_ATTR_OUTPUT_CONNECTED attribute. |  |  |  |
|  |  |  |  |  |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureOutputFunction(ViSession vi,ViConstString channelName, ViInt32 function)

# Remarks

When NIDCPOWER_VAL_DC_VOLTAGE is selected, a channel generates the desiredvoltage level on the output as long as the output current is below the current limit. Thefollowing functions can be used to configure the channel whenNIDCPOWER_VAL_DC_VOLTAGE is selected:

niDCPower_ConfigureVoltageLevel

niDCPower_ConfigureCurrentLimit

niDCPower_ConfigureVoltageLevelRange

niDCPower_ConfigureCurrentLimitRange

When NIDCPOWER_VAL_DC_CURRENT is selected, a channel generates the desiredcurrent level on the output as long as the output voltage is below the voltage limit. Thefollowing functions can be used to configure the channel whenNIDCPOWER_VAL_DC_CURRENT is selected:

• niDCPower_ConfigureCurrentLevel

• niDCPower_ConfigureVoltageLimit

• niDCPower_ConfigureCurrentLevelRange

• niDCPower_ConfigureVoltageLimitRange

When NIDCPOWER_VAL_PULSE_VOLTAGE is selected, a channel generates pulses atthe desired voltage levels on the output as long as the output current is below thecurrent limit. The following VIs can be used to configure the channel whenNIDCPOWER_VAL_PULSE_VOLTAGE is selected:

• niDCPower_ConfigurePulseVoltageLevel

• niDCPower_ConfigurePulseBiasVoltageLevel

• niDCPower_ConfigurePulseCurrentLimit

• niDCPower_ConfigurePulseBiasCurrentLimit

• niDCPower_ConfigurePulseVoltageLevelRange

• niDCPower_ConfigurePulseCurrentLimitRange

When NIDCPOWER_VAL_PULSE_CURRENT is selected, a channel generates pulses atthe desired current levels on the output as long as the output voltage is below thevoltage limit. The following VIs can be used to configure the channel whenNIDCPOWER_VAL_PULSE_CURRENT is selected:

• niDCPower_ConfigurePulseCurrentLevel

• niDCPower_ConfigurePulseBiasCurrentLevel

niDCPower_ConfigurePulseVoltageLimit

niDCPower_ConfigurePulseBiasVoltageLimit

• niDCPower_ConfigurePulseCurrentLevelRange

• niDCPower_ConfigurePulseVoltageLimitRange

When NIDCPOWER_VAL_CONSTANT_RESISTANCE is selected, a channel generates thedesired resistance level on the output as long as the output current is below thecurrent limit. The following attributes can be used to configure the channel whenNIDCPOWER_VAL_CONSTANT_RESISTANCE is selected:

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL

• NIDCPOWER_ATTR_CONSTANT_RESISTANCE_CURRENT_LIMIT

• NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL_RANGE

When NIDCPOWER_VAL_CONSTANT_POWER is selected, a channel generates thedesired power level on the output as long as the output current is below the currentlimit. The following attributes can be used to configure the channel whenNIDCPOWER_VAL_CONSTANT_POWER is selected:

NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL

• NIDCPOWER_ATTR_CONSTANT_POWER_CURRENT_LIMIT

• NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGE

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_DC_VOLTAGE | 1006 (0x3ee) | Sets the output function to DC voltage. |
| NIDCPOWER_VAL_DC_current | 1007 (0x3ef) | Sets the output function to DC current. |
| NIDCPOWER_VAL_PULSE_VOLTAGE | 1049 (0x419) | Sets the output |
|  |  |  |
| Name | Value | Description function to pulse voltage. |
| NIDCPOWER_VAL_PULSE_CURRENT | 1050(0x41a) | Sets the output function to pulse current. |
| NIDCPOWER_VAL_constant_RESISTANCE | 1161(0x489) | Sets the output function to constant resistance. |
| NIDCPOWER_VAL_constant_POWER | 1162(0x48a) | Sets the output function to constant power. |

# Syntax

ViStatus _VI_FUNC niDCPower_ConfigureSourceMode(ViSessionvi, ViInt32 sourceMode)

# Remarks

Configures the NIDCPOWER_ATTR_SOURCE_MODE attribute. Specifies whether to runa single output point or a sequence. Refer to the Single Point Source Mode andSequence Source Mode topics in the NI DC Power Supplies and SMUs Help formore information about using this function.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_SINGLE_POINT | 1020(0x3fc) | Applies a single source configuration. |
| NIDCPOWER_VALSequence | 1021(0x3fd) | Applies a list of voltage or current configurations sequentially. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSourceModeWithChannels(ViSession vi,ViConstString channelName, ViInt32 sourceMode)

# Related topics:

Single Point Source Mode

Sequence Source Mode

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_SINGLE_POINT | 1020 (0x3fc) | Applies a single source configuration. |
| NIDCPOWER_VALSequence | 1021 (0x3fd) | Applies a list of voltage or current configurations sequentially. |

# niDCPower_SetSequence

Configures a series of voltage, current, resistance or power outputs and correspondingsource delays. The source mode must be set to NIDCPOWER_VAL_SEQUENCE for thisfunction to take effect.

# Syntax

ViStatus _VI_FUNC niDCPower_SetSequence(ViSession vi,ViConstString channelName, const ViReal64 values[], constViReal64 sourceDelays[], ViUInt32 size)

# Remarks

Use this function in the Uncommitted or Committed programming states.

Support for this Function

Using this function and advanced sequence functions for the same channel in thesame session is not supported.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you do not pass this control, all channels in the session are used. |
| values | [in] | const ViReal64[] | Specifies the series of voltage, current, resistance or power levels, depending on the configured NIDCPOWER_ATTR_OUTPUT_FUNCTION. Valid Values: The valid values for this parameter are defined by the voltage level range, current level range, constant resistance level range or constant power level range. |
| sourceDelays | [in] | const ViReal64[] | Specifies the source delay that follows the configuration of each value in the sequence. Valid Values: The valid values are between 0 and 167 seconds. |
| size | [in] | ViUInt32 | The number of elements in the Values and the Source Delays arrays. The Values and Source Delays arrays should have the same size. |
