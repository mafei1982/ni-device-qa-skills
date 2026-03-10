# NI-DCPower C API — Functions: Query


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

