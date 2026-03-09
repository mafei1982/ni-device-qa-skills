# NI-DCPower C API — Source & Triggers (Attributes)

# Sequenc Sequence Iteration Comple tion Complete Event

# NIDCPOWER_ATTR_SEQUENCE_ITERATION_COM

Specifies the behavior of the Sequence Iteration Complete event.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150038 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

# NIDCPOWER_ATTR_SEQUENCE_ITERATION_COM

Specifies the width of the Sequence Iteration Complete event, in seconds.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150039 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI devices is 150 ns, and the minimumevent pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for all devices is 1.6 microseconds.

Valid Values: 1.5e-7 to 1.6e-6 seconds

Default Value: The default value for PXI Express devices is 250 ns.

Toggle

# NIDCPOWER_ATTR_SEQUENCE_ITERATION_COM

Specifies the initial state of the sequence iteration complete event if you set theNIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_OUTPUT_BEHAVIORto NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_TOGGLE_INITIAL_ST

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150336 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW | 1149(0x47d) | The output is set to low at session commit. For operation in Single Point source mode, the output switches to high when the event occurs during the acquisition. The output then switches to low if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to high the first time an event occurs during the acquisition. It then switches to low the second time an event occurs. This pattern repeats for any subsequent event occurrences. |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_HIGH | 1150(0x47e) | The output is set to high at session commit. For operation in Single Point source mode, the output switches to low when the event occurs during the acquisition. The output then switches to high if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to low the first time an event occurs during the acquisition. It then switches to high the second time an event occurs. This pattern repeats for any subsequent event occurrences. |

Default Value:NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW

NIDCPOWER_ATTR_SEQUENCE_ITERATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_OUTPUT_BEHAOMPLETE_EVENT_OUTPUT_BEHAVIOR

Determines how the event type behaves when the corresponding trigger is received.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_OUTPUT_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150335 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_OUTPUT_PULSE | 1147(0x47b) | A single 250ns pulse is transmitted. |
| NIDCPOWER_VAL_EVENT_OUTPUT_TOGGLE | 1148(0x47c) | The output level toggles between low and high. The initial output level is determined by the "toggle initial state" attribute for the event. |

# Default Value:NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_PULSE

The "toggle initial state" attribute used to set the initial output level forNIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE isNIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_TOGGLE_INITIAL_STATE.

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_OUTPUT_TERMINALSpecifies the output terminal for exporting the Sequence Iteration Complete event.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ITERATION_COMPLETE_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150040 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

# Source

# NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MOGE_MO

Specifies whether the conduction voltage feature is enabled on the specifiedchannel(s).

# Syntax

NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150350 | VInt32 | Read/Write | Channels |

# Remarks

When the conduction voltage feature is enabled:

• The instrument will not begin sinking on the specified channel(s) until the voltageat the input of the specified channel(s) rises aboveNIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ON_THRESHOLD

• The instrument will stop sinking on the specified channel(s) if the voltage at theinput of the specified channel(s) falls belowNIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFF_THRESHOLD

When the conduction voltage feature is disabled, the instrument will start sinking onthe specified channel(s) regardless of the voltage at the input of the specifiedchannel(s).

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_CONDUCTION_VOLTAGE_MODE_AUTOMATIC | 1155(0x483) | The conduction voltage feature is only enabled when you set the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute to NIDCPOWER_VAL_DC CURRENT or NIDCPOWER_VAL_constant_POWER |
| NIDCPOWER_VAL_CONDUCTION_VOLTAGE_MODE_ENABLED | 1156(0x484) | The conduction voltage feature is enabled. |
| NIDCPOWER_VAL_CONDUCTION_VOLTAGE_MODE_DISABLED | 1157(0x485) | The conduction voltage feature is disabled. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFGE_OFF

Specifies the minimum voltage, in volts, at the input of the specified channel(s) belowwhich the instrument stops sinking on the specified channel(s) when the conductionvoltage feature is enabled.

# Syntax

NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFF_THRESHOLD

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150352 | ViReal64 | Read/Write | Channels |

# Valid Values:

The valid values for this attribute are hardware dependent.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONGE_ON

Specifies the required minimum voltage, in volts, at the input of the specifiedchannel(s) before the instrument starts sinking on the specified channel(s) when theconduction voltage feature is enabled.

# Syntax

NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ON_THRESHOLD

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150351 | ViReal64 | Read/Write | Channels |

# Valid Values:

The valid values for this attribute are hardware dependent.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_ACTUAL_POWER_ALLWER_ALLOCATION

Returns the power, in watts, the device is sourcing on the active channels if theNIDCPOWER_ATTR_POWER_ALLOCATION_MODE attribute is set toNIDCPOWER_VAL_POWER_ALLOCATION_MODE_AUTOMATIC orNIDCPOWER_VAL_POWER_ALLOCATION_MODE_MANUAL.

# Syntax

NIDCPOWER_ATTR_ACTUAL_POWER_ALLOCATION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150205 | ViReal64 | Read-Only | Channels |

# Remarks

Valid Values: [0, device per-channel maximum power]

# Note

This attribute returns -1 when theNIDCPOWER_ATTR_POWER_ALLOCATION_MODE attribute is set toNIDCPOWER_VAL_POWER_ALLOCATION_MODE_DISABLED.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SOMPLIANCE_LIMIT_SYMMETRY

Specifies whether current generation limits and voltage generation limits for thedevice are applied symmetrically about 0 V and 0 A or asymmetrically with respect to 0V and 0 A.

# Syntax

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150184 | VInt32 | Read/Write | Channels |

# Remarks

When set to NIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC, voltagelimits and current limits are set using a single attribute with a positive value. Theresulting range is bounded by this positive value and its opposite.

When set to NIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC, youmust separately set a limit high and a limit low using distinct attributes.

For asymmetric limits, the range bounded by the limit high and limit low must includezero.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_COMPLIANCE_LIMITSymmetrySymmetric | 0(0x0) | Compliance limits are specified symmetrically about 0. |
| NIDCPOWER_VAL_COMPLIANCE_LIMITSymmetryASYMMETRIC | 1(0x1) | Compliance limits can be specified asymmetrically with respect to 0. |

# Default Value:NIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC

NIDCPOWER_ATTR_MERGED_CHANNELS

Specifies the merge channel(s) to combine with a designated primary channel of aninstrument in order to increase the maximum current you can source from theinstrument.

# Syntax

NIDCPOWER_ATTR_MERGED_CHANNELS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150249 | ViString | Read/Write | Channels |

# Remarks

Pass the primary channel as the channelName parameter when setting this attribute,and pass the merge channels as the value of this attribute.

Refer to the Merged Channels topic in your instrument user manual for moreinformation about using merged channels.

Default Value: Refer to Supported Attributes by Device for the default value by device.

# Related Topics

Programming States

NIDCPOWER_ATTR_OUTPUT_CAP TTR_OUTPUT_CAPACITANCE

Specifies whether to use a low or high capacitance on the output for the specifiedchannel(s).

# Syntax

NIDCPOWER_ATTR_OUTPUT_CAPACITANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150014 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_LOW | 1010 (0x3f2) | Output capacitance is low. |
| NIDCPOWER_VAL_HIGH | 1011 (0x3f3) | Output capacitance is high. |

NIDCPOWER_ATTR_OUTPUT_SHORTED

Specifies whether the input of the instrument simulates a short circuit.

# Syntax

NIDCPOWER_ATTR_OUTPUT_SHORTED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150372 | ViBoolean | Read/Write | Channels |

# Remarks

When this attribute is set to VI_TRUE, the instrument will simulate a short circuitacross the channel/input terminals. The electronic load uses the maximum ratedcurrent and range to simulate the short circuit. This attribute will only take effect whenboth NIDCPOWER_ATTR_OUTPUT_ENABLED andNIDCPOWER_ATTR_OUTPUT_CONNECTED are VI_TRUE.

When this attribute is set to VI_FALSE, the instrument will resume normal operationbased on its existing settings on the specified channel(s).

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | The input of the instrument does not simulate a short circuit. |
| VI:true (1) | The input of the instrument simulates a short circuit. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_OVERRANGING_ENABLED

Specifies whether NI-DCPower allows setting the voltage level

(NIDCPOWER_ATTR_VOLTAGE_LEVEL), current level

(NIDCPOWER_ATTR_CURRENT_LEVEL), voltage limit

(NIDCPOWER_ATTR_VOLTAGE_LIMIT) and current limit

(NIDCPOWER_ATTR_CURRENT_LIMIT) outside the device specification limits. VI_TRUEmeans that overranging is enabled.

# Syntax

NIDCPOWER_ATTR_OVERRANGING_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150007 | ViBoolean | Read/Write | Channels |

# Defined Values:

|  |  |
| --- | --- |
| VI:true (1) | Overranging is enabled. |
| VI_FALSE (0) | Overranging is disabled. |

Default Value: VI_FALSE

NIDCPOWER_ATTR_OVP_ENABLED

Enables (VI_TRUE) or disables (VI_FALSE) overvoltage protection (OVP).

# Syntax

NIDCPOWER_ATTR_OVP_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250002 | ViBoolean | Read/Write | Channels |

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Overvoltage protection is disabled. |
| VI_true (1) | Overvoltage protection is enabled. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_OVP_LIMIT

