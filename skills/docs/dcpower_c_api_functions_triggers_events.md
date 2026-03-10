# NI-DCPower C API — Functions: Triggers and Events

# Triggers and Events

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureDigitalEdgeMeasureTrigger(ViSession vi, ViConstString inputTerminal, ViInt32 edge)
```

# Remarks

Configures the Measure trigger for digital edge triggering.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| inputTerminal | [in] | ViConstString |
| edge | [in] | Vilnt32 |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus

niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels(ViSessionvi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| inputTerminal | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureSoftwareEdgeMeasureTrigger(ViSession vi)
```

# Remarks

Configures the Measure trigger for software triggering. Use theniDCPower_SendSoftwareEdgeTrigger function to assert the trigger condition.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC

niDCPower_ConfigureSoftwareEdgeMeasureTriggerWithChannels(ViSessiovi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# Pulse Trigger

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgePulseTrigger(ViSession vi,ViConstString inputTerminal, ViInt32 edge)

# Remarks

Configures the Pulse trigger for digital edge triggering.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| inputTerminal | [in] | ViConstString |
| edge | [in] | Vilnt32 |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgePulseTriggerWithChannels(ViSessionvi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| inputTerminal | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPower_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPower_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureSoftwareEdgePulseTrigger(ViSession vi)
```

# Remarks

Configures the Pulse trigger for software triggering. Use theniDCPower_SendSoftwareEdgeTrigger function to assert the trigger condition.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSoftwareEdgePulseTriggerWithChannels(ViSessionvi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_DisablePulseTrigger(ViSessionvi)

# Remarks

Disables the Pulse trigger. The device does not wait for a pulse trigger beforeperforming a pulse operation. Refer to Pulsing and Sequence Source Mode for moreinformation about the Pulse trigger.

This function is necessary only if you configured a Pulse trigger in the past and nowwant to disable it.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_DisablePulseTriggerWithChannels(ViSession vi,ViConstString channelName)

# Remarks

This function is necessary only if you configured a Pulse trigger in the past and nowwant to disable it.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeSequenceAdvanceTrigger(ViSessionvi, ViConstString inputTerminal, ViInt32 edge)

# Remarks

Configures the Sequence Advance trigger for digital edge triggering.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| inputTerminal | [in] | ViConstString |
| edge | [in] | VInt32 |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus

niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels(Vvi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| inputTerminal | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPower_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPower_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSoftwareEdgeSequenceAdvanceTrigger(ViSessionvi)

# Remarks

Configures the Sequence Advance trigger for software triggering. Use theniDCPower_SendSoftwareEdgeTrigger function to assert the trigger condition.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus

niDCPower_ConfigureSoftwareEdgeSequenceAdvanceTriggerWithChannels(vi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC

niDCPower_DisableSequenceAdvanceTrigger(ViSession vi)

# Remarks

Disables the Sequence Advance trigger. The device does not wait for a SequenceAdvance trigger before advancing to the next iteration of the sequence. Refer to theSequence Source Mode topic for more information about the Sequence Advancetrigger.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNC

niDCPower_DisableSequenceAdvanceTriggerWithChannels(ViSession

vi, ViConstString channelName)

# Remarks

This function is necessary only if you configured a Sequence Advance trigger in thepast and now want to disable it.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Shutdown Trigger

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeShutdownTriggerWithChannels(ViSessiovi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0,2,and 3 are channels.If you pass "" for this control, all channels in the session are used. |
| inputTerminal Specifies whether to configure the Shutdown trigger to assert on the rising or falling edge.Defined Values:Name Value Description | [in] | ViConstString | Specifies the input terminal for the digital edge Shutdown trigger.You can specify any valid input terminal for this function. Valid terminals are listed in MAX under the Device Routes tab. For the PXIe-4147 and PXIe-4162/4163, refer to the Signal Routing topic for the device to determine which routes are available. This information is not available on a Device Routes tab in MAX.Specify the input terminal using the form /Dev1/PXI_Trig0, where Dev1 is the instrument and PXI_Trig0 is the terminal. The input terminal can also be a terminal from another instrument or channel. For example, you can set the input terminal on Dev1 to be /Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0. |

| Name | Direction | Type |
| --- | --- | --- |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSoftwareEdgeShutdownTriggerWithChannels(ViSessivi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNCniDCPower_DisableShutdownTriggerWithChannels(ViSession vi,ViConstString channelName)

# Remarks

This function is necessary only if you configured a Shutdown trigger in the past andnow want to disable it.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Source Trigger

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeSourceTrigger(ViSession vi,ViConstString inputTerminal, ViInt32 edge)

# Remarks

Configures the Source trigger for digital edge triggering.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| inputTerminal | [in] | ViConstString |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016 (0x3f8) | Asserts the trigger on the rising edge of the digital |
|  |  |  |
| Name | Value | Description signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels(ViSessionvi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| Name | Direction | Type |
| inputTerminal | [in] | ViConstString |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |
|  |  |  |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureSoftwareEdgeSourceTrigger(ViSession vi)
```

# Remarks

Configures the Source trigger for software triggering. Use theniDCPower_SendSoftwareEdgeTrigger function to assert the trigger condition.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSoftwareEdgeSourceTriggerWithChannels(ViSessionvi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_DisableSourceTrigger(ViSessionvi)

# Remarks

Disables the Source trigger. The device does not wait for a source trigger beforeperforming a source operation. Refer to the Single Point Source Mode and SequenceSource Mode topics for more information about the Source trigger.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_DisableSourceTriggerWithChannels(ViSession vi,ViConstString channelName)

# Remarks

This function is necessary only if you configured a Source trigger in the past and nowwant to disable it.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# Start Trigger

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeStartTrigger(ViSession vi,ViConstString inputTerminal, ViInt32 edge)

# Remarks

Configures the Start trigger for digital edge triggering.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |  |  |
| inputTerminal | [in] | ViConstString | Specifies the input terminal for the digital edge Start trigger. You can specify any valid input terminal for this function. Valid terminals are listed in MAX under the Device Routes tab. For the PXIe-4147 and PXIe-4162/4163, refer to the Signal Routing topic for the device to determine which routes are available. This information is not available on a Device Routes tab in MAX. Input terminals can be specified in one of two ways. If the device is named Dev1 and your terminal is PXI_Trig0, you can specify the terminal with the fully qualified terminal name, /Dev1/PXI_Trig0, or with the shortened terminal name, PXI_Trig0. The input terminal can also be a terminal from another device. For example, you can set the input terminal on Dev1 to be /Dev2/SourceCompleteEvent. |  |  |
| Specifies whether to configure the Start trigger to assert on the rising or falling edge. Defined Values: |  |  |  |  |  |
| Name | Value | Description |  |  |  |
| NIDCPOWER_VAL_RISING | 1016 | Asserts the trigger |  |  |  |
| Name | Direction | Type |  |  |  |
|  |  |  |  |  |  |
| Name | Value | Description |  |  |  |
|  | (0x3f8) | on the rising edge of the digital signal. |  |  |  |
| NIDCPOWER_VAL_FALLING | 1017 (0x3f9) | Asserts the trigger on the falling edge of the digital signal. |  |  |  |
|  |  |  |  |  |  |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureDigitalEdgeStartTriggerWithChannels(ViSessionvi, ViConstString channelName, ViConstString inputTerminal,ViInt32 edge)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| inputTerminal | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPower_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPower_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ConfigureSoftwareEdgeStartTrigger(ViSession vi)
```

# Remarks

Configures the Start trigger for software triggering. Use theniDCPower_SendSoftwareEdgeTrigger function to assert the trigger condition.

Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_ConfigureSoftwareEdgeStartTriggerWithChannels(ViSessionvi, ViConstString channelName)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0, PXI1Slot3/2-3, PXI1Slot4/2-3 or PXI1Slot3/0, PXI1Slot3/2:3, PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_DisableStartTrigger(ViSessionvi)

# Remarks

Disables the Start trigger. The device does not wait for a Start trigger when startinggeneration or acquisition.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower InitializeWithIndependentChannels function. |

# Syntax

ViStatus _VI_FUNCniDCPower_DisableStartTriggerWithChannels(ViSession vi,

ViConstString channelName)

# Remarks

This function is necessary only if you configured a Start trigger in the past and nowwant to disable it.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# niDCPower_ExportSignal

This function is deprecated. Use niDCPower_ExportSignalWithChannels instead.

# Syntax

ViStatus _VI_FUNC niDCPower_ExportSignal(ViSession vi,ViInt32 signal, ViConstString signalIdentifier,ViConstString outputTerminal)

# Remarks

Routes signals (triggers and events) to the output terminal you specify. The route iscreated when the session is committed (niDCPower_CommitWithChannels).

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type | Description |  |
| --- | --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |  |
| Specifies which trigger or event to export. Defined Values: |  |  |  |  |
| Name | Val |  |  |  |
| NIDCPOWER_VAL_SOURCE_COMPLETE_EVENT | 103(0x) |  |  |  |
| NIDCPOWER_VAL_MEASURE_COMPLETE_EVENT | 103(0x) |  |  |  |
| NIDCPOWER_VALSequence_iteration_COMPLETE_EVENT | 103(0x) |  |  |  |
| NIDCPOWER_VAL_sequence ENGINE_DONE_EVENT | 103(0x) |  |  |  |
| Name | Direction | Type |  |  |
| Name | Value |  |  |  |
| NIDCPOWER_VAL_PULSE_COMPLETE_EVENT | 105x(0x) |  |  |  |
| NIDCPOWER_VAL_READY_FOR_PULSE_TRIGGER_EVENT | 105x(0x) |  |  |  |
| NIDCPOWER_VAL_START_TRIGGER | 103x(0x) |  |  |  |
| NIDCPOWER_VAL_SOURCE_TRIGGER | 103x(0x) |  |  |  |
| NIDCPOWER_VAL_MEASURE_TRIGGER | 103x(0x) |  |  |  |
| NIDCPOWER_VALSequence_ADVANCE_TRIGGER | 103x(0x) |  |  |  |
| Name | Val |  |  |  |
| NIDCPOWER_VAL_PULSE_TRIGGER | 105(0x) |  |  |  |
| NIDCPOWER_VAL_SHUTDOWN_TRIGGER | 111(0x) |  |  |  |
| signalIdentifier | [in] | ViConstString |  |  |
|  |  |  |  |  |
| "" | Do not export signal |  |  |  |
| "PXI_Trig0" | PXI trigger line 0 |  |  |  |
| "PXI_Trig1" | PXI trigger line 1 |  |  |  |
| "PXI_Trig2" | PXI trigger line 2 |  |  |  |

| Name | Direction | Type | Description "PXI_Trig3" "PXI_Trig4" "PXI_Trig5" "PXI_Trig6" "PXI_Trig7" |
| --- | --- | --- | --- |

# niDCPower_ExportSignalWithChannels

Routes signals (triggers and events) to the output terminal you specify. The route iscreated when the specified channel is committed (niDCPower_CommitWithChannels).

# Syntax

ViStatus _VI_FUNCniDCPower_ExportSignalWithChannels(ViSession vi,ViConstString channelName, ViInt32 signal, ViConstStringsignalIdentifier, ViConstString outputTerminal)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
| Name | Direction | Type |
|  |  |  |
| Name | Val |  |
| NIDCPower_VAL_SOURCE_COMPLETE_EVENT | 103(0x) |  |
| NIDCPower_VAL_MEASURE_COMPLETE_EVENT | 103(0x) |  |
| NIDCPower_VALSequence_iteration_COMPLETE_EVENT | 103(0x) |  |
| NIDCPower_VAL_sequence ENGINE_DONE_EVENT | 103(0x) |  |
| Name | Val |  |
| NIDCPOWER_VAL_PULSE_COMPLETE_EVENT | 105(0x) |  |
| NIDCPOWER_VAL_READY_FOR_PULSE_TRIGGER_EVENT | 105(0x) |  |
| NIDCPOWER_VAL_START_TRIGGER | 103(0x) |  |
| NIDCPOWER_VAL_SOURCE_TRIGGER | 103(0x) |  |
| NIDCPOWER_VAL_MEASURE_TRIGGER | 103(0x) |  |
| NIDCPOWER_VALSequence_ADVANCE_TRIGGER | 103(0x) |  |
| Name | Val |  |
| NIDCPOWER_VAL_PULSE_TRIGGER | 105(0x) |  |
| NIDCPOWER_VAL_SHUTDOWN_TRIGGER | 111(0x) |  |
| signalIdentifier | [in] | ViConstString |
|  |  |  |
| "" | Do not export signal |  |
| "PXI_Trig0" | PXI trigger line 0 |  |
| "PXI_Trig1" | PXI trigger line 1 |  |
| "PXI_Trig2" | PXI trigger line 2 |  |

| Name | Direction | Type | Description "PXI_Trig3" "PXI_Trig4" "PXI_Trig5" "PXI_Trig6" "PXI_Trig7" You can also supply a fully qualified terminal name to this control, for PXI_Trig0, or /Dev1/Engine0/PXI_Trig0, where Engine0 is channel 0. |
| --- | --- | --- | --- |

# niDCPower_SendSoftw ower_SendSoftwareEdgeTrigger

This function is deprecated. Use niDCPower_SendSoftwareEdgeTriggerWithChannelsinstead.

# Syntax

ViStatus _VI_FUNCniDCPower_SendSoftwareEdgeTrigger(ViSession vi, ViInt32trigger)

# Remarks

Asserts the specified trigger. This function can override an external edge trigger.

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

# Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| trigger | [in] | Vilnt32 |
| Name | Direction | Type |
|  |  |  |
| Name | Value | Description |
| NIDCPOWER_VAL_START_TRIGGER | 1034(0x40a) | The Start trigger. |
| NIDCPOWER_VAL_SOURCE_TRIGGER | 1035(0x40b) | The Source trigger. |
| NIDCPOWER_VAL_MEASURE_TRIGGER | 1036(0x40c) | The Measure trigger. |
| NIDCPOWER_VALSequence_ADVANCE_TRIGGER | 1037(0x40d) | The Sequence Advance trigger. |
| NIDCPOWER_VAL_PULSE_TRIGGER | 1053(0x41d) | The Pulse trigger. |
| NIDCPOWER_VAL_SHUTDOWN_TRIGGER | 1118(0x45e) | The Shutdown trigger. |

# Syntax

ViStatus _VI_FUNCniDCPower_SendSoftwareEdgeTriggerWithChannels(ViSession vi,ViConstString channelName, ViInt32 trigger)

# Note

This function is not supported on all devices. Refer to Supported Functionsby Device for more information about supported devices.

Parameters

| Name | Direction | Type |
| --- | --- | --- |
| vi | [in] | ViSession |
| channelName | [in] | ViConstString |
|  |  |  |
| Name | Value | Descrip |
| NIDCPOWER_VAL_START_TRIGGER | 1034 (0x40a) | The Sta trigger. |
| NIDCPOWER_VAL_SOURCE_TRIGGER | 1035 (0x40b) | The So trigger. |
| NIDCPOWER_VAL_MEASURE_TRIGGER | 1036 (0x40c) | The Measur trigger. |
| NIDCPOWER_VALSequence_ADVANCE_TRIGGER | 1037 | The |
| Name | Value | Descrip |
|  | (0x40d) | Sequer Advance trigger. |
| NIDCPOWER_VAL_PULSE_TRIGGER | 1053 (0x41d) | The Push trigger. |
| NIDCPOWER_VAL_SHUTDOWN_TRIGGER | 1118 (0x45e) | The Shutdown trigger. |

# niDCPower_WaitForEvent

This function is deprecated. Use niDCPower_WaitForEventWithChannels instead.

# Syntax

ViStatus _VI_FUNC niDCPower_WaitForEvent(ViSession vi,ViInt32 eventId, ViReal64 timeout)

# Remarks

Waits until the device has generated the specified event.

The session monitors whether each type of event has occurred at least once since thelast time this function or the niDCPower_Initiate function were called. If an event hasonly been generated once and you call this function successively, the function timesout. Individual events must be generated between separate calls of this function.

# Note

This function should only be called in the Running state. Refer to theProgramming States Diagram for more information.

# Note

When setting the timeout interval with timeout, ensure you take into accountany triggers so that the timeout interval is long enough for your application.

# Note

Refer to Supported Functions by Device for more information aboutsupported devices.

Parameters

| Name | Direction | Type |  |  |  |
| --- | --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |  |
|  |  |  |  |  |  |
| Name | Value | Descr |  |  |  |
| NIDCPOWER_VAL_SOURCE_COMPLETE_EVENT | 1030 (0x406) | The S Com pe ent |  |  |  |
| NIDCPOWER_VAL_MEASURE_COMPLETE_EVENT | 1031 (0x407) | The Meas Com pe ent |  |  |  |
| NIDCPOWER_VALSequence.IterATION_COMPLETE_EVENT | 1032 (0x408) | The Seque Terati |  |  |  |
|  |  |  | Name | Value | Description Compo- event |
|  |  |  | NIDCPOWER_VALSequenceEngine_DONE_EVENT | 1033 (0x409) | The Seque- Engine Done event |
|  |  |  | NIDCPOWER_VAL_PULSE_COMPLETE_EVENT | 1051 (0x41b) | The P# Compo- event |
|  |  |  | NIDCPOWER_VAL_READY_FOR_PULSE_TRIGGER_EVENT | 1052 (0x41c) | The R# for Pull Trigger event |
| timeout | [in] | ViReal64 |  |  |  |

# Syntax

ViStatus _VI_FUNCniDCPower_WaitForEventWithChannels(ViSession vi,ViConstString channelName, ViInt32 eventId, ViReal64timeout)

# Remarks

The session monitors whether each type of event has occurred at least once for thespecified channel(s) since the last time this function or theniDCPower_InitiateWithChannels function were called. If an event has only beengenerated once and you call this function successively, the function times out.Individual events must be generated between separate calls of this function.

# Note

This function should only be called when the specified channel(s) are in theRunning state.

# Note

When setting the timeout interval with timeout, ensure you take into accountany triggers so that the timeout interval is long enough for your application.

# Note

Refer to Supported Functions by Device for more information aboutsupported devices.

# Related topics:

Programming States

# Parameters

| Name | Direction | Type |  |  |
| --- | --- | --- | --- | --- |
| vi | [in] | ViSession |  |  |
| channelName | [in] | ViConstString |  |  |
| eventId | [in] | Vilnt32 |  |  |
| Name | Direction | Type |  |  |
|  |  |  | Name | Value |
|  |  |  | NIDCPOWER_VAL_SOURCE_COMPLETE_EVENT | 1030(0x40) |
|  |  |  | NIDCPOWER_VAL_MEASURE_COMPLETE_EVENT | 1031(0x40) |
|  |  |  | NIDCPOWER_VALSequence.IterATION_COMPLETE_EVENT | 1032(0x40) |
|  |  |  | NIDCPOWER_VAL_sequence ENGINE_DONE_EVENT | 1033(0x40) |
|  |  |  | NIDCPOWER_VAL_PULSE_COMPLETE_EVENT | 1051(0x43) |
|  |  |  | NIDCPOWER_VAL_READY_FOR_PULSE_TRIGGER_EVENT | 1052(0x43) |
|  |  |  | Name | Value |
| timeout | [in] | ViReal64 |  |  |