Determines the voltage limit, in volts, beyond which overvoltage protection (OVP)engages. The limit is specified as a positive value, but symmetric positive and negativelimits are enforced simultaneously. For example, setting the OVP Limit to 65 willconfigure the OVP feature to trigger an OVP error if the output exceeds $+ . 6 5 \lor .$ .

# Syntax

NIDCPOWER_ATTR_OVP_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250003 | ViReal64 | Read/Write | Channels |

# Remarks

Note

NI-DCPower uses the terms "source" and "output". However, while sinkingwith electronic loads and SMUs these correspond to "sinking" and "input",respectively.

# Valid Values:

Valid values vary by device.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_POWER_ALLWER_ALLOCATION_MODETION_MODE

Determines whether the device sources the power its output configuration requires ora specific wattage you request; determines whether NI-DCPower proactively checksthat this sourcing power is within the maximum per-channel and overall sourcingpower of the device.

# Syntax

NIDCPOWER_ATTR_POWER_ALLOCATION_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150207 | VInt32 | Read/Write | Channels |

# Remarks

When this attribute configures NI-DCPower to perform a sourcing power check, adevice is not permitted to source power in excess of its maximum per-channel oroverall sourcing power. If the check determines an output configuration or powerrequest would require the device to do so, NI-DCPower returns an error.

When this attribute does not configure NI-DCPower to perform a sourcing powercheck, a device complies with requests to source power in excess of its maximum per-channel or overall sourcing power and may shut down to prevent damage.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_POWER_ALLOCATION_MODE DISABLED | 1058(0x422) | The device attempts to source, on each and the power that the present source config. requires; NI-DCPower does not perform a power check. If the required power is great maximum sourcing power, the device at source the required amount and may show prevent damage. |
| NIDCPOWER_VAL_POWER_ALLOCATION_MODE_AUTOMATIC | 1059(0x423) | The device attempts to source, on each of the power that the present source config requires; NI-DCPower performs a sourcing check. If the required power is greater than the maximum sourcing power, the device does the maximum power, and NI-DCPower reuses it. |
| NIDCPOWER_VAL_POWER_ALLOCATION_MODE_manual | 1060(0x424) | The device attempts to source, on each of the power you request with the NIDCPOWER_ATTR_REQUESTED_POWER attribute; NI-DCPower performs a sourcing check. If the requested power is either less or greater than the maximum sourcing power, the device does not exceed the requested or allowed value, and NI-DCPower returns an error. |

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_BIAS_DELSE_BIAS_DELAY

Determines when, in seconds, the device generates the Pulse Complete event aftergenerating the "off" level of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_DELAY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150092 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values: 0 to 167 seconds

Default Value: 16.67 milliseconds

NIDCPOWER_ATTR_PULSE_OFF_TIME

Determines the length, in seconds, of the off phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_OFF_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150094 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values: 50 microseconds to 167 seconds

Default Value: 34 milliseconds

NIDCPOWER_ATTR_PULSE_ON_TIME

Determines the length, in seconds, of the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_ON_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150093 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values: For the PXIe-4139 (40 W), 10 microseconds to 167 seconds. For all othersupported devices, 50 microseconds to 167 microseconds.

Default Value: 34 milliseconds

NIDCPOWER_ATTR_REQUESTTR_REQUESTED_POWER_ALLWER_ALLOCATION

Specifies the power, in watts, to request the device to source from each active channel.

# Syntax

NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150206 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute defines the power to source from the device only if theNIDCPOWER_ATTR_POWER_ALLOCATION_MODE attribute is set toNIDCPOWER_VAL_POWER_ALLOCATION_MODE_MANUAL.

The power you request with this attribute may be incompatible with the power a givensource configuration requires or the power the device can provide:

| Incompatibility | Behavior |
| --- | --- |
| Requested power < power required for source configuration | * Device does not exceed the requested power * NI-DCPower returns an error |
| Requested power > maximum per-channel or overall sourcing power | * Device does not exceed the allowed power * NI-DCPower returns an error |

Valid Values: [0, device per-channel maximum power]

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_SEQUENCE_LOOP_COUNT

Specifies the number of times a sequence is run after initiation.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_LOOP_COUNT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150025 | VInt32 | Read/Write | Channels |

# Remarks

Refer to the Sequence Source Mode topic in the NI DC Power Supplies and SMUs Help for more information about the sequence loop count.

Valid Range: For all supported instruments, 1 to 2147483647.

Default Value: 1

# Related Topics:

NIDCPOWER_ATTR_SEQUENCE_LOOP_COUNT_IS_FINITE

Specifies whether a sequence should repeat indefinitely.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_LOOP_COUNT_IS_FINITE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150078 | ViBoolean | Read/Write | Channels |

# Remarks

Refer to the Sequence Source Mode topic in the NI DC Power Supplies and SMUs Help for more information about infinite sequencing.

Default Value: VI_TRUE

# Related Topics:

NIDCPOWER_ATTR_SEQUENCE_STTR_SEQUENCE_STEP_DELTEP_DELTA_TIME

Specifies the amount of time, in seconds, between the start of two consecutive steps ina sequence.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150198 | ViReal64 | Read/Write | Channels |

# Remarks

You can specify this attribute as one of the attributeIDs when calling theniDCPower_CreateAdvancedSequenceWithChannels function. In this case, thisattribute specifies the amount of time between the start of the active step and the startof the next step.

This attribute is applicable only if theNIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME_ENABLED attribute is set toVI_TRUE. This attribute does not apply to the last step of the last iteration of asequence.

# Note

You can set values for the NIDCPOWER_ATTR_SOURCE_DELAY and Measureattributes in conjunction with this attribute. Values forNIDCPOWER_ATTR_SOURCE_DELAY may conflict with the value of thisattribute; Measure attributes may conflict with the value of this attribute onlyif the NIDCPOWER_ATTR_MEASURE_WHEN attribute is set toNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE.

NI recommends that you configure other attributes in the Commit step whenconfiguring NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME using theniDCPower_CreateAdvancedSequenceCommitStepWithChannels function to reducethe setup time in the first step of sequence.

# Note

Alternatively, you can configure other attributes in first session, then closethe session and proceed to start a second session withNIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME. The channel retains theprevious settings in the first session. As a result, the setup time is reduced inthe first step. For more information, refer to Sequence Step Delta TimeTiming Issues.

Valid Values

| Device | Values |
| --- | --- |
| PXIe-4135, PXIe-4136/4137, PXIe-4138/4139 | [12.5 us, 60 s] |
| PXIe-4140/4141, PXIe-4142/4143, PXIe-4144/4145 | [10 us, 60 s] |
| PXle-4147 | [10 us, 26.512 s] |

Default Value: Refer to Supported Attributes by Device for the default value by device.

# Note

NI-DCPower coerces the value you specify for this attribute to the nearestmultiple of a device-specific resolution. You can read back the value of thisattribute to determine the coerced value. See the table below.

| Device | Selected Value | Resolution |
| --- | --- | --- |
| PXIe-4135, PXIe-4136/4137, PXIe-4138/4139 | [12.5 us, 21.4748 s] | 10 ns |
|  | (21.4748 s, 60 s] | 10 us |
| PXIe-4140/4141, PXIe-4142/4143, PXIe-4144/4145 | [10 us, 233.0169 ms] | 27.7778 ns |
|  | (233.0169 ms, 60 s] | 10 us |
| PXIe-4147 | [10 us, 26.512 s] | 6.17 ns |

Related Topics:

Sequence Source Mode

Advanced Sequencing

NIDCPOWER_ATTR_SEQUENCE_S TTR_SEQUENCE_STEP_DEL TEP_DELTA_TIME_ENABLEDA_TIME_ENABLED

Specifies whether the NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME attribute isenabled (VI_TRUE) or disabled (VI_FALSE).

# Syntax

NIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150199 | ViBoolean | Read/Write | Channels |

# Remarks

When this attribute is set to VI_TRUE, you can set theNIDCPOWER_ATTR_SEQUENCE_STEP_DELTA_TIME attribute to control the timebetween consecutive steps in the sequence.

# Note

This attribute is notsupported by all devices. Refer to Supported Attributes byDevice for information about supported devices.

This attribute is applicable only if the NIDCPOWER_ATTR_SOURCE_MODE attribute isset to NIDCPOWER_VAL_SEQUENCE and may be set to VI_TRUE only if:

• The NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE attribute is set to

NIDCPOWER_VAL_NONE;

• The NIDCPOWER_ATTR_SEQUENCE_ADVANCE_TRIGGER_TYPE attribute is set toNIDCPOWER_VAL_NONE; and

• The NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_VOLTAGE or NIDCPOWER_VAL_DC_CURRENT.

Default Value: Refer to Supported Attributes by Device for the default value by device.

Related Topics:

Sequence Source Mode

Advanced Sequencing

NIDCPOWER_ATTR_SOURCE_DELAY

Determines when, in seconds, the device generates the Source Complete event,potentially starting a measurement if the NIDCPOWER_ATTR_MEASURE_WHENattribute is set to NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE.

# Syntax

NIDCPOWER_ATTR_SOURCE_DELAY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150051 | ViReal64 | Read/Write | Channels |

# Remarks

Refer to the Single Point Source Mode and Sequence Source Mode topics for moreinformation.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: For the PXIe-4051, 0 to 39 seconds. For the PXIe-4147, 0 to 26.5 seconds.For the PXIe-4150/4151, 0 to 42 seconds. For the PXIe-4162/4163 and PXIe-4190, 0 to 23seconds. For all other supported instruments, 0 to 167 seconds.

Default Value: 0.01667 seconds

Advanced Sequencing

Groups

Group members

| Name | Description |
| --- | --- |
| NIDCPOWER_ATTR.Active_ADVANCEDSequence | Specifies the advanced sequence to configure or generate. |
| NIDCPOWER_ATTR.Active_ADVANCEDSequence_STEP | Specifies the advanced sequence step to configure. |

# Syntax

NIDCPOWER_ATTR_ACTIVE_ADVANCED_SEQUENCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150074 | ViString | Read/Write | Channels |

# Remarks

NIDCPOWER_ATTR_ACTIVE_ADTIVE_ADVANCED_SEQUENCE_SANCED_SEQUENCE_STEP

Specifies the advanced sequence step to configure.

# Syntax

NIDCPOWER_ATTR_ACTIVE_ADVANCED_SEQUENCE_STEP

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150075 | VInt64 | Read/Write | Channels |

# Remarks

Sequence steps are zero-indexed. To configure the Commit step, enter -1.

# Constant Power

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_CURRENT_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150361 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_CONSTANT_POWER and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

# Valid Values:

The valid values for this attribute are determined by the selected value forNIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGE.

NIDCPOWER_ATTR_CONSTANT_POWER_LEVELWER_LEVEL

Specifies the power level, in watts, that the device attempts to generate on thespecified channel(s). This attribute is applicable only if theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_POWER.

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150363 | ViReal64 | Read/Write | Channels |

# Note

The channel must be enabled for the specified power level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Attributes by Device for information about supported instruments.

# Valid Values:

The valid values for this attribute are determined by the selected value forNIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGE.

NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGEWER_LEVEL_RANGE

Specifies the power level range, in watts, for the specified channel(s). The rangedefines the valid values to which you can set the power level. This attribute isapplicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_POWER. For valid ranges, refer to the specifications foryour instrument.

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150364 | ViReal64 | Read/Write | Channels |

# Note

The voltage range and current range used by the instrument areautomatically determined by the selected power level range. For moreinformation, refer to the specifications for your instrument.

For valid ranges, refer to the specifications for your instrument.

Constant Resistance

Groups

Group members

| Name | Description |
| --- | --- |
| NIDCPOWER_ATTR_constantResistance_CURRENT_LIMIT | Specifies the current limit, in amps, that the output cannot exceed when generating the desired resistance level on the specified channel(s). The device will operate in Constant Current mode if the current exceeds the specified limit. |
| NIDCPOWER_ATTR CONSTANTResistance LEVEL | Specifies the resistance level, in ohms, that the device attempts to generate on the specified channel(s). This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to NIDCPOWER_VAL_constantResistance. |
| NIDCPOWER_ATTR CONSTANTResistance LEVEL RANGE | Specifies the resistance level range, in ohms, for the specified channel(s). The range defines the valid values to which you can set the resistance level. This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to NIDCPOWER_VAL_constantResistance. |

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_CURRENT_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150367 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_CONSTANT_RESISTANCE and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

# Valid Values:

The valid values for this attribute are determined by the selected value forNIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL_RANGE.

NIDCPOWER_ATTR_CONSTANT_RESISANT_RESISTANCE_LEVELANCE_LEVEL

Specifies the resistance level, in ohms, that the device attempts to generate on thespecified channel(s). This attribute is applicable only if theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_RESISTANCE.

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150369 | ViReal64 | Read/Write | Channels |

# Note

The channel must be enabled for the specified resistance level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Attributes by Device for information about supported instruments.

# Valid Values:

The valid values for this attribute are determined by the selected value forNIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL_RANGE.

NIDCPOWER_ATTR_CONSTANT_RESISANT_RESISTANCE_LEVEL_RANGEANCE_LEVEL_RANGE

Specifies the resistance level range, in ohms, for the specified channel(s). The rangedefines the valid values to which you can set the resistance level. This attribute isapplicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_RESISTANCE.

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150370 | ViReal64 | Read/Write | Channels |

# Note

The voltage range and current range used by the instrument areautomatically determined by the selected resistance level range. For moreinformation, refer to the specifications for your instrument.

For valid ranges, refer to the specifications for your instrument.

Custom Transient R ansient Response esponse

# NIDCPOWER_ATTR_CONSTANT_POWER_COMPENOMPEN

The frequency at which a pole-zero pair is added to the system when theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to

NIDCPOWER_VAL_CONSTANT_POWER and the output current is below the currentlimit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_COMPENSATION_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150360 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CONSTANT_POWER_GAIN_BAWER_GAIN_BA

The frequency at which the unloaded loop gain extrapolates to 0 dB in the absence ofadditional poles and zeroes. This attribute takes effect when theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_POWER and the output current is below the currentlimit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_GAIN_BANDWIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150362 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CONSTANT_POWER_POLE_ZWER_POLE_Z

The ratio of the pole frequency to the zero frequency when the

NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to

NIDCPOWER_VAL_CONSTANT_POWER and the output current is below the currentlimit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_POWER_POLE_ZERO_RATIO

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150365 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

Constant Resistance

# NIDCPOWER_ATTR_CONSTANT_RESIS ANT_RESISTANCE_COO

The frequency at which a pole-zero pair is added to the system when theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_CONSTANT_RESISTANCE and the output current is below thecurrent limit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_COMPENSATION_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150366 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CONSTANT_RESIS ANT_RESISTANCE_GAIANCE_GAI

The frequency at which the unloaded loop gain extrapolates to 0 dB in the absence ofadditional poles and zeroes. This attribute takes effect when the

NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to

NIDCPOWER_VAL_CONSTANT_RESISTANCE and the output current is below thecurrent limit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_GAIN_BANDWIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150368 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CONSTANT_RESIS ANT_RESISTANCE_POANCE_PO

The frequency at which a pole-zero pair is added to the system when

NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to

NIDCPOWER_VAL_CONSTANT_RESISTANCE and the output current is below the

current limit.

# Syntax

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_POLE_ZERO_RATIO

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150371 | ViReal64 | Read/Write | Channels |

# Default Value:

Determined by the value of the NIDCPOWER_VAL_NORMAL setting of theNIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

Current

# Syntax

NIDCPOWER_ATTR_CURRENT_COMPENSATION_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150071 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CURRENT_GAIN_BANDURRENT_GAIN_BANDWIDTH

The frequency at which the unloaded loop gain extrapolates to 0 dB in the absence ofadditional poles and zeroes. This attribute takes effect when the channel is in ConstantCurrent mode.

# Syntax

NIDCPOWER_ATTR_CURRENT_GAIN_BANDWIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150070 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATI

The ratio of the pole frequency to the zero frequency when the channel is in ConstantCurrent mode.

# Syntax

NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150072 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

Voltage

# NIDCPOWER_ATTR_VOLTAGE_COMPENSA OMPENSATION_FTION_F

The frequency at which a pole-zero pair is added to the system when the channel is inConstant Voltage mode.

# Syntax

NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150068 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_VOLTAGE_GAIN_BAND GE_GAIN_BANDWIDTH

The frequency at which the unloaded loop gain extrapolates to 0 dB in the absence ofadditional poles and zeroes. This attribute takes effect when the channel is in Constant

Voltage mode.

# Syntax

NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150067 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

# NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RA GE_POLE_ZERO_RATIO

The ratio of the pole frequency to the zero frequency when the channel is in ConstantVoltage mode.

# Syntax

NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150069 | ViReal64 | Read/Write | Channels |

# Remarks

Default Value: Determined by the value of the NIDCPOWER_VAL_NORMAL setting ofthe NIDCPOWER_ATTR_TRANSIENT_RESPONSE attribute.

DC Current

# Syntax

NIDCPOWER_ATTR_CURRENT_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150009 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_CURRENT.

# Note

The channel must be enabled for the specified current level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values to which theNIDCPOWER_ATTR_CURRENT_LEVEL_RANGE attribute is set.

# High-Level Functions:

• niDCPower_ConfigureCurrentLevel

NIDCPOWER_ATTR_CURRENT_LEVEL_AURRENT_LEVEL_AUTORANGE

Specifies whether NI-DCPower automatically selects the current level range based onthe desired current level for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150017 | VInt32 | Read/Write | Channels |

# Remarks

If you set this attribute to NIDCPOWER_VAL_ON, NI-DCPower ignores any changes youmake to the NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE attribute. If you change theNIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE attribute from

NIDCPOWER_VAL_ON to NIDCPOWER_VAL_OFF, NI-DCPower retains the last value the

NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE attribute was set to (or the default valueif the attribute was never set) and uses that value as the current level range.

Query the NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE attribute by using theniDCPower_GetAttributeViInt32 function for information about which range NI-DCPower automatically selects.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_CURRENT.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | NI-DCPower does not automatically select the current level range. |
| NIDCPOWER_VAL_ON | 1 (0x1) | NI-DCPower automatically selects the current level range. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_CURRENT_LEVEL_FURRENT_LEVEL_FALLING_SLEW_RAALLING_SLEW_RATE

Specifies the rate of decrease, in amps per microsecond, to apply to the absolutemagnitude of the current level of the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150344 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if you set the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute to NIDCPOWER_VAL_DC_CURRENT.

# Valid Values:

The valid values for this attribute are hardware dependent.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE

Specifies the current level range, in amps, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150011 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid value to which the current level can be set. Use theNIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE attribute to enable automaticselection of the current level range.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_CURRENT.

# Note

The channel must be enabled for the specified current level range to takeeffect. Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-Level Functions:

• niDCPower_ConfigureCurrentLevelRange

NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE

Specifies the rate of increase, in amps per microsecond, to apply to the absolutemagnitude of the current level of the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150343 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if you set the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute to NIDCPOWER_VAL_DC_CURRENT.

# Valid Values:

The valid values for this attribute are hardware dependent.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_VOLTAGE_LIMITGE_LIMIT

Specifies the voltage limit, in volts, that the output cannot exceed when generating thedesired current level on the specified channels.

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150010 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION

attribute is set to NIDCPOWER_VAL_DC_CURRENT and the

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set to

NIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values to which theNIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attribute is set.

# High-Level Functions:

• niDCPower_ConfigureVoltageLimit

NIDCPOWER_ATTR_VOLTAGE_LIMIT_AGE_LIMIT_AUTORANGE

Specifies whether NI-DCPower automatically selects the voltage limit range based onthe desired voltage limit for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150018 | VInt32 | Read/Write | Channels |

# Remarks

If this attribute is set to NIDCPOWER_VAL_ON, NI-DCPower ignores any changes youmake to the NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attribute. If you change theNIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE attribute from

NIDCPOWER_VAL_ON to NIDCPOWER_VAL_OFF, NI-DCPower retains the last value theNIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attribute was set to (or the default value ifthe attribute was never set) and uses that value as the voltage limit range.

Query the NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attribute by using theniDCPower_GetAttributeViInt32 function to find out which range NI-DCPowerautomatically selects.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTION

attribute is set to NIDCPOWER_VAL_DC_CURRENT.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | NI-DCPower does not automatically select the voltage limit range. |
| NIDCPOWER_VAL_ON | 1 (0x1) | NI-DCPower automatically selects the voltage limit range. |

nn

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGHGE_LIMIT_HIGH

Specifies the maximum voltage, in volts, that the output can produce when generatingthe desired current on the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150185 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_CURRENT.

You must also specify NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW to complete theasymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE,NIDCPO • WER_ATTR_VOLTAGE_LIMIT_RANGE]

The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_VOLTAGE_LIMIT_LGE_LIMIT_LOW

Specifies the minimum voltage, in volts, that the output can produce when generatingthe desired current on the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150186 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_CURRENT.

You must also specify NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH to complete theasymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE, -1% ofNIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE GE_LIMIT_RANGE

Specifies the voltage limit range, in volts, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150012 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values to which the voltage limit can be set. Use theNIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE attribute to enable automaticselection of the voltage limit range.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_CURRENT.

# Note

The channel must be enabled for the specified voltage limit range to takeeffect. Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the Ranges topic for your device in the NI DC PowerSupplies and SMUs Help or to the instrument specifications.

High-L • evel Functions:

# DC Voltage

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250005 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE and the

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values to whichNIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute is set.

High-L • evel Functions:

niDCPower_ConfigureCurrentLimit

NIDCPOWER_ATTR_CURRENT_LIMIT_AURRENT_LIMIT_AUTORANGE

Specifies whether NI-DCPower automatically selects the current limit range based onthe desired current limit for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT_AUTORANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150016 | VInt32 | Read/Write | Channels |

# Remarks

If you set this attribute to NIDCPOWER_VAL_ON, NI-DCPower ignores any changes youmake to the NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute. If you change thisattribute from NIDCPOWER_VAL_ON to NIDCPOWER_VAL_OFF, NI-DCPower retainsthe last value the NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute was set to (orthe default value if the attribute was never set) and uses that value as the current limitrange.

Query the NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute by using theniDCPower_GetAttributeViInt32 function for information about which range NI-DCPower automatically selects.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | NI-DCPower does not automatically select the current limit range. |
| NIDCPOWER_VAL_ON | 1 (0x1) | NI-DCPower automatically selects the current limit range. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_CURRENT_LIMIT_BEHAVIOR

Specifies the behavior of the power supply when the output current is equal to orgreater than the value of the Current Limit (NIDCPOWER_ATTR_CURRENT_LIMIT)attribute.

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250004 | VInt32 | Read/Write | Channels |

# Note

This attribute only supports one value. There is no reason to modify this

attribute.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_CURRENT_REGULATE | 0(0x0) | Controls output current so that it does not exceed the current limit. Power continues to generate even if the current limit is reached. |
| NIDCPOWER_VAL_CURRENT_TRIP | 1(0x1) | Not supported. |

NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH

Specifies the maximum current, in amps, that the output can produce whengenerating the desired voltage on the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150187 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_VOLTAGE.

You must also specify NIDCPOWER_ATTR_CURRENT_LIMIT_LOW to complete theasymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE,NIDCPO• WER_ATTR_CURRENT_LIMIT_RANGE]

The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_CURRENT_LIMIT_LURRENT_LIMIT_LOW

Specifies the minimum current, in amps, that the output can produce when generatingthe desired voltage on the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150188 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_DC_VOLTAGE.

You must also specify NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH to complete theasymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE, -1% ofNIDCPOWER_ATTR_CURRENT_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE

Specifies the current limit range, in amps, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150004 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid value to which the current limit can be set. Use theNIDCPOWER_ATTR_CURRENT_LIMIT_AUTORANGE attribute to enable automaticselection of the current limit range.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-L • evel Functions:

niDCPower_ConfigureCurrentLimitRange

NIDCPOWER_ATTR_VOLTAGE_LEVELGE_LEVEL

Specifies the voltage level, in volts, that the device attempts to generate on thespecified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250001 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE.

# Note

The channel must be enabled for the specified voltage level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE attribute.

High-Level Functions:

• niDCPower_ConfigureVoltageLevel

# NIDCPOWER_ATTR_VOLTAGE_LEVEL_AGE_LEVEL_AUTORANGE

Specifies whether NI-DCPower automatically selects the voltage level range based onthe desired voltage level for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150015 | VInt32 | Read/Write | Channels |

# Remarks

If you set this attribute to NIDCPOWER_VAL_ON, NI-DCPower ignores any changes youmake to the NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE attribute. If you change theNIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE attribute from

NIDCPOWER_VAL_ON to NIDCPOWER_VAL_OFF, NI-DCPower retains the last value theNIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE attribute was set to (or the default value ifthe attribute was never set) and uses that value as the voltage level range.

Query the NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE attribute by using theniDCPower_GetAttributeViInt32 function for information about which range NI-DCPower automatically selects.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | NI-DCPower does not automatically select the voltage level range. |
| NIDCPOWER_VAL_ON | 1 (0x1) | NI-DCPower automatically selects the voltage level range. |

# Default Value:NIDCPOWER_VAL_OFF

NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGEGE_LEVEL_RANGE

Specifies the voltage level range, in volts, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150005 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values to which the voltage level can be set. Use theNIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE attribute to enable automaticselection of the voltage level range.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE.

# Note

The channel must be enabled for the specified voltage level range to takeeffect. Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-Level Functions:

• niDCPower_ConfigureVoltageLevelRange

Output Cutoff

Groups

Group members

| Name | Description |
| --- | --- |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | Specifies a limit for positive current slew rate, in amps per microsecond, for output cutoff. If the current increases at a rate that exceeds this limit, the output is disconnected. |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | Specifies a limit for negative current slew rate, in amps per microsecond, for output cutoff. If the current decreases at a rate that exceeds this limit, the output is disconnected. |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | Specifies a high limit current value, in amps, for output cutoff. If the measured current exceeds this limit, the output is disconnected. |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | Specifies a low limit current value, in amps, for output cutoff. If the measured current exceeds this limit, the output is disconnected. |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | Enables or disables current overrange functionality for output cutoff. If enabled, the output is disconnected when the measured current saturates the current range. |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | Delays disconnecting the output by the time you specify, in seconds, when a limit is exceeded. |
| NIDCPOWER ATTR OUTPUT CUTOFF ENABLED | Enables or disables output cutoff functionality. If enabled, you can define output cutoffs that, if exceeded, cause the output of the specified channel(s) to be disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE CHANGE LIMIT HIGH | Specifies a limit for positive voltage slew rate, in volts per microsecond, for output cutoff. If the voltage increases at a rate that exceeds this limit, the output is disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE CHANGE LIMIT LOW | Specifies a limit for negative voltage slew rate, in volts per microsecond, for output cutoff. If the voltage decreases at a rate that exceeds this limit, the output is disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE MEASURE_LIMIT_HIGH | Specifies a high limit voltage value, in volts, for output cutoff. If the measured voltage exceeds this limit, the output is disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE MEASURE LIMIT LOW | Specifies a low limit voltage value, in volts, for output cutoff. If the measured voltage exceeds this limit, the output is disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE OUTPUT LIMIT HIGH | Specifies a high limit voltage value, in volts, for output cutoff. If the voltage output exceeds this limit, the output is disconnected. |
| NIDCPOWER ATTR OUTPUT CUTOFF VOLTAGE OUTPUT LIMIT LOW | Specifies a low limit voltage value, in volts, for output cutoff. If the voltage output falls below this limit, the output is disconnected. |

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150295 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call the

niDCPower_QueryLatchedOutputCutoffState function with

NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_CHANGE_HIGH as the

outputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_CTTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LURRENT_CHANGE_LIMIT_LOW

Specifies a limit for negative current slew rate, in amps per microsecond, for outputcutoff. If the current decreases at a rate that exceeds this limit, the output isdisconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150239 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_CHANGE_LOW as the

outputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGHURRENT_MEASURE_LIMIT_HIGH

Specifies a high limit current value, in amps, for output cutoff. If the measured current

exceeds this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150237 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEASURE_HIGH as theoutputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_L URRENT_MEASURE_LIMIT_LOW

Specifies a low limit current value, in amps, for output cutoff. If the measured currentexceeds this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150293 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has fallen below this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_MEASURE_LOW as the

outputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_CTTR_OUTPUT_CUTOFF_CURRENT_OURRENT_OVERRANGE_ENABLEDVERRANGE_ENABLED

Enables or disables current overrange functionality for output cutoff. If enabled, theoutput is disconnected when the measured current saturates the current range.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150240 | ViBoolean | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_CURRENT_SATURATED as the

outputCutoffReason.

Attributes by Device for information about supported instruments.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_DEL OFF_DELAY

Delays disconnecting the output by the time you specify, in seconds, when a limit isexceeded.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150300 | ViReal64 | Read/Write | Channels |

# NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED

Enables or disables output cutoff functionality. If enabled, you can define outputcutoffs that, if exceeded, cause the output of the specified channel(s) to bedisconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150235 | ViBoolean | Read/Write | Channels |

# Remarks

When this attribute is disabled, all other output cutoff attributes are ignored.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGHGE_CHANGE_LIMIT_HIGH

Specifies a limit for positive voltage slew rate, in volts per microsecond, for outputcutoff. If the voltage increases at a rate that exceeds this limit, the output isdisconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150294 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call the

niDCPower_QueryLatchedOutputCutoffState function with

NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_CHANGE_HIGH as the

outputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_L GE_CHANGE_LIMIT_LOW

Specifies a limit for negative voltage slew rate, in volts per microsecond, for outputcutoff. If the voltage decreases at a rate that exceeds this limit, the output isdisconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150238 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_CHANGE_LOW as the

outputCutoffReason.

respectively.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH GE_MEASURE_LIMIT_HIGH

Specifies a high limit voltage value, in volts, for output cutoff. If the measured voltageexceeds this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150357 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_MEASURE_HIGH as theoutputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_L GE_MEASURE_LIMIT_LOW

Specifies a low limit voltage value, in volts, for output cutoff. If the measured voltageexceeds this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150358 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has fallen below this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_MEASURE_LOW as the

outputCutoffReason.

NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH GE_OUTPUT_LIMIT_HIGH

Specifies a high limit voltage value, in volts, for output cutoff. If the voltage outputexceeds this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150236 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has exceeded this limit, call theniDCPower_QueryLatchedOutputCutoffState function with

# NIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUTPUT_HIGH as the

outputCutoffReason.

# NIDCPOWER_ATTR_OUTPUT_C TTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_L GE_OUTPUT_LIMIT_LOW

Specifies a low limit voltage value, in volts, for output cutoff. If the voltage output fallsbelow this limit, the output is disconnected.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150292 | ViReal64 | Read/Write | Channels |

# Remarks

To find out whether an output has fallen below this limit, call theniDCPower_QueryLatchedOutputCutoffState function withNIDCPOWER_VAL_OUTPUT_CUTOFF_REASON_VOLTAGE_OUTPUT_LOW as the

outputCutoffReason.

# Pulse Current

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150088 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT.

# Note

The channel must be enabled for the specified current level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseBiasCurrentLevel

NIDCPOWER_ATTR_PULTTR_PULSE_BIAS_VSE_BIAS_VOLTAGE_LIMIT GE_LIMIT

Specifies the pulse voltage limit, in volts, that the output cannot exceed whengenerating the desired current on the specified channel(s) during the off phase of apulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150089 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseBiasVoltageLimit

NIDCPOWER_ATTR_PULTTR_PULSE_BIAS_VSE_BIAS_VOLTAGE_LIMIT_HIGHGE_LIMIT_HIGH

Specifies the maximum voltage, in volts, that the output can produce when generatingthe desired pulse current on the specified channel(s) during the off phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150191 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_CURRENT.

You must also specify NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW tocomplete the asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to the

NIDCPOWER_ATTR_OUTPUT_ENABLED attribute and the

NIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE,NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_BIAS_VSE_BIAS_VOLTAGE_LIMIT_LGE_LIMIT_LOW

Specifies the minimum voltage, in volts, that the output can produce when generatingthe desired pulse current on the specified channel(s) during the off phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150192 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_CURRENT.

You must also specify NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH tocomplete the asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more information

about enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE, $- 1 \%$ ofNIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL

Specifies the pulse current level, in amps, that the device attempts to generate on thespecified channel(s) during the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150086 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT.

# Note

The channel must be enabled for the specified current level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseCurrentLevel

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE

Specifies the pulse current level range, in amps, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150090 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values to which you can set the pulse current level andpulse bias current level.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT.

# Note

The channel must be enabled for the specified pulse current level range totake effect. Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute formore information about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-Level Functions:

• niDCPower_ConfigurePulseCurrentLevelRange

NIDCPOWER_ATTR_PULTTR_PULSE_VOLTAGE_LIMITGE_LIMIT

Specifies the pulse voltage limit, in volts, that the output cannot exceed whengenerating the desired pulse current on the specified channel(s) during the on phaseof a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150087 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseVoltageLimit

NIDCPOWER_ATTR_PULTTR_PULSE_VOLTAGE_LIMIT_HIGHGE_LIMIT_HIGH

Specifies the maximum voltage, in volts, that the output can produce when generatingthe desired pulse current on the specified channel(s) during the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150189 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_CURRENT.

You must also specify NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW to completethe asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE,NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_VOLTAGE_LIMIT_LGE_LIMIT_LOW

Specifies the minimum voltage, in volts, that the output can produce when generatingthe desired pulse current on the specified channel(s) during the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150190 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_CURRENT.

You must also specify NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH to completethe asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE, -1% ofNIDCPO• WER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE]

The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_VOLTAGE_LIMIT_RANGEGE_LIMIT_RANGE

Specifies the pulse voltage limit range, in volts, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150091 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values to which you can set the pulse voltage limit andpulse bias voltage limit.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_CURRENT.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-Level Functions:

• niDCPower_ConfigurePulseVoltageLimitRange

Pulse Voltage

Groups

Group members

| Name | Description |
| --- | --- |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | Specifies the pulse bias current limit, in amps, that the output cannot exceed when generating the desired pulse bias voltage on the specified channel(s) during the off phase of a pulse. |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | Specifies the maximum current, in amps, that the output can produce when generating the desired pulse voltage on the specified channel(s) during the off phase of a pulse. |
| NIDCPOWER_ATTR PULSE BIAS CURRENT LIMIT LOW | Specifies the minimum current, in amps, that the output can produce when generating the desired pulse voltage on the specified channel(s) during the off phase of a pulse. |
| NIDCPOWER_ATTR PULSE BIAS VOLTAGE_LEVEL | Specifies the pulse bias voltage level, in volts, that the device attempts to generate on the specified channel(s) during the off phase of a pulse. |
| NIDCPOWER_ATTR PULSE CURRENT LIMIT | Specifies the pulse current limit, in amps, that the output cannot exceed when generating the desired pulse voltage on the specified channel(s) during the on phase of a pulse. |
| NIDCPOWER_ATTR PULSE CURRENT LIMIT_HIGH | Specifies the maximum current, in amps, that the output can produce when generating the desired pulse voltage on the specified channel(s) during the on phase of a pulse. |
| NIDCPOWER_ATTR PULSE CURRENT LIMIT_LOW | Specifies the minimum current, in amps, that the output can produce when generating the desired pulse voltage on the specified channel(s) during the on phase of a pulse. |
| NIDCPOWER_ATTR PULSE CURRENT LIMIT_RANGE | Specifies the pulse current limit range, in amps, for the specified channel(s). |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | Specifies the pulse voltage level, in volts, that the device attempts to generate on the specified channel(s) during the on phase of a pulse. |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | Specifies the pulse voltage level range, in volts, for the specified channel(s). |

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150083 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE property.

# High-Level Functions:

• niDCPower_ConfigurePulseBiasCurrentLimit

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH

Specifies the maximum current, in amps, that the output can produce when

generating the desired pulse voltage on the specified channel(s) during the off phaseof a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150195 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set to

NIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and the

NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set to

NIDCPOWER_VAL_PULSE_VOLTAGE.

You must also specify NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW tocomplete the asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to the

NIDCPOWER_ATTR_OUTPUT_ENABLED attribute and the

NIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE,NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PUL TTR_PULSE_BIAS_C SE_BIAS_CURRENT_LIMIT_L URRENT_LIMIT_LOW

Specifies the minimum current, in amps, that the output can produce when generatingthe desired pulse voltage on the specified channel(s) during the off phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150196 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_VOLTAGE.

You must also specify NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH tocomplete the asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE, -1% ofNIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_BIAS_VSE_BIAS_VOLTAGE_LEVELGE_LEVEL

Specifies the pulse bias voltage level, in volts, that the device attempts to generate onthe specified channel(s) during the off phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150082 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE.

# Note

The channel must be enabled for the specified voltage level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE attribute.

# High-Level Functions:

niDCPower_ConfigurePulseBiasVoltageLevel

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT

Specifies the pulse current limit, in amps, that the output cannot exceed whengenerating the desired pulse voltage on the specified channel(s) during the on phaseof a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150081 | ViReal64 | Read/Write | Channels |

# Remarks

The limit is specified as a positive value, but symmetric positive and negative limits areenforced simultaneously.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE and theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_SYMMETRIC.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseCurrentLimit

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH

Specifies the maximum current, in amps, that the output can produce whengenerating the desired pulse voltage on the specified channel(s) during the on phaseof a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150193 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_VOLTAGE.

You must also specify NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW to completethe asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to the

NIDCPOWER_ATTR_OUTPUT_ENABLED attribute and the

NIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more informationabout enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: $[ 1 \%$ of NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE,NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULTTR_PULSE_CURRENT_LIMIT_LURRENT_LIMIT_LOW

Specifies the minimum current, in amps, that the output can produce when generatingthe desired pulse voltage on the specified channel(s) during the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150194 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if theNIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY attribute is set toNIDCPOWER_VAL_COMPLIANCE_LIMIT_SYMMETRY_ASYMMETRIC and theNIDCPOWER_ATTR_OUTPUT_FUNCTION attribute is set toNIDCPOWER_VAL_PULSE_VOLTAGE.

You must also specify NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH to completethe asymmetric range.

# Note

The channel must be enabled and the output relay must be connected forthe specified limit to take effect. Refer to theNIDCPOWER_ATTR_OUTPUT_ENABLED attribute and theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute for more information

about enabling the channel and connecting the output relay respectively.

# Note

Refer to Supported Attributes by Device for information about supporteddevices.

Valid Values: [-NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE, $- 1 \%$ ofNIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE]

• The range bounded by the limit high and limit low must include zero.

# Note

The limit may be extended beyond the selected limit range if theNIDCPOWER_ATTR_OVERRANGING_ENABLED attribute is set to VI_TRUE.

Default Value: Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE

Specifies the pulse current limit range, in amps, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150085 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values to which you can set the pulse current limit andpulse bias current limit.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE.

# Note

The channel must be enabled for the specified current limit to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

# High-Level Functions:

• niDCPower_ConfigurePulseCurrentLimitRange

NIDCPOWER_ATTR_PUL TTR_PULSE_VOLTAGE_LEVELGE_LEVEL

Specifies the pulse voltage level, in volts, that the device attempts to generate on thespecified channel(s) during the on phase of a pulse.

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150080 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE.

# Note

The channel must be enabled for the specified voltage level to take effect.Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute for moreinformation about enabling the channel.

Valid Values: The valid values for this attribute are defined by the values you specifyfor the NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE attribute.

# High-Level Functions:

• niDCPower_ConfigurePulseVoltageLevel

NIDCPOWER_ATTR_PULTTR_PULSE_VOLTAGE_LEVEL_RANGEGE_LEVEL_RANGE

Specifies the pulse voltage level range, in volts, for the specified channel(s).

# Syntax

NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150084 | ViReal64 | Read/Write | Channels |

# Remarks

The range defines the valid values at which you can set the pulse voltage level andpulse bias voltage level.

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_PULSE_VOLTAGE.

# Note

The channel must be enabled for the specified pulse voltage level range totake effect. Refer to the NIDCPOWER_ATTR_OUTPUT_ENABLED attribute formore information about enabling the channel.

For valid ranges, refer to the ranges topic for your device in the NI DC Power Supplies and SMUs Help or to the instrument specifications.

High-Level Functions:

• niDCPower_ConfigurePulseVoltageLevelRange

NIDCPOWER_ATTR_OUTPUT_CONNECTED

Specifies whether the output relay is connected (closed) or disconnected (open). TheNIDCPOWER_ATTR_OUTPUT_ENABLED attribute does not change based on thisattribute; they are independent of each other.

# Syntax

NIDCPOWER_ATTR_OUTPUT_CONNECTED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150060 | ViBoolean | Read/Write | Channels |

# Remarks

Set this attribute to VI_FALSE to disconnect the output terminal from the output.

# Note

Only disconnect the output when disconnecting is necessary for yourapplication. For example, a battery connected to the output terminal mightdischarge unless the relay is disconnected. Excessive connecting anddisconnecting of the output can cause premature wear on electromechanicalrelays, such as those used by the PXIe-4147, PXI-4132, or PXIe-4138/39.

# Note

The PXIe-4051 does not have an output relay. For the PXIe-4051, this attributespecifies whether the input MOSFETs are connected (ON) or disconnected(OFF).

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | The output relay is disconnected (open). |
| VI_true (1) | The output relay is connected (closed). |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Related Topics:

NIDCPOWER_ATTR_OUTPUT_ENABLED

Specifies whether the output is enabled (VI_TRUE) or disabled (VI_FALSE).

# Syntax

NIDCPOWER_ATTR_OUTPUT_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1250006 | ViBoolean | Read/Write | Channels |

# Remarks

Depending on the value you specify for the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute, you also must set the corresponding level attributes orNIDCPOWER_ATTR_OUTPUT_RESISTANCE in addition to enabling the output togenerate the desired level. For more information about configuring the output level,

refer to the NIDCPOWER_ATTR_OUTPUT_FUNCTION attribute.

This attribute has no effect on the output disconnect relay. To toggle the relay, use theNIDCPOWER_ATTR_OUTPUT_CONNECTED attribute.

# Note

If channels are in the Committed or Uncommitted states, enabling the outputdoes not take effect until you call the niDCPower_InitiateWithChannelsfunction. Refer to the Programming States topic in the NI DC Power Supplies and SMUs Help for more information about Nl-DCPowerprogramming states.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Disables generation on the specified channels. |
| VI_true (1) | Enables generation on the specified channels. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

High-L • evel Functions:

niDCPower_ConfigureOutputEnabled

# NIDCPOWER_ATTR_OUTPUT_FUNCTION

Configures the function to generate on the specified channel(s).

# Syntax

NIDCPOWER_ATTR_OUTPUT_FUNCTION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150008 | VInt32 | Read/Write | Channels |

# Remarks

When NIDCPOWER_VAL_DC_VOLTAGE is selected, the device generates the desiredvoltage level on the output as long as the output current is below the current limit. Usethe following attributes to configure the channel when

NIDCPOWER_VAL_DC_VOLTAGE is selected:

• NIDCPOWER_ATTR_VOLTAGE_LEVEL

NIDCPOWER_ATTR_CURRENT_LIMIT

NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH

NIDCPOWER_ATTR_CURRENT_LIMIT_LOW

NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE

NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY

When NIDCPOWER_VAL_DC_CURRENT is selected, the device generates the desiredcurrent level on the output as long as the output voltage is below the voltage limit. Usethe following attributes to configure the channel whenNIDCPOWER_VAL_DC_CURRENT is selected:

NIDCPOWER_ATTR_CURRENT_LEVEL

NIDCPOWER_ATTR_VOLTAGE_LIMIT

• NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH

NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW

NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE

NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE

• NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY

When NIDCPOWER_VAL_PULSE_VOLTAGE is selected, the device generates pulses atthe desired pulse voltage levels on the output as long as the output current is belowthe pulse current limit. Use the following attributes to configure the channel whenNIDCPOWER_VAL_PULSE_VOLTAGE is selected:

NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL

• NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH

NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT

• NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH

• NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW

NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE

• NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY

When NIDCPOWER_VAL_PULSE_CURRENT is selected, the device generates pulses atthe desired pulse current levels on the output as long as the output voltage is belowthe pulse voltage limit. Use the following attributes to configure the channel whenNIDCPOWER_VAL_PULSE_CURRENT is selected:

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL

NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT

• NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW

NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT

• NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH

• NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW

NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE

NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE

NIDCPOWER_ATTR_COMPLIANCE_LIMIT_SYMMETRY

When NIDCPOWER_VAL_CONSTANT_RESISTANCE is selected, the device generatesthe desired resistance level on the output as long as the output current is below thecurrent limit. Use the following attributes to configure the channel whenNIDCPOWER_VAL_CONSTANT_RESISTANCE is selected:

• NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL

NIDCPOWER_ATTR_CONSTANT_RESISTANCE_CURRENT_LIMIT

• NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL_RANGE

When NIDCPOWER_VAL_CONSTANT_POWER is selected, the device generates thedesired power level on the output as long as the output current is below the currentlimit. Use the following attributes to configure the channel whenNIDCPOWER_VAL_CONSTANT_POWER is selected:

NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL

• NIDCPOWER_ATTR_CONSTANT_POWER_CURRENT_LIMIT

• NIDCPOWER_ATTR_CONSTANT_POWER_LEVEL_RANGE

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_DC_VOLTAGE | 1006(0x3ee) | Sets the output function to DC voltage. |
| NIDCPOWER_VAL_DC_CURRENT | 1007(0x3ef) | Sets the output function to DC current. |
| NIDCPOWER_VAL_PULSE_VOLTAGE | 1049 | Sets the output function to pulse voltage. |
|  | (0x419) |  |
| NIDCPOWER_VAL_PULSE_CURRENT | 1050 (0x41a) | Sets the output function to pulse current. |
| NIDCPOWER_VAL_constantResistance | 1161 (0x489) | Sets the output function to constant resistance. |
| NIDCPOWER_VAL_constant_POWER | 1162 (0x48a) | Sets the output function to constant power. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# High-Level Functions:

• niDCPower_ConfigureOutputFunction

# NIDCPOWER_ATTR_OUTPUT_RESISTANCE

Specifies the output resistance that the device attempts to generate for the specifiedchannel(s).

# Syntax

NIDCPOWER_ATTR_OUTPUT_RESISTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150061 | ViReal64 | Read/Write | Channels |

# Remarks

Depending on the instrument, output resistance is configurable only if you set theOutput Function (NIDCPOWER_ATTR_OUTPUT_FUNCTION) of the channel as follows:

• PXIe-4141, PXIe-4143, PXIe-4145: NIDCPOWER_VAL_DC_VOLTAGE

• PXIe-4135, PXIe-4137, PXIe-4139, PXIe-4147, PXIe-4162, PXIe-4163:NIDCPOWER_VAL_DC_CURRENT or NIDCPOWER_VAL_DC_VOLTAGE

# Note

The channel must be enabled for the specified output resistance to takeeffect. Refer to the Output Enabled (NIDCPOWER_ATTR_OUTPUT_ENABLED)attribute for more information about enabling the channel.

# Note

Using the Merged Channels (NIDCPOWER_ATTR_MERGED_CHANNELS)attribute to merge instrument outputs affects the valid output resistancerange you can program. Refer to the Merged Channels topic for your devicefor details.

# Note

To specify the resistance level that the device attempts to generate whenOutput Function (NIDCPOWER_ATTR_OUTPUT_FUNCTION) is set toNIDCPOWER_VAL_CONSTANT_RESISTANCE, use the Constant ResistanceLevel (NIDCPOWER_ATTR_CONSTANT_RESISTANCE_LEVEL) attribute.

# Valid Values:

Vary by device. Refer to the device specifications for your device for more informationabout supported values.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# High-Level Functions:

niDCPower_ConfigureOutputResistance

# NIDCPOWER_ATTR_SOURCE_MODE

Specifies whether to run a single output point or a sequence. Refer to the Single Point

Source Mode and Sequence Source Mode topics in the NI DC Power Supplies and SMUs Help for more information about source modes.

# Syntax

NIDCPOWER_ATTR_SOURCE_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150054 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_SINGLE_POINT | 1020(0x3fc) | Applies a single source configuration. |
| NIDCPOWER_VALSequence | 1021(0x3fd) | Applies a list of voltage or current configurations sequentially. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Related Topics:

High-Level Functions:

• niDCPower_ConfigureSourceModeWithChannels

NIDCPOWER_ATTR_TRANSIENT_RESPONSE

Specifies the transient response.

# Syntax

NIDCPOWER_ATTR_TRANSIENT_RESPONSE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150062 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NORMAL | 1038(0x40e) | Normal transient response time. |
| NIDCPOWER_VAL_FAST | 1039(0x40f) | Fast transient response time. |
| NIDCPOWER_VAL_SLOW | 1041(0x411) | Slow transient response time. |
| NIDCPOWER_VAL.CustomOM | 1042(0x412) | Custom transient response time. If you select this value, you can then specify values for theNIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH,NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ,NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO,NIDCPOWER_ATTR_CURRENT_GAIN_BANDWIDTH,NIDCPOWER_ATTR_CURRENT_COMPENSATION_FREQ,and NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIOattributes. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Support Supported Attributes by De es by Device

Refer to the following topics for information about attribute support and defaultvalues.

• Attributes Supported by the PXIe-4051

• Attributes Supported by the PXI-4110

• Attributes Supported by the PXIe-4112/4113

• Attributes Supported by the PXI-4130

• Attributes Supported by the PXI-4132

• Attributes Supported by the PXIe-4135

Attributes Supported by the PXIe-4136/4137

• Attributes Supported by the PXIe-4138/4139

• Attributes Supported by the PXIe-4140/4141

Attributes Supported by the PXIe-4142/4143

• Attributes Supported by the PXIe-4144/4145

Attributes Supported by the PXIe-4147

• Attributes Supported by the PXIe-4150/4151

Attributes Supported by the PXIe-4154

• Attributes Supported by the PXIe-4162/4163

Attributes Supported by the PXIe-4190

# Supported Attributes by Device

# Triggers

# Pulse Trigger

# NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGG

Specifies whether to configure the Pulse trigger to assert on the rising or falling edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150096 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value: NIDCPOWER_VAL_RISING

High-Level Functions:

• niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels

# NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGG

Specifies the input terminal for the Pulse trigger. This attribute is used only when theNIDCPOWER_ATTR_PULSE_TRIGGER_TYPE attribute is set to digital edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150097 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels

NIDCPOWER_ATTR_EXPORTED_PULSE_TRIGGER_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Pulse trigger.

# Syntax

NIDCPOWER_ATTR_EXPORTED_PULSE_TRIGGER_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150098 | ViString | Read/Write | Channels |

# Remarks

Refer to the Device Routes tab in Measurement & Automation Explorer for a list of theterminals available on your device.

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE

Specifies the behavior of the Pulse trigger.

# Syntax

NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150095 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015(0x3f7) | The data operation starts when a software trigger occurs. |

# Default Value: NIDCPOWER_VAL_NONE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgePulseTriggerWithChannels

• niDCPower_ConfigureSoftwareEdgePulseTriggerWithChannels

• niDCPower_DisablePulseTriggerWithChannels

# Sequenc Sequence Advance Trigger

# NIDCPOWER_ATTR_DIGITAL_EDGE_SEQUENCE_A

Specifies whether to configure the Sequence Advance trigger to assert on the rising orfalling edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SEQUENCE_ADVANCE_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150027 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016 (0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017 (0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value:NIDCPOWER_VAL_RISING

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels

# NIDCPOWER_ATTR_DIGITAL_EDGE_SEQUENCE_A

Specifies the input terminal for the Sequence Advance trigger. Use this attribute onlywhen the NIDCPOWER_ATTR_SEQUENCE_ADVANCE_TRIGGER_TYPE attribute is set toNIDCPOWER_VAL_DIGITAL_EDGE.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SEQUENCE_ADVANCE_TRIGGER_INPUT_TERMINA

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150028 | ViString | Read/Write | Channels |

# Remarks

You can specify any valid input terminal for this attribute, and the driver will create aroute between it and the Sequence Advance trigger terminal at Commit. Validterminals are listed in Measurement & Automation Explorer under the Device Routestab. For the PXIe-4147, PXIe-4162, and PXIe-4163, refer to the Signal Routing topic forthe instrument to determine which routes are available (this information is notavailable on a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

High-L • evel Functions:

niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels

NIDCPOWER_ATTR_EXPORTTR_EXPORTED_SEQUENCE_ADTED_SEQUENCE_ADVANCE_TRIGGER_OUTPUT_TERMINALANCE_TRIGGER_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Sequence Advance trigger.

# Syntax

NIDCPOWER_ATTR_EXPORTED_SEQUENCE_ADVANCE_TRIGGER_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150029 | ViString | Read/Write | Channels |

# Remarks

Refer to the Device Routes tab in Measurement & Automation Explorer for a list of theterminals available on your device. For the PXIe-4147, PXIe-4162, and PXIe-4163, referto the Signal Routing topic for the instrument to determine which routes are available(this information is not available on a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

NIDCPOWER_ATTR_SEQUENCE_ADTTR_SEQUENCE_ADVANCE_TRIGGER_TANCE_TRIGGER_TYPE

Specifies the behavior of the Sequence Advance trigger.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ADVANCE_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150026 | VInt32 | Read/Write | Channels |

# Remarks

Refer to the

Configure Triggers and Events topic in your instrument user manual for moreinformation about triggers and events.

Note

This attribute is not supported by all devices. Refer to Supported Attributesby Device for information about supported devices.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015(0x3f7) | The data operation starts when a software trigger occurs. |

# Default Value:NIDCPOWER_VAL_NONE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels

• niDCPower_ConfigureSoftwareEdgeSequenceAdvanceTriggerWithChannels

niDCPower_DisableSequenceAdvanceTriggerWithChannels

# Shutdown Trigger

# NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN

Specifies whether to configure the Pulse trigger to assert on the rising or falling edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150276 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value: NIDCPOWER_VAL_RISING

High-Level Functions:

• niDCPower_ConfigureDigitalEdgeShutdownTriggerWithChannels

# NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN

Specifies the input terminal for the Pulse trigger. This attribute is used only when theNIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE attribute is set to digital edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150277 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeShutdownTriggerWithChannels

NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE

Specifies the behavior of the Shutdown trigger.

# Syntax

NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150275 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015 (0x3f7) | The data operation starts when a software trigger occurs. |

# Default Value: NIDCPOWER_VAL_NONE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeShutdownTriggerWithChannels

niDCPower_ConfigureSoftwareEdgeShutdownTriggerWithChannels

niDCPower_DisableShutdownTriggerWithChannels

# Source Trigger

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150031 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016 (0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017 (0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value:NIDCPOWER_VAL_RISING

High-Level Functions:

• niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels

# NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRI

Specifies the input terminal for the Source trigger. Use this attribute only when theNIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE attribute is set toNIDCPOWER_VAL_DIGITAL_EDGE.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150032 | ViString | Read/Write | Channels |

# Remarks

You can specify any valid input terminal for this attribute, and the driver will create aroute between it and the Source trigger terminal at Commit. Valid terminals are listedin Measurement & Automation Explorer under the Device Routes tab. For thePXIe-4147, PXIe-4162, and PXIe-4163, refer to the Signal Routing topic for theinstrument to determine which routes are available (this information is not availableon a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

initialize the session using theniDCPower_InitializeWithIndependentChannels function.

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels

NIDCPOWER_ATTR_EXPORTED_SOURCE_TRIGGER_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Source trigger.

# Syntax

NIDCPOWER_ATTR_EXPORTED_SOURCE_TRIGGER_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150033 | ViString | Read/Write | Channels |

# Remarks

Refer to the Device Routes tab in MAX for a list of the terminals available on yourdevice. For the PXIe-4147, PXIe-4162, and PXIe-4163, refer to the Signal Routing topicfor the instrument to determine which routes are available (this information is notavailable on a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

Note

This attribute is not supported by all devices. Refer to Supported Attributesby Device for information about supported devices.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE

Specifies the behavior of the Source trigger.

# Syntax

NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150030 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015(0x3f7) | The data operation starts when a software trigger occurs. |

# Default Value:NIDCPOWER_VAL_NONE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeSourceTriggerWithChannels

• niDCPower_ConfigureSoftwareEdgeSourceTriggerWithChannels

• niDCPower_DisableSourceTriggerWithChannels

# Start Trigger

# NIDCPOWER_ATTR_DIGITTTR_DIGITAL_EDGE_SAL_EDGE_START_TRIGGT_TRIGG

Specifies whether to configure the Start trigger to assert on the rising or falling edge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150022 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value:NIDCPOWER_VAL_RISING

High-Level Functions:

• niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels

NIDCPOWER_ATTR_DIGIT TTR_DIGITAL_EDGE_S AL_EDGE_START_TRIGGT_TRIGG

Specifies the input terminal for the Start trigger. Use this attribute only when the

NIDCPOWER_ATTR_START_TRIGGER_TYPE attribute is set to

NIDCPOWER_VAL_DIGITAL_EDGE.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150023 | ViString | Read/Write | Channels |

# Remarks

You can specify any valid terminal for this attribute, and the driver will create a routebetween it and the Start trigger terminal at Commit. Valid terminals are listed inMeasurement & Automation Explorer under the Device Routes tab. For the PXIe-4147,PXIe-4162, and PXIe-4163, refer to the Signal Routing topic for the instrument todetermine which routes are available (this information is not available on a DeviceRoutes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels

NIDCPOWER_ATTR_EXPOR TTR_EXPORTED_START_TRIGGER_OUTPUT_TERMINALT_TRIGGER_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Start trigger.

# Syntax

NIDCPOWER_ATTR_EXPORTED_START_TRIGGER_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150024 | ViString | Read/Write | Channels |

# Remarks

Refer to the Device Routes tab in Measurement & Automation Explorer (MAX) for a listof the terminals available on your device. For the PXIe-4147, PXIe-4162, and PXIe-4163,

refer to the Signal Routing topic for the instrument to determine which routes areavailable (this information is not available on a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

niDCPower_ExportSignalWithChannels

NIDCPOWER_ATTR_START_TRIGGER_T T_TRIGGER_TYPE

Specifies the behavior of the Start trigger.

# Syntax

NIDCPOWER_ATTR_START_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150021 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015(0x3f7) | The data operation starts when a software trigger occurs. |

Default Value:NIDCPOWER_VAL_NONE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeStartTriggerWithChannels

• niDCPower_ConfigureSoftwareEdgeStartTriggerWithChannels

• niDCPower_DisableStartTriggerWithChannels

# Source

# Syntax

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

# Support Supported Functions by De tions by Device

Refer to the following topics for information about function support.

• Functions Supported by the PXIe-4051

Functions Supported by the PXI-4110

Functions Supported by the PXIe-4112/4113

Functions Supported by the PXI-4130

Functions Supported by the PXI-4132

Functions Supported by the PXIe-4135

• Functions Supported by the PXIe-4136/4137

Functions Supported by the PXIe-4138/4139

• Functions Supported by the PXIe-4140/4141/4142/4143/4144/4145

Functions Supported by the PXIe-4147

• Functions Supported by the PXIe-4150/4151

Functions Supported by the PXIe-4154

Functions Supported by the PXIe-4162/4163

Functions Supported by the PXIe-4190

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

# Supported Configurations

You can export and import the following configurations between NI-DCPower sessions:

• Attribute configurations

Advanced sequences

# Support for this Function

You must set the source mode to NIDCPOWER_VAL_SEQUENCE in order to configureor export and import advanced sequences.

Configuration exports from sessions created with theniDCPower_InitializeWithIndependentChannels function cannot be imported intosessions created with deprecated initialize functions.

# Note

Exporting and importing simple sequences in Sequence source mode isunsupported.

# Channel Mapping Behavior

When importing and exporting session attribute configurations between NI-DCPowersessions that were initialized with different channels, the configurations of theexporting channels are mapped to the importing channels based on the order of theresources you specify in the resourceName input to theniDCPower_InitializeWithIndependentChannels function.

Refer to Import/Export Attribute Configuration Mapping Behavior for details.

# Related Topics:

Using Properties and Attributes

Setting Properties and Attributes Before Reading Them

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| size | [in] | ViInt32 | Specifies the size, in bytes, of the byte array to export. If you enter 0, this function returns the needed size. |
| configuration | [out] | ViAddr | Specifies the byte array buffer to be populated with the exported attribute configuration. |

# Syntax

```txt
ViStatus_VI FUNC  
niDCPower_ExportAttributeConfigurationFile(ViSession vi, ViConstString filePath)
```

# Remarks

You can export and import supported configurations only between NI-DCPowerdevices with identical model numbers and the same number of configured channels.

This function verifies that the attributes you have configured for the session are valid.If the configuration is invalid, NI-DCPower returns an error.

# Supported Configurations

You can export and import the following configurations between NI-DCPower sessions:

• Attribute configurations

• Advanced sequences

# Support for this Function

You must set the source mode to NIDCPOWER_VAL_SEQUENCE in order to configureor export and import advanced sequences.

Configuration exports from sessions created with theniDCPower_InitializeWithIndependentChannels function cannot be imported intosessions created with deprecated initialize functions.

# Note

Exporting and importing simple sequences in Sequence source mode isunsupported.

Channel Mapping Behavior

When importing and exporting session attribute configurations between NI-DCPowersessions that were initialized with different channels, the configurations of theexporting channels are mapped to the importing channels based on the order of theresources you specify in the resourceName input to theniDCPower_InitializeWithIndependentChannels function.

Refer to Import/Export Attribute Configuration Mapping Behavior for details.

# Related Topics:

Using Properties and Attributes

Setting Properties and Attributes Before Reading Them

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| filePath | [in] | ViConstString | The absolute path to a placeholder file you must create to contain the configuration you want to export. If you specify an empty or relative path, this function returns an error. Default file extension: .nidcpowerconfig |

# Syntax

ViStatus _VI_FUNCniDCPower_ImportAttributeConfigurationBuffer(ViSession vi,ViInt32 size, ViAddr configuration)

# Remarks

You can export and import supported configurations only between NI-DCPowerdevices with identical model numbers and the same number of configured channels.

# Note

You cannot call this function while any channel is in the Running state.

# Supported Configurations

You c • an export and import the following configurations between NI-DCPower sessions:

Attribute configurations

• Advanced sequences

# Support for this Function

You must set the source mode to NIDCPOWER_VAL_SEQUENCE in order to configureor export and import advanced sequences.

Configuration exports from sessions created with theniDCPower_InitializeWithIndependentChannels function cannot be imported intosessions created with deprecated initialize functions.

# Note

Exporting and importing simple sequences in Sequence source mode isunsupported.

# Channel Mapping Behavior

When importing and exporting session attribute configurations between NI-DCPowersessions that were initialized with different channels, the configurations of theexporting channels are mapped to the importing channels based on the order of theresources you specify in the resourceName input to theniDCPower_InitializeWithIndependentChannels function.

Refer to Import/Export Attribute Configuration Mapping Behavior for details.

# Related Topics:

Programming States

Using Properties and Attributes

Setting Properties and Attributes Before Reading Them

Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| size | [in] | Vilnt32 | Specifies the size, in bytes, of the byte array to import. If you enter 0, this function returns the needed size. |
| configuration | [in] | ViAddr | Specifies the byte array buffer that contains the attribute configuration to import. |

# Syntax

ViStatus _VI_FUNCniDCPower_ImportAttributeConfigurationFile(ViSession vi,ViConstString filePath)

# Remarks

You can export and import supported configurations only between NI-DCPowerdevices with identical model numbers and the same number of configured channels.

# Note

You cannot call this function while any channel is in the Running state.

# Supported Configurations

You can export and import the following configurations between NI-DCPower sessions:

• Attribute configurations

• Advanced sequences

# Support for this Function

You must set the session source mode to NIDCPOWER_VAL_SEQUENCE in order toconfigure or export and import advanced sequences.

Configuration exports from sessions created with theniDCPower_InitializeWithIndependentChannels function cannot be imported intosessions created with deprecated initialize functions.

# Note

Exporting and importing simple sequences in Sequence source mode isunsupported.

# Channel Mapping Behavior

When importing and exporting session attribute configurations between NI-DCPowersessions that were initialized with different channels, the configurations of theexporting channels are mapped to the importing channels based on the order of theresources you specify in the resourceName input to theniDCPower_InitializeWithIndependentChannels function.

Refer to Import/Export Attribute Configuration Mapping Behavior for details.

# Related Topics:

Programming States

Using Properties and Attributes

Setting Properties and Attributes Before Reading Them

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| filePath | [in] | ViConstString | The absolute path to the file that contains the configuration to import. If you specify an empty or relative path, this function returns an error.Default File Extension:.nidcpowerconfig |

