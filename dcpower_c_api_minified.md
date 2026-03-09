# nidcpower.h

# Attributes

# Advanced

# Syntax

NIDCPOWER_ATTR_AUXILIARY_POWER_SOURCE_AVAILABLE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150002 | ViBoolean | Read-Only | N/A |

# Remarks

channels.

A value of VI_FALSE may indicate that the auxiliary input fuse has blown. Refer to theDetecting Internal/Auxiliary Power topic in the NI DC Power Supplies and SMUs Help for more information about internal and auxiliary power.

# Note

This attribute does not necessarily indicate if the device is using the auxiliarypower source to generate power. Use theNIDCPOWER_ATTR_POWER_SOURCE_IN_USE attribute to retrieve thisinformation.

NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN

Indicates whether the safety interlock input is open.

# Syntax

NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150105 | ViBoolean | Read-Only | Instruments |

# Remarks

Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Safety interlock input is closed. |
| VI_true (1) | Safety interlock input is open. |

# NIDCPOWER_ATTR_ISOL TTR_ISOLATION_STATE

Specifies whether the channel is isolated.

# Syntax

NIDCPOWER_ATTR_ISOLATION_STATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150302 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_ISOLATED | 1128(0x468) | The channel is disconnected from chassis ground. |
| NIDCPOWER_VAL_NON_ISOLATED | 1129(0x469) | The channel is connected to chassis ground. |

Default Value: Refer to Supported Attributes by Device for the default value by device.

# NIDCPOWER_ATTR_POWER_SOURCE

For sessions initialized with deprecated initialize functions, this attribute specifies thepower source to use. NI-DCPower switches the power source used by the device to thespecified value.

# Syntax

NIDCPOWER_ATTR_POWER_SOURCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150000 | VInt32 | Read/Write | N/A |

# Remarks

This attribute is not supported in sessions initialized with theniDCPower_InitializeWithIndependentChannels function.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_INTERNAL | 1003(0x3eb) | Uses the PXI chassis power source. |
| NIDCPOWER_VALAuxILIARY | 1004(0x3ec) | Uses the auxiliary power source connected to the device.Only the NI 4110 and NI 4130 support this value. |
| NIDCPOWER_VAL_AUTOMATIC | 1005(0x3ed) | Uses the auxiliary power source if it is available; otherwise uses the PXI chassis power source. |

# Default Value:NIDCPOWER_VAL_AUTOMATIC

# Note

Automatic selection is not persistent and occurs only at the time this

attribute is set to NIDCPOWER_VAL_AUTOMATIC. However, if the session is inthe Committed or Uncommitted state when you set this attribute, the powersource selection only occurs after you call theniDCPower_InitiateWithChannels function for all channels in the session.

# NIDCPOWER_ATTR_POWER_SOURCE_IN_USE

Indicates whether the device is using the internal or auxiliary power source to generatepower.

# Syntax

NIDCPOWER_ATTR_POWER_SOURCE_IN_USE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150001 | VInt32 | Read-Only | N/A |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_INTERNAL | 1003(0x3eb) | Uses the PXI chassis power source. |
| NIDCPOWER_VAL_AUXILIARY | 1004(0x3ec) | Uses the auxiliary power source connected to the device.Only the NI PXI-4110, NI PXIe-4112, NI PXIe-4113, and NI PXI-4130 support this value. This is the only supported value for the NI PXIe-4112 and NI PXIe-4113. |

# NIDCPOWER_ATTR_SELF_CALIBRATTR_SELF_CALIBRATION_PERTION_PERSISTENCE

Specifies whether the values calculated during self-calibration should be written tohardware to be used until the next self-calibration or only used until theniDCPower_ResetDevice function is called or the machine is powered down.

# Syntax

NIDCPOWER_ATTR_SELF_CALIBRATION_PERSISTENCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150073 | VInt32 | Read/Write | Instruments |

# Remarks

This attribute affects the behavior of the niDCPower_CalSelfCalibrate function. Whenset to NIDCPOWER_VAL_KEEP_IN_MEMORY, the values calculated by theniDCPower_CalSelfCalibrate function are used in the existing session, as well as in allfurther sessions until you call the niDCPower_ResetDevice function or restart the

machine. When you set this property to NIDCPOWER_VAL_WRITE_TO_EEPROM, thevalues calculated by the niDCPower_CalSelfCalibrate function are written to hardwareand used in the existing session and in all subsequent sessions until another call to theniDCPower_CalSelfCalibrate function is made.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_KEEP_INMEMORY | 1045(0x415) | Keep new self-calibration values in memory only. |
| NIDCPOWER_VAL_WRITE_TO_EEEPROM | 1046(0x416) | Write new self-calibration values to hardware.Refer to your device documentation for more information about the implications of frequent writes to the EEPROM. |

Default Value: NIDCPOWER_VAL_KEEP_IN_MEMORY

# Device Specific

# NIDCPOWER_ATTR_CABLE_LENGTH

Specifies how to apply cable compensation data for instruments that support LCRfunctionality.

# Syntax

NIDCPOWER_ATTR_CABLE_LENGTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150278 | VInt32 | Read/Write | Channels |

# Remarks

Supported instruments use cable compensation for the following operations:

• SMU mode: to stabilize DC current sourcing in the two smallest current ranges

• LCR mode: to compensate for the effects of cabling on LCR measurements

For NI standard options, select the length of your NI cable to apply compensation datafor a typical cable of that type.

For custom options, choose the source of the custom cable compensation data. Youmust then generate the custom cable compensation data.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_ZERO_M | 1121(0x461) | Uses predefined cable compensation data for a 0m cable (direct connection). |
| NIDCPOWER_VAL_NI_STANDARD_0_5M | 1153(0x481) | Uses predefined cable compensation data for an NI standard 0.5m coaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_1M | 1122(0x462) | Uses predefined cable compensation data for an NI standard 1m coaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_2M | 1123(0x463) | Uses predefined cable compensation data for an NI standard 2m coaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_4M | 1124(0x464) | Uses predefined cable compensation data for an NI standard 4m coaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_TRIAXIAL_1M | 1139(0x473) | Uses predefined cable compensation data for an NI standard 1m triaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_TRIAXIAL_2M | 1140(0x474) | Uses predefined cable compensation data for an NI standard 2m triaxial cable. |
| NIDCPOWER_VAL_NI_STANDARD_TRIAXIAL_4M | 1141(0x475) | Uses predefined cable compensation data for an NI standard 4m triaxial cable. |
| NIDCPOWER_VAL/custom_ONBOARD_STORAGE | 1125(0x465) | Uses previously generated custom cable compensation data from onboard storage. Only the most recently performed compensation data for each custom cable compensation type (open, short) is stored. |
| NIDCPOWER_VAL/custom_AS_CONFIGURED | 1126(0x466) | Uses the custom cable compensation data supplied to niDCPower_ConfigureLCRCompensation.Use this option to manage multiple sets of custom cable compensation data. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# Events

# Measure Comple e Complete Event

# NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT

Specifies the behavior of the Measure Complete event.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150044 | VInt32 | Read/Write | Channels |

# Remarks

Note

This attribute is not supported by all devices. Refer to Supported Attributesby Device for information about supported devices.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT

Specifies the width of the Measure Complete event, in seconds.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150045 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI devices is 150 ns, and the minimumevent pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for all devices is 1.6 microseconds.

Valid Values: 1.5e-7 to 1.6e-6

Default Value: The default value for PXI Express devices is 250 ns.

Toggle

# NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT

Specifies the initial state of the measure complete event if you set theNIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR toNIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150334 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW | 1149(0x47d) | The output is set to low at session commit. For operation in Single Point source mode, the output switches to high when the event occurs during the acquisition. The output then switches to low if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to high the first time an event occurs during the acquisition. It then switches to low the second time an event occurs. This pattern repeats for any subsequent event occurrences. |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_HIGH | 1150(0x47e) | The output is set to high at session commit. For operation in Single Point source mode, the output switches to low when the event occurs during the acquisition. The output then switches to high if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to low the first time an event occurs during the acquisition. It then switches to high the second time an event occurs. This pattern repeats for any subsequent event occurrences. |

Default Value:NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW

NIDCPOWER_ATTR_MEASURE_CTTR_MEASURE_COMPLETE_EVENT_DELOMPLETE_EVENT_DELAY

Specifies the amount of time to delay the generation of the Measure Complete event,in seconds.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150046 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values: The PXIe-4051 supports values from 0 seconds to 39 seconds. ThePXIe-4147 supports values from 0 seconds to 26.5 seconds. The PXIe-4150/4151supports values from 0 seconds to 42 seconds. The PXIe-4162/4163 support valuesfrom 0 seconds to 23 seconds. All other supported instruments support values from 0to 167 seconds.

Default Value: Varies by device. Refer to the Supported Attributes by Device topic inthe NI DC Power Supplies and SMUs Help for more information about defaultvalues.

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR

Determines how the event type behaves when the corresponding trigger is received.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150333 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_OUTPUT_PULSE | 1147 (0x47b) | A single 250ns pulse is transmitted. |
| NIDCPOWER_VAL_EVENT_OUTPUT_TOGGLE | 1148(0x47c) | The output level toggles between low and high. The initial output level is determined by the "toggle initial state" attribute for the event. |

Default Value:NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_PULSE

The "toggle initial state" attribute used to set the initial output level for

NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE is

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE.

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Measure Complete event.

# Syntax

NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150047 | ViString | Read/Write | Channels |

# Remarks

Note

This attribute is not supported by all devices. Refer to Supported Attributesby Device for information about supported devices.

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# Pulse Complete Event

# NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_P

Specifies the behavior of the Pulse Complete event.

# Syntax

NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150100 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_P

Specifies the width of the Pulse Complete event, in seconds.

# Syntax

NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150101 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for PXI Express devices is 1.6 microseconds.

NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Pulse Complete event.

# Syntax

NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150099 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignal

Ready for Pulse T or Trigger Event

# NIDCPOWER_ATTR_READ TTR_READY_FOR_PULSE_TRIGGERSE_TRIGGER

Specifies the behavior of the Ready For Pulse Trigger event.

# Syntax

NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150103 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

# NIDCPOWER_ATTR_READ TTR_READY_FOR_PULSE_TRIGGERSE_TRIGGER

Specifies the width of the Ready For Pulse Trigger event, in seconds.

# Syntax

NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150104 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for all devices is 1.6 microseconds.

Default Value: The default value for PXI Express devices is 250 ns.

NIDCPOWER_ATTR_READTTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMINALSE_TRIGGER_EVENT_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Ready For Pulse Trigger event.

# Syntax

NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150102 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

# Sequence Engine Done Event

# NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_E

Specifies the behavior of the Sequence Engine Done event.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150048 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

# NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_E

Specifies the width of the Sequence Engine Done event, in seconds.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150049 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI devices is 150 ns, and the minimumevent pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for all devices is 1.6 microseconds.

Valid Values: 1.5e-7 to 1.5e-6 seconds

Default Value: The default value for PXI Express devices is 250 ns.

Toggle

# NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_E

Specifies the initial state of the sequence engine done event if you set theNIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_OUTPUT_BEHAVIOR toNIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150346 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW | 1149(0x47d) | The output is set to low at session commit. For operation in Single Point source mode, the output switches to high when the event occurs during the acquisition. The output then switches to low if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to high the first time an event occurs during the acquisition. It then switches to low the second time an event occurs. This pattern repeats for any subsequent event occurrences. |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_HIGH | 1150(0x47e) | The output is set to high at session commit. For operation in Single Point source mode, the output switches to low when the event occurs during the acquisition. The output then switches to high if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to low the first time an event occurs during the acquisition. It then switches to high the second time an event occurs. This pattern repeats for any subsequent event occurrences. |

# Default Value:NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_OUTPUT_BEHAVIOR

Determines how the event type behaves when the corresponding trigger is received.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_OUTPUT_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150345 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_OUTPUT_PULSE | 1147(0x47b) | A single 250ns pulse is transmitted. |
| NIDCPOWER_VAL_EVENT_OUTPUT_TOGGLE | 1148(0x47c) | The output level toggles between low and high. The initial output level is determined by the "toggle initial state" attribute for the event. |

# Default Value:NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_PULSE

The "toggle initial state" attribute used to set the initial output level for

NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE is

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE.

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Sequence Engine Done Completeevent.

# Syntax

NIDCPOWER_ATTR_SEQUENCE_ENGINE_DONE_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150050 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

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

# Source Comple e Complete Event

# NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT

Specifies the behavior of the Source Complete event.

# Syntax

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_POLARITY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150041 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALACTIVE_HIGH | 1018(0x3fa) | A high pulse occurs when the event is generated. The exported signal is low level both before and after the event is generated. |
| NIDCPOWER_VALACTIVE_LOW | 1019(0x3fb) | A low pulse occurs when the event is generated. The exported signal is high level both before and after the event is generated. |

Default Value:NIDCPOWER_VAL_ACTIVE_HIGH

# NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_

Specifies the width of the Source Complete event, in seconds.

# Syntax

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150042 | ViReal64 | Read/Write | Channels |

# Remarks

The minimum event pulse width value for PXI devices is 150 ns, and the minimumevent pulse width value for PXI Express devices is 250 ns.

The maximum event pulse width value for all devices is 1.6 microseconds.

Valid Values: 1.5e-7 to 1.6e-6 seconds

Default Value: The default value for PXI Express devices is 250 ns.

Toggle

# NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_

Specifies the initial state of the source complete event if you set theNIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR toNIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE.

# Syntax

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150332 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW | 1149(0x47d) | The output is set to low at session commit. For operation in Single Point source mode, the output switches to high when the event occurs during the acquisition. The output then switches to low if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to high the first time an event occurs during the acquisition. It then switches to low the second time an event occurs. This pattern repeats for any subsequent event occurrences. |
| NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_HIGH | 1150(0x47e) | The output is set to high at session commit. For operation in Single Point source mode, the output switches to low when the event occurs during the acquisition. The output then switches to high if a subsequent event occurs during the acquisition. This pattern repeats as events continue to be generated. For operation in Sequence source mode, the output switches to low the first time an event occurs during the acquisition. It then switches to high the second time an event occurs. This pattern repeats for any subsequent event occurrences. |

Default Value:NIDCPOWER_VAL_EVENT_TOGGLE_INITIAL_STATE_LOW

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR

Determines how the event type behaves when the corresponding trigger is received.

# Syntax

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150331 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_EVENT_OUTPUT_PULSE | 1147(0x47b) | A single 250ns pulse is transmitted. |
| NIDCPOWER_VAL_EVENT_OUTPUT_TOGGLE | 1148(0x47c) | The output level toggles between low and high. The initial output level is determined by the "toggle initial state" attribute for the event. |

Default Value:NIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_PULSE

The "toggle initial state" attribute used to set the initial output level forNIDCPOWER_VAL_EVENT_OUTPUT_BEHAVIOR_TOGGLE isNIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE.

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Source Complete event.

# Syntax

NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150043 | ViString | Read/Write | Channels |

# Remarks

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

# High-Level Functions:

niDCPower_ExportSignalWithChannels

# Inherent IVI Attributes

# Syntax

NIDCPOWER_ATTR_DRIVER_SETUP

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050007 | ViString | Read-Only | N/A |

# Remarks

Some cases exist where you must specify the instrument driver options at initializationtime. An example of this case is specifying a particular device model from among afamily of devices that the driver supports. This attribute is useful when simulating adevice. You can specify the driver-specific options through the DriverSetup keyword inthe optionsString parameter in the niDCPower_InitializeWithIndependentChannelsfunction or through the IVI Configuration Utility.

If you do not specify a Driver Setup string, this attribute returns an empty string.

# High-Level Functions:

niDCPower_InitializeWithIndependentChannels

NIDCPOWER_ATTR_IO_RESOURCE_DESCRIPTOR

Indicates the resource descriptor NI-DCPower uses to identify the resource(s) used bythe NI-DCPower session.

# Syntax

NIDCPOWER_ATTR_IO_RESOURCE_DESCRIPTOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050304 | ViString | Read-Only | N/A |

# Remarks

The resource name specified with the niDCPower_InitializeWithIndependentChannelsfunction can include instrument(s) and/or channel(s) but does not support logicalnames.

If you initialize NI-DCPower with a logical name using a deprecated initialize VI, thisattribute contains the resource descriptor that corresponds to the entry in the IVIConfiguration utility.

If you initialize NI-DCPower with the resource descriptor, this attribute contains thatvalue.

NIDCPOWER_ATTR_LOGICAL_NAME

Contains the logical name(s) you specified when opening the current IVI session.

# Syntax

NIDCPOWER_ATTR_LOGICAL_NAME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050305 | ViString | Read-Only | N/A |

# Note

IVI logical names are not supported in sessions created using theniDCPower_InitializeWithIndependentChannels function.

You can pass a logical name to a deprecated initialize function. The IVI Configurationutility must contain an entry for the logical name. The logical name entry refers to afunction section in the IVI Configuration file. The function section specifies a physicalinstrument and initial user options.

Driver Capabilities

# Syntax

NIDCPOWER_ATTR_CHANNEL_COUNT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050203 | VInt32 | Read-Only | N/A |

NIDCPOWER_ATTR_GROUP_CAPABILITIES

Contains a comma-separated list of class-extension groups that NI-DCPowerimplements.

# Syntax

NIDCPOWER_ATTR_GROUP_CAPABILITIES

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050401 | ViString | Read-Only | N/A |

NIDCPOWER_ATTR_SUPPORTTR_SUPPORTED_INSTED_INSTRUMENT_MODELTRUMENT_MODELS

Contains a comma-separated (,) list of supported NI-DCPower instrument models.

# Syntax

NIDCPOWER_ATTR_SUPPORTED_INSTRUMENT_MODELS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050327 | ViString | Read-Only | N/A |

Driver Identification

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_CLASS_SPEC_MAJOR_VERSION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050515 | VInt32 | Read-Only | N/A |

NIDCPOWER_ATTR_SPECIFIC_DRIVER_CL TTR_SPECIFIC_DRIVER_CLASS_SPEC_MINOR_VER S_SPEC_MINOR_VERSION

Contains the minor version number of the class specification with which NI-DCPoweris compliant.

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_CLASS_SPEC_MINOR_VERSION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050516 | VInt32 | Read-Only | N/A |

NIDCPOWER_ATTR_SPECIFIC_DRIVER_DESCRIPTION

Contains a brief description of the specific driver.

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_DESCRIPTION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050514 | ViString | Read-Only | N/A |

NIDCPOWER_ATTR_SPECIFIC_DRIVER_PREFIX

Contains the prefix for NI-DCPower. The name of each user-callable function in NI-DCPower begins with this prefix.

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_PREFIX

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050302 | ViString | Read-Only | N/A |

NIDCPOWER_ATTR_SPECIFIC_DRIVER_REVISION

Contains additional version information about NI-DCPower.

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_REVISION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050551 | ViString | Read-Only | N/A |

NIDCPOWER_ATTR_SPECIFIC_DRIVER_VENDOR

Contains the name of the vendor that supplies NI-DCPower.

# Syntax

NIDCPOWER_ATTR_SPECIFIC_DRIVER_VENDOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050513 | ViString | Read-Only | N/A |

Instrument Identification

# Syntax

NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050510 | ViString | Read-Only | Instruments |

# High-Level Functions:

• niDCPower_revision_query

NIDCPOWER_ATTR_INSTTR_INSTRUMENT_MANUFTRUMENT_MANUFACTURER

Contains the name of the manufacturer for the instrument you are currently using.

# Syntax

NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050511 | ViString | Read-Only | Instruments |

# Remarks

NIDCPOWER_ATTR_INSTRUMENT_MODEL

Contains the model number or name of the instrument that you are currently using.

# Syntax

NIDCPOWER_ATTR_INSTRUMENT_MODEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050512 | ViString | Read-Only | Instruments |

# Remarks

NIDCPOWER_ATTR_SERIAL_NUMBER

Contains the serial number for the instrument you are currently using.

# Syntax

NIDCPOWER_ATTR_SERIAL_NUMBER

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150152 | ViString | Read-Only | Instruments |

# High-Level Functions:

• niDCPower_revision_query

# User Options

# Syntax

NIDCPOWER_ATTR_CACHE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050004 | ViBoolean | Read/Write | N/A |

# Remarks

When caching is enabled, NI-DCPower records the current instrument settings andavoids sending redundant commands to the instrument. Enabling caching cansignificantly increase execution speed.

NI-DCPower might always cache or never cache particular attributes regardless of thesetting of this attribute.

Use the niDCPower_InitializeWithIndependentChannels function to override thisvalue.

**Default Value:**VI_TRUE

# High-Level Functions:

niDCPower_InitializeWithChannels

# NIDCPOWER_ATTR_INTERCHANGE_CHECK

Specifies whether to perform interchangeability checking and log interchangeabilitywarnings when you call NI-DCPower functions. VI_TRUE specifies thatinterchangeability checking is enabled.

# Syntax

NIDCPOWER_ATTR_INTERCHANGE_CHECK

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050021 | ViBoolean | Read/Write | N/A |

# Remarks

Interchangeability warnings indicate that using your application with a differentinstrument might cause different behavior. Call theniDCPower_GetNextInterchangeWarning function to retrieve interchange warnings.

Call the niDCPower_GetNextInterchangeWarning function to clear the list ofinterchangeability warnings without reading them.

Interchangeability checking examines the attributes in a capability group only if youspecify a value for at least one attribute within that group. Interchangeability warningscan occur when an attribute affects the behavior of the instrument and you have notset that attribute or when the attribute has been invalidated since you set it.

Default Value: VI_FALSE

High-Level Functions:

niDCPower_InitializeWithIndependentChannels

NIDCPOWER_ATTR_QUER TTR_QUERY_INSTRUMENT_S TRUMENT_STATUS

Specifies whether NI-DCPower queries the instrument status after each operation.

# Syntax

NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050003 | ViBoolean | Read/Write | N/A |

# Remarks

Querying the instrument status is useful for debugging. After you validate your

program, you can set this attribute to VI_FALSE to disable status checking andmaximize performance.

NI-DCPower ignores status checking for particular attributes regardless of the settingof this attribute.

Use the niDCPower_InitializeWithIndependentChannels function to override thisvalue.

Default Value: VI_TRUE

NIDCPOWER_ATTR_RANGE_CHECK

Specifies whether to validate attribute values and function parameters.

# Syntax

NIDCPOWER_ATTR_RANGE_CHECK

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050002 | ViBoolean | Read/Write | N/A |

# Remarks

If this attribute is enabled, NI-DCPower validates the parameter values that you pass toNI-DCPower functions. Range checking parameters is useful for debugging. After youvalidate your program, you can set this attribute to VI_FALSE to disable range checkingand maximize performance.

Use the niDCPower_InitializeWithIndependentChannels function to override thedefault value.

Default Value: VI_TRUE.

# High-Level Functions:

niDCPower_InitializeWithIndependentChannels

NIDCPOWER_ATTR_RECORD_COERCIONS

Specifies whether the IVI engine records the value coercions it makes for ViInt32 andViReal64 attributes. Call the niDCPower_GetNextCoercionRecord function to read anddelete the earliest coercion record from the list.

# Syntax

NIDCPOWER_ATTR_RECORD_COERCIONS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050006 | ViBoolean | Read/Write | N/A |

# Remarks

Default Value: The default value is VI_FALSE. Use theniDCPower_InitializeWithIndependentChannels function to override this value.

NIDCPOWER_ATTR_SIMULATE

Specifies whether to simulate NI-DCPower I/O operations. VI_TRUE specifies thatoperation is simulated.

# Syntax

NIDCPOWER_ATTR_SIMULATE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1050005 | ViBoolean | Read/Write | N/A |

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Do not simulate NI-DCPower I/O operations. |
| VI_true (1) | Simulate NI-DCPower I/O operations. |

# Default Value: VI_FALSE

# High-Level Functions:

niDCPower_InitializeWithIndependentChannels

# LCR

# NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED

Specifies whether dithering is enabled during LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150348 | ViBoolean | Read/Write | Channels |

# Remarks

Dithering adds out-of-band noise to improve measurements of small voltage andcurrent signals.

# Note

Hardware is only warranted to meet its accuracy specs with dither enabled.You can disable dither if the added noise interferes with your device-under-test.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Dithering is not applied to LCR measurements. |
| VI_true (1) | Dithering is applied to LCR measurements. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_CURRENT_RANGE

Specifies the current range, in amps RMS, that defines the values to which you can setthe LCR current amplitude (NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE) for thespecified channel(s).

# Syntax

NIDCPOWER_ATTR_LCR_CURRENT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150267 | ViReal64 | Read/Write | Channels |

# Remarks

For valid ranges, refer to the specifications for your instrument.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TI

Specifies the LCR source aperture time, in seconds, for a channel in LCR mode.

# Syntax

NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150349 | ViReal64 | Read/Write | Channels |

# Remarks

Use this attribute to adjust the aperture time for the LCR control loop. In systems thatuse multiple tones that are equally spaced, setting this attribute to 1/(Tone Spacing inHz) can reduce the impact of external interference and still maintain an integernumber of cycles for all multi-tones. Increasing LCR source aperture time can increasethe required settling time.

# Valid Values:

5.0e-6 s to 100.0e-3 s

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE GE_RANGE

Specifies the voltage range, in volts RMS, that defines the values to which you can setthe LCR voltage amplitude (NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE) for thespecified channel(s).

# Syntax

NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150265 | ViReal64 | Read/Write | Channels |

# Remarks

For valid ranges, refer to the specifications for your instrument.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_C TIC_LEVEL_CONTROL

Specifies whether the channel actively attempts to maintain a constant test voltage orcurrent across the DUT for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150290 | VInt32 | Read/Write | Channels |

# Remarks

The use of voltage or current depends on the test signal you configure with theNIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION attribute.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | Automatic level control is off. |
| NIDCPOWER_VAL_ON | 1 (0x1) | Automatic level control is on. |

# Note

Because the PXIe-4190 output impedance is a function of the impedancerange, selecting this option may result in an actual AC stimulus amplitude atthe load that is different from the value you specify. Impedancemeasurements take this difference into account and remain accurate.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE

Specifies the amplitude, in A RMS, of the AC current test signal applied to the DUT forLCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150212 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when the NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTIONattribute is set to NIDCPOWER_VAL_AC_CURRENT.

# Valid Values:

7.08e-9 A RMS to 0.707 A RMS

Instrument specifications affect the valid values you can program. Refer to thespecifications for your instrument for more information.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_FREQUENCY

Specifies the frequency of the AC test signal applied to the DUT for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150210 | ViReal64 | Read/Write | Channels |

# Remarks

Note

This attribute is not supported by all instruments. Refer to SupportedAttributes by Device for information about supported instruments.

# Valid Values:

40 Hz to 2 MHz

Instrument specifications affect the valid values you can program. Refer to thespecifications for your instrument for more information.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION

Specifies the type of test signal to apply to the DUT for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150209 | VInt32 | Read/Write | Channels |

# Remarks

Note

This attribute is not supported by all instruments. Refer to SupportedAttributes by Device for information about supported instruments.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_AC_VOLTAGE | 1063 (0x427) | Applies an AC voltage for LCR stimulus. |
| NIDCPOWER_VAL_AC_CURRENT | 1064 (0x428) | Applies an AC current for LCR stimulus. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDEGE_AMPLITUDE

Specifies the amplitude, in V RMS, of the AC voltage test signal applied to the DUT forLCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150211 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when the NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTIONattribute is set to NIDCPOWER_VAL_AC_VOLTAGE.

# Valid Values:

7.08e-4 V RMS to 7.07 V RMS

Instrument specifications affect the valid values you can program. Refer to thespecifications for your instrument for more information.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# Compensation

# NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTA

Specifies the actual reactance, in ohms, of the load used for load LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150271 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

# NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESIS AD_RESISTA

Specifies the actual resistance, in ohms, of the load used for load LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150270 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is set

to NIDCPOWER_VAL_AS_DEFINED.

# NIDCPOWER_ATTR_LCR_LOAD_COMPENSA OMPENSATIONTION

Specifies whether to apply load LCR compensation data to LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150222 | ViBoolean | Read/Write | Channels |

# Remarks

Both the NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED andNIDCPOWER_ATTR_LCR_SHORT_COMPENSATION_ENABLED attributes must be set toVI_TRUE in order to set this attribute to VI_TRUE.

Use the

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE

attribute to define where the load compensation data that is applied to LCR

measurements comes from.

Load compensation data are applied only for those specific frequencies youdefine with niDCPower_PerformLCRLoadCompensation; load compensationis not interpolated from the specific frequencies you define and applied toother frequencies.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Load LCR compensation data are applied. |
| VI_true (1) | Load LCR compensation data are not applied. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_MEASURED_L CR_MEASURED_LOAD_REAC

Specifies the reactance, in ohms, of the load used for load LCR compensation asmeasured by the instrument.

# Syntax

NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150269 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

# NIDCPOWER_ATTR_LCR_MEASURED_L CR_MEASURED_LOAD_RESIAD_RESI

Specifies the resistance, in ohms, of the load used for load LCR compensation asmeasured by the instrument.

# Syntax

NIDCPOWER_ATTR_LCR_MEASURED_LOAD_RESISTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150268 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

Open

# NIDCPOWER_ATTR_LCR_OPEN_C CR_OPEN_COMPENSA OMPENSATIONTION

Specifies whether to apply open LCR compensation data to LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150220 | ViBoolean | Read/Write | Channels |

# Remarks

Use the

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCEattribute to define where the open compensation data that is applied to LCRmeasurements comes from.

Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Open LCR compensation data are applied. |
| VI_true (1) | Open LCR compensation data are not applied. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_OPEN_C CR_OPEN_CONDUCTANCE

Specifies the conductance, in siemens, of the circuit used for open LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150261 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

Note

This attribute is not supported by all instruments. Refer to SupportedAttributes by Device for information about supported instruments.

# NIDCPOWER_ATTR_LCR_OPEN_SU CR_OPEN_SUSCEPTANCE

Specifies the susceptance, in siemens, of the circuit used for open LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150262 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

# Short

# NIDCPOWER_ATTR_LCR_SHOR CR_SHORT_COMPENSA OMPENSATIONTION

Specifies whether to apply short LCR compensation data to LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_SHORT_COMPENSATION_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150221 | ViBoolean | Read/Write | Channels |

# Use the

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCEattribute to define where the short compensation data that is applied to LCRmeasurements comes from.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Short LCR compensation data are applied. |
| VI_true (1) | Short LCR compensation data are not applied. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_SHOR CR_SHORT_REACTANCE

Specifies the reactance, in ohms, of the circuit used for short LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_SHORT_REACTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150264 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is set

to NIDCPOWER_VAL_AS_DEFINED.

Attributes by Device for information about supported instruments.

# NIDCPOWER_ATTR_LCR_SHOR CR_SHORT_RESIS T_RESISTANCE

Specifies the resistance, in ohms, of the circuit used for short LCR compensation.

# Syntax

NIDCPOWER_ATTR_LCR_SHORT_RESISTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150263 | ViReal64 | Read/Write | Channels |

# Remarks

This attribute applies when

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE is setto NIDCPOWER_VAL_AS_DEFINED.

NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTRICAL_CABLE_LENGTH_DELAY

Specifies the one-way electrical length delay of the cable, in seconds.

# Syntax

NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150309 | ViReal64 | Read/Write | Channels |

# Valid Values:

0 s to +inf s

# Default Value:

The default value depends on NIDCPOWER_ATTR_CABLE_LENGTH.

NIDCPOWER_ATTR_LCR_OPEN_SHORCR_OPEN_SHORT_LOAD_COMPENSAOMPENSATION_DATA_SOURCEA_SOURCE

Specifies the source of the LCR compensation data NI-DCPower applies to LCRmeasurements.

# Syntax

NIDCPOWER_ATTR_LCR_OPEN_SHORT_LOAD_COMPENSATION_DATA_SOURCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150223 | VInt32 | Read/Write | Channels |

# Remarks

Attributes by Device for information about supported instruments.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_ONBOARD_STORAGE | 1074(0x432) | Uses previously generated LCR compensation data. Only the most recently performed compensation data for each LCR compensation type (open, short, and load) is stored. |
| NIDCPOWER_VAL_AS_defined | 1075(0x433) | Uses the LCR compensation data represented by the relevant LCR compensation attributes as generated by niDCPower_PerformLCROpenCompensation, niDCPower_PerformLCRShortCompensation, and niDCPower_PerformLCRLoadCompensation. Use this option to manage multiple sets of LCR compensation data. This option applies compensation data from the following attributes:NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE,NIDCPOWER_ATTR_LCR_OPEN SUSCEPTANCE,NIDCPOWER_ATTR_LCR SHORT_RESISTANCE,NIDCPOWER_ATTR_LCR SHORT_REACTANCE,NIDCPOWER_ATTR_LCR_MEASURED_LOAD_RESISTANCE,NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE,NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE,orNIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE |
| NIDCPOWER_VAL_AS_CONFIGURED | 1146(0x47a) | Uses the LCR compensation data supplied to niDCPower_ConfigureLCRCompensation. Use this option to manage multiple sets of LCR compensation data. |

Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_SHORCR_SHORT_CUSTOM_CABLE_COM_CABLE_COMPENSAOMPENSATION_ENABLEDTION_ENABLED

Defines how to apply short custom cable compensation in LCR mode when

NIDCPOWER_ATTR_CABLE_LENGTH is set to

NIDCPOWER_VAL_CUSTOM_ONBOARD_STORAGE or

NIDCPOWER_VAL_CUSTOM_AS_CONFIGURED.

# Syntax

NIDCPOWER_ATTR_LCR_SHORT_CUSTOM_CABLE_COMPENSATION_ENABLED

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150299 | ViBoolean | Read/Write | Channels |

# Remarks

LCR custom cable compensation uses compensation data for both an open and shortconfiguration.

• For open custom cable compensation, you must supply your own data from a callto niDCPower_PerformLCROpenCustomCableCompensation.

• For short custom cable compensation, you can supply your own data from a call toniDCPower_PerformLCRShortCustomCableCompensation or NI-DCPower canapply a default set of short compensation data.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE(0) | Uses default short compensation data. |
| VI_true(1) | Uses short custom cable compensation data generated by niDCPower.PerformLCRShortCustomCableCompensation. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

DC Bias

# NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RA

Specifies the current range, in amps, that defines the values to which you can set theLCR DC bias current level (NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL) for thespecified channel(s).

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150274 | ViReal64 | Read/Write | Channels |

# Remarks

For valid ranges, refer to the specifications for your instrument.

Note

This attribute is not supported by all instruments. Refer to SupportedAttributes by Device for information about supported instruments.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_DC_BIAS_TRANSIENT_R

For instruments in LCR mode, determines whether NI-DCPower automaticallycalculates and applies the transient response values for DC bias or applies thetransient response you set manually.

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_TRANSIENT_RESPONSE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150347 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_LCR_DC_BIAS_TRANIENT_RESPONSE_NORMAL | 1151(0x47f) | NI-DCPower automatically appliessponse values for DC bias. |
| NIDCPOWER_VAL_LCR_DC_BIAS_TRANIENT_RESPONSE/customOM | 1152(0x480) | NI-DCPower applies the transientthat you set manually withNIDCPOWER_ATTR_TRANIENTIfor DC bias. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# NIDCPOWER_ATTR_LCR_DC_BIAS_V CR_DC_BIAS_VOLTAGE_RANGE_RAN

Specifies the current range, in volts, that defines the values to which you can set theLCR DC bias voltage level (NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL) for thespecified channel(s).

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150266 | ViReal64 | Read/Write | Channels |

# Remarks

For valid ranges, refer to the specifications for your instrument.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_DC_BIAS_A CR_DC_BIAS_AUTOMATIC_LEVEL_C TIC_LEVEL_CONTROL

Specifies whether the channel actively maintains a constant DC bias voltage or currentacross the DUT for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150291 | VInt32 | Read/Write | Channels |

# Remarks

To use this attribute, you must configure a DC bias by:

• Selecting an NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE

• Depending on the DC bias source you choose, setting either the

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | Automatic level control is off. |
| NIDCPOWER_VAL_ON | 1 (0x1) | Automatic level control is on. |

# Note

Because the PXIe-4190 output impedance is a function of the impedancerange, selecting this option may result in an actual DC bias value at the loadthat is different from the value you specify. Impedance measurements takethis difference into account and remain accurate.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL

Specifies the DC bias current level, in amperes, when the

NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE is set to

NIDCPOWER_VAL_DC_BIAS_CURRENT.

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150215 | ViReal64 | Read/Write | Channels |

# Valid Values:

-0.1 A to 0.1 A

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE

Specifies how to apply DC bias for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150213 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_DC_BIAS_OFF | 1065(0x429) | Disables DC bias in LCR mode. |
| NIDCPOWER_VAL_DC_BIAS_VOLTAGE | 1066(0x42a) | Applies a constant voltage bias, as defined by the NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVELattribute. |
| NIDCPOWER_VAL_DC_BIAS_CURRENT | 1067(0x42b) | Applies a constant current bias, as defined by the NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVELattribute. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_DC_BIAS_VCR_DC_BIAS_VOLTAGE_LEVELGE_LEVEL

Specifies the DC bias voltage level, in volts, when theNIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE is set toNIDCPOWER_VAL_DC_BIAS_VOLTAGE.

# Syntax

NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150214 | ViReal64 | Read/Write | Channels |

# Valid Values:

-40 V to 40 V

Instrument specifications affect the valid values you can program. Refer to thespecifications for your instrument for more information.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

Impedance Range

# Syntax

NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150321 | VInt32 | Read/Write | Channels |

# Note

NIDCPOWER_ATTR_LCR_IMPEDANCE_AUTO_RANGE overrides anyimpedance range determined by this attribute.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_LCR_IMPEDANCE_RANGE | 1142(0x476) | Uses the impedance range you specify with theNIDCPOWER_ATTR_LCR_IMPEDANCE_RANGEattribute. |
| NIDCPOWER_VAL_LCR_LOAD_CONFIGURATION | 1143(0x477) | Computes the impedance range to selectbased on the values you supply to theNIDCPOWER_ATTR_LCR_LOADResistance, NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE, and NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE attributes. NI-DCPower uses a series model of load resistance, load inductance, and load capacitance to compute the impedance range. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE

Specifies the load capacitance, in farads and assuming a series model, of the DUT inorder to compute the impedance range whenNIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE is set toNIDCPOWER_VAL_LCR_LOAD_CONFIGURATION.

# Syntax

NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150320 | ViReal64 | Read/Write | Channels |

# Valid Values:

(0 farads, +inf farads)

0 is a special value that signifies +inf farads.

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_LOAD_INDUC AD_INDUCTANCE

Specifies the load inductance, in henrys and assuming a series model, of the DUT inorder to compute the impedance range when

NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE is set to

NIDCPOWER_VAL_LCR_LOAD_CONFIGURATION.

# Syntax

NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150319 | ViReal64 | Read/Write | Channels |

# Valid Values:

[0 henrys, +inf henrys)

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_LOAD_RESISAD_RESISTANCE

Specifies the load resistance, in ohms and assuming a series model, of the DUT inorder to compute the impedance range whenNIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE is set toNIDCPOWER_VAL_LCR_LOAD_CONFIGURATION.

# Syntax

NIDCPOWER_ATTR_LCR_LOAD_RESISTANCE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150318 | ViReal64 | Read/Write | Channels |

# Valid Values:

[0 ohms, +inf ohms)

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_IMPEDCR_IMPEDANCE_AUTO_RANGEO_RANGE

Defines whether an instrument in LCR mode automatically selects the best impedancerange for each given LCR measurement.

# Syntax

NIDCPOWER_ATTR_LCR_IMPEDANCE_AUTO_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150216 | VInt32 | Read/Write | Channels |

# Remarks

Impedance autoranging may be enabled only when both:

• The NIDCPOWER_ATTR_SOURCE_MODE attribute is set to

• NIDCPOWER_VAL_SINGLE_POINT

# The NIDCPOWER_ATTR_MEASURE_WHEN attribute is set to a value other thanNIDCPOWER_VAL_ON_MEASURE_TRIGGER

You can read NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE back after a measurementto determine the actual range used.

When enabled, impedance autoranging overrides impedance range settings youconfigure manually with any other attributes.

# Note

When using a load with unknown impedance, you can set this attribute toNIDCPOWER_VAL_AUTO_RANGE_ON to determine the correct impedancerange for the load. When you know the load impedance, you can achievefaster performance by setting this attribute toNIDCPOWER_VAL_AUTO_RANGE_OFF and settingNIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE toNIDCPOWER_VAL_LCR_LOAD_CONFIGURATION.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_AUTO_RANGE_OFF | 1068(0x42c) | Disables automatic selection of the impedance range. Channel(s) use the impedance range you specify with the NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE attribute. |
| NIDCPOWER_VAL_AUTO_RANGE_ON | 1070(0x42e) | Channel(s) automatically select the optimal NIDCPOWER_ATTR LCR IMPEDANCE RANGE for the measured signal. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE

Specifies the impedance range the channel uses for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150217 | ViReal64 | Read/Write | Channels |

# Remarks

Attributes by Device for information about supported instruments.

# Valid Values:

0 ohms to +inf ohms

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_INSTRUMENT_MODE

Specifies the mode of operation for an instrument channel for instruments thatsupport multiple modes.

# Syntax

NIDCPOWER_ATTR_INSTRUMENT_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150208 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_SMU_PS | 1061 (0x425) | The channel functions as an SMU/power supply. |
| NIDCPOWER_VAL_LCR | 1062 (0x426) | The channel functions as an LCR meter. |
| NIDCPOWER_VAL_E_LOAD | 1154 (0x482) | The channel functions as an electronic load (E-Load). |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

# NIDCPOWER_ATTR_LCR_CUSTOM_MEASUREMENT_TIMEOM_MEASUREMENT_TIME

Specifies the LCR measurement aperture time for a channel, in seconds, when theNIDCPOWER_ATTR_LCR_MEASUREMENT_TIME attribute is set toNIDCPOWER_VAL_MEASUREMENT_TIME_CUSTOM.

# Syntax

NIDCPOWER_ATTR_LCR_CUSTOM_MEASUREMENT_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150258 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values:

0 s to 0.99999 s

Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME

Selects a general aperture time profile for LCR measurements.

# Syntax

NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150218 | VInt32 | Read/Write | Channels |

# Remarks

The actual duration of each profile depends on the frequency of the LCR test signal.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_MEASUREMENT_TIME SHORT | 1071(0x42f) | Uses a short aperture time for LCR measurements. |
| NIDCPOWER_VAL_MEASUREMENT_TIME_MEDIUM | 1072(0x430) | Uses a medium aperture time for LCR measurements. |
| NIDCPOWER_VAL_MEASUREMENT_TIME LONG | 1073(0x431) | Uses a long aperture time for LCR measurements. |
| NIDCPOWER_VAL_MEASUREMENT_TIMEcustom | 1117(0x45d) | Uses a custom aperture time for LCR measurement specified by the NIDCPOWER_ATTR LCR Custom MEASUREMENT attribute. |

# Default Value:

Refer to Supported Attributes by Device for the default value by instrument.

NIDCPOWER_ATTR_LCR_SOURCE_DELCR_SOURCE_DELAY_MODE

For instruments in LCR mode, determines whether NI-DCPower automaticallycalculates and applies the source delay or applies a source delay you set manually.

# Syntax

NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150315 | VInt32 | Read/Write | Channels |

# Remarks

You can return the source delay duration for either option by readingNIDCPOWER_ATTR_SOURCE_DELAY.

# Note

When you use this attribute to manually set the source delay, it is possible toset source delays short enough to unbalance the bridge and affectmeasurement accuracy. LCR measurement functions report whether thebridge is unbalanced.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_LCR_SOURCE_DELAY_MODE_AUTOMATIC | 1144(0x478) | NI-DCPower automatically applies source delay of sufficient duration to account for settling time. |
| NIDCPOWER_VAL_LCR_SOURCE_DELAY_MODE_manual | 1145(0x479) | NI-DCPower applies the source delay that you set manually with NIDCPOWER_ATTR_SOURCE_DELAY.You can use this option to set a shorter delay to reduce measurement time at the possible expense of measurement accuracy. |

Default Value: Refer to Supported Attributes by Device for the default value by device.

# Measure

# NIDCPOWER_ATTR_AUTORANGE

Specifies whether the hardware automatically selects the best range to measure thesignal. Note the highest range the algorithm uses is dependent on the correspondinglimit range property. The algorithm the hardware uses can be controlled using theNIDCPOWER_ATTR_AUTORANGE_APERTURE_TIME_MODE attribute.

# Syntax

NIDCPOWER_ATTR_AUTORANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150244 | VInt32 | Read/Write | Channels |

# Note

This property is not supported by all devices. Refer to the SupportedAttributes by Device for information about devices that support this attribute.

# Note

Autoranging begins at instrument startup and remains active until theinstrument is reconfigured or reset.

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0(0x0) | The hardware does not select the range. |
| NIDCPOWER_VAL_ON | 1(0x1) | The hardware selects the range based on the compliance range and autorange attributes. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_APERORANGE_APERTURE_TIME_MODETURE_TIME_MODE

Specifies whether the aperture time used for the measurement autorange algorithm isdetermined automatically or customized using the

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME attribute.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_APERTURE_TIME_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150246 | VInt32 | Read/Write | Channels |

# Remarks

Note

This attribute is not supported by all devices. Refer to Supported Attributesby Device for information about supported devices.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_APERTURE_TIME_AUTO | 1110(0x456) | NI-DCPower optimizes the aperture time for the autoraia based on the module range. |
| NIDCPOWER_VAL_APERTURE_TIMECustom | 1111(0x457) | The user specifies a minimum aperture time for the algo the NIDCPOWER_ATTR_AUTORANGE MINIMUM APERTURE attribute and the corresponding NIDCPOWER_ATTR AUTORANGE MINIMUM APERTURE attribute. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_BEHA ORANGE_BEHAVIOR

Specifies the algorithm the hardware uses for measurement autoranging.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_BEHAVIOR

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150245 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RANGE_UP_TO_LIMIT THEN_DOWN | 1107(0x453) | Range up to maximum, then down-Go to limit range then range down as needed until measured value is within thresholds. |
| NIDCPOWER_VAL_RANGE_UP | 1108(0x454) | Range up-Go up one range when the upper threshold is reached. |
| NIDCPOWER_VAL_RANGE_UP_AND_DOWN | 1109(0x455) | Range up and down-Go up or down one range when the upper/ lower threshold is reached. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_MAORANGE_MAXIMUM_DELXIMUM_DELAY_AFTER_RANGE_CHANGEY_AFTER_RANGE_CHANGE

Balances between settling time and maximum measurement time by specifying themaximum time delay between when a range change occurs and when measurementsresume.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150322 | ViReal64 | Read/Write | Channels |

# Remarks

Valid Values: The minimum and maximum values of this attribute are hardware-dependent.

• PXIe-4135/4136/4137: 0 to 9 seconds

• PXIe-4138/4139: 0 to 9 seconds

• PXIe-4147: 0 to 9 seconds

• PXIe-4162/4163: 0 to 0.1 seconds

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Related Topics:

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERORANGE_MINIMUM_APERTURE_TIMETURE_TIME

Specifies the measurement autorange aperture time used for the measurementautorange algorithm. The aperture time is specified in the units set by theNIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME_UNITS attribute. Thisvalue will typically be smaller than the aperture time used for measurements.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150247 | ViReal64 | Read/Write | Channels |

# Remarks

initialize the session using theniDCPower_InitializeWithIndependentChannels function.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APER ORANGE_MINIMUM_APERTURE_TIME_UNIT TURE_TIME_UNITS

Specifies the units of the

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME attribute.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME_UNITS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150248 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALalseCONDS | 1028(0x404) | Specifies aperture time in seconds. |
| NIDCPOWER_VAL_POWER_LINE_CYCLES | 1029(0x405) | Specifies aperture time in power line cycles(PLCs). |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_CORANGE_MINIMUM_CURRENT_RANGEURRENT_RANGE

Limiting the lowest range used during autoranging can improve the speed of theautoranging algorithm and minimize frequent and unpredictable range changes fornoisy signals. The maximum range used is the range that includes the value specifiedin the compliance limit attribute, NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attributeor NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute, depending on the selectedNIDCPOWER_ATTR_OUTPUT_FUNCTION.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_CURRENT_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150255 | ViReal64 | Read/Write | Channels |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_V ORANGE_MINIMUM_VOLTAGE_RANGEGE_RANGE

Limiting the lowest range used during autoranging can improve the speed of theautoranging algorithm and minimize frequent and unpredictable range changes fornoisy signals. The maximum range used is the range that includes the value specifiedin the compliance limit attribute, NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE attributeor NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE attribute, depending on the selectedNIDCPOWER_ATTR_OUTPUT_FUNCTION.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_MINIMUM_VOLTAGE_RANGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150256 | ViReal64 | Read/Write | Channels |

# Remarks

Attributes by Device for information about devices that support this attribute.

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_AUTORANGE_THRESHOLD_MODE

Specifies thresholds used during autoranging to determine when range changingoccurs.

# Syntax

NIDCPOWER_ATTR_AUTORANGE_THRESHOLD_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150257 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_THRESH_MODE_NORMAL | 1112(0x458) | Thresholds are selected based on a balance between accuracy and hysteresis. |
| NIDCPOWER_VAL_THRESH_MODE_FAST_STEP | 1113(0x459) | Optimized for faster changes in the measured signal. Thresholds are configured to be a smaller percentage of the range. |
| NIDCPOWER_VAL_THRESH_MODE_HIGH_HYSTERESIS | 1114(0x45a) | Optimized for noisy signals to minimize frequent and unpredictable range changes. Thresholds are configured to be a larger percentage of the range. |
| NIDCPOWER_VAL_THRESH_MODEMedium_HYSTERESIS | 1115(0x45b) | Optimized for faster changes in the measured signal. Thresholds are configured to be a smaller percentage of the range. |
| NIDCPOWER_VAL_THRESH_MODE_HOLD | 1116(0x45c) | Attempt to maintain the active range. Thresholds will favor the active range. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

NIDCPOWER_ATTR_DC_NOISE_REJECTION

Determines the relative weighting of samples in a measurement.

# Syntax

NIDCPOWER_ATTR_DC_NOISE_REJECTION

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150066 | VInt32 | Read/Write | Channels |

# Remarks

Refer the DC noise rejection topics of supported devices for more information aboutnoise rejection.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_DC_NOISE_REJECTION_SECOND_ORDER | 1043(0x413) | Second-order DC noise rejection. |
| NIDCPOWER_VAL_DC_NOISE_REJECTION_NORMAL | 1044(0x414) | Normal DC noise rejection. |

Default Value: NIDCPOWER_VAL_DC_NOISE_REJECTION_NORMAL

NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE

Specifies the number of samples that the active channel measurement buffer canhold.

# Syntax

NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150077 | VInt32 | Read/Write | Channels |

# Remarks

The default value is the maximum number of samples that a device is capable of

recording in one second.

Valid Range: For the PXIe-4051, PXIe-4147 and PXIe-4150/4151, 170 to 18000110. Forthe PXIe-4162/4163, 256 to 1000192. For the PXIe-4190, 102 to 6000048. For thePXIe-4112, PXIe-4113, and PXIe-4154, 1000 to 178956970. For all other supportedinstruments, 1000 to 268435455.

Default Value: Varies by device. Refer to the Supported Attributes by Device topic inthe NI DC Power Supplies and SMUs Help for more information about defaultvalues.

# Related Topics:

NIDCPOWER_ATTR_MEASURE_WHEN

Specifies when the measure unit should acquire measurements. Unless this attributeis configured to NIDCPOWER_VAL_ON_MEASURE_TRIGGER, theNIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE attribute is ignored.

# Syntax

NIDCPOWER_ATTR_MEASURE_WHEN

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150057 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE | 1025(0x401) | Acquires a measurementafter each Source Completeevent. |
| NIDCPOWER_VAL_ON_DEMAND | 1026 | Acquires a measurement |
|  | (0x402) | when the niDCPower_Measure function or niDCPower_MeasureMultiple function is called. |
| NIDCPOWER_VAL_ON_MEASURE_TRIGGER | 1027 (0x403) | Acquires a measurement when a Measure trigger is received. |

Default Value: If the NIDCPOWER_ATTR_SOURCE_MODE attribute is set toNIDCPOWER_VAL_SINGLE_POINT, the default value isNIDCPOWER_VAL_ON_DEMAND. This value supports only the niDCPower_Measurefunction and niDCPower_MeasureMultiple function. If theNIDCPOWER_ATTR_SOURCE_MODE attribute is set to NIDCPOWER_VAL_SEQUENCE,the default value is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE.This value supports only the niDCPower_FetchMultiple function.

# Related Topics:

NIDCPOWER_ATTR_RESET_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENTORE_MEASUREMENT

Specifies whether the measurement returned from any measurement call starts with anew measurement call (VI_TRUE) or returns a measurement that has already begun orcompleted(VI_FALSE).

# Syntax

NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150006 | ViBoolean | Read/Write | Channels |

# Remarks

When you set the NIDCPOWER_ATTR_SAMPLES_TO_AVERAGE attribute in the Runningstate, the channel measurements might move out of synchronization. While NI-DCPower automatically synchronizes measurements upon the initialization of asession, you can force a synchronization in the running state before you run theniDCPower_MeasureMultiple function. To force a synchronization in the running state,set this attribute to VI_TRUE, and then run the niDCPower_MeasureMultiple function,specifying all channels in the channel name parameter. You can set theNIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT attribute to VI_FALSEafter the niDCPower_MeasureMultiple function completes.

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Do not reset the average before measurement. |
| VI:true (1) | Reset the average before measurement. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Related Topics:

# NIDCPOWER_ATTR_APERTURE_TIME

Specifies the measurement aperture time for the channel configuration. Aperture timeis specified in the units set by the NIDCPOWER_ATTR_APERTURE_TIME_UNITSattribute.

# Syntax

NIDCPOWER_ATTR_APERTURE_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150058 | ViReal64 | Read/Write | Channels |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# High-Level Functions:

• niDCPower_ConfigureApertureTime

# NIDCPOWER_ATTR_APER TTR_APERTURE_TIME_A TURE_TIME_AUTO_MODE

Automatically optimizes the measurement aperture time according to the actualcurrent range when measurement autorange is enabled. Optimization accounts forpower line frequency when the NIDCPOWER_ATTR_APERTURE_TIME_UNITS attributeis set to NIDCPOWER_VAL_POWER_LINE_CYCLES.

# Syntax

NIDCPOWER_ATTR_APERTURE_TIME_AUTO_MODE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150314 | VInt32 | Read/Write | Channels |

# Remarks

This attribute is applicable only if the NIDCPOWER_ATTR_OUTPUT_FUNCTIONattribute is set to NIDCPOWER_VAL_DC_VOLTAGE and theNIDCPOWER_ATTR_AUTORANGE attribute is set to NIDCPOWER_VAL_ON.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_APERTURE_TIME_AUTO_MODE_OFF | 1135(0x46f) | Disables automatic aperture time scaling. The NIDCPOWER_ATTR_APERTURE_TIME attribute specifies the aperture time for all ranges. |
| NIDCPOWER_VAL_APERTURE_TIME_AUTO_MODE SHORT | 1136(0x470) | Prioritizes measurement speed over measurement accuracy by quickly scaling down aperture time in larger current ranges. The NIDCPOWER_ATTR_APERTURE_TIME attribute specifies the aperture time for the minimum range. |
| NIDCPOWER_VAL_APERTURE_TIME_AUTO_MODE_NORMAL | 1137(0x471) | Balances measurement accuracy and speed by scaling down aperture time in larger current ranges. The NIDCPOWER_ATTR_APERTURE_TIME attribute specifies the aperture time for the minimum range. |
| NIDCPOWER_VAL_APERTURE_TIME_AUTO_MODE_long | 1138(0x472) | Prioritizes accuracy while still decreasing measurement time by slowly scaling down aperture time in larger current ranges. The NIDCPOWER_ATTR_APERTURE_TIME attribute specifies the aperture time for the minimum range. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# Related Topics:

NIDCPOWER_ATTR_AUTORANGE

NIDCPOWER_ATTR_APERTURE_TIME_UNITS

Specifies the units of the NIDCPOWER_ATTR_APERTURE_TIME attribute for thechannel configuration.

# Syntax

NIDCPOWER_ATTR_APERTURE_TIME_UNITS

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150059 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VALalseCONDS | 1028(0x404) | Specifies aperture time in seconds. |
| NIDCPOWER_VAL_POWER_LINE_CYCLES | 1029(0x405) | Specifies aperture time in power line cycles(PLCs). |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# High-Level Functions:

• niDCPower_ConfigureApertureTime

NIDCPOWER_ATTR_AUTO_ZERO

Specifies the auto-zero method to use on the device.

# Syntax

NIDCPOWER_ATTR_AUTO_ZERO

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150055 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_OFF | 0 (0x0) | Disables auto-zero. |
| NIDCPOWER_VAL_ONCE | 1024(0x400) | Makes zero conversions following the first measurement after initiating the channel(s). Channels use these zero conversions for the preceding measurement and future measurements until they are reinitiated. |
| NIDCPOWER_VAL_ON | 1 (0x1) | Makes zero conversions for every measurement. |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# High-Level Functions:

• niDCPower_ConfigureAutoZero

NIDCPOWER_ATTR_FETTTR_FETCH_BACKLOG

Returns the number of measurements acquired that have not been fetched yet.

# Syntax

NIDCPOWER_ATTR_FETCH_BACKLOG

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150056 | VInt32 | Read-Only | Channels |

# Related Topics:

NIDCPOWER_ATTR_MEASURE_REC TTR_MEASURE_RECORD_DEL ORD_DELTA_TIME

Queries the amount of time, in seconds, between the start of two consecutivemeasurements in a measure record. Only query this attribute after the desiredmeasurement settings are committed.

# Syntax

NIDCPOWER_ATTR_MEASURE_RECORD_DELTA_TIME

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150065 | ViReal64 | Read-Only | Channels |

# Note

This attribute is not available when Auto Zero is configured to Once becausethe amount of time between the first two measurements and the rest woulddiffer.

# Related Topics:

NIDCPOWER_ATTR_MEASURE_RECORD_LENGTH

Specifies how many measurements compose a measure record. When this attribute isset to a value greater than 1, the NIDCPOWER_ATTR_MEASURE_WHEN attribute mustbe set to NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE orNIDCPOWER_VAL_ON_MEASURE_TRIGGER.

# Syntax

NIDCPOWER_ATTR_MEASURE_RECORD_LENGTH

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150063 | VInt32 | Read/Write | Channels |

# Remarks

Valid Values: 1 to 16,777,216

Default Value: 1

Related Topics:

NIDCPOWER_ATTR_MEASURE_RECORD_LENGTH_IS_FINITE

Specifies whether to take continuous measurements. Call theniDCPower_AbortWithChannels function to stop continuous measurements. When thisattribute is set to VI_FALSE and the NIDCPOWER_ATTR_SOURCE_MODE attribute is setto NIDCPOWER_VAL_SINGLE_POINT, the NIDCPOWER_ATTR_MEASURE_WHENattribute must be set toNIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE orNIDCPOWER_VAL_ON_MEASURE_TRIGGER. When this attribute is set to VI_FALSE andthe NIDCPOWER_ATTR_SOURCE_MODE attribute is set toNIDCPOWER_VAL_SEQUENCE, the NIDCPOWER_ATTR_MEASURE_WHEN attributemust be set to NIDCPOWER_VAL_ON_MEASURE_TRIGGER.

Syntax

NIDCPOWER_ATTR_MEASURE_RECORD_LENGTH_IS_FINITE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150064 | ViBoolean | Read/Write | Channels |

# Defined Values:

|  |  |
| --- | --- |
| VI_FALSE (0) | Allows continuous measurement. |
| VI_true (1) | Does not allow continuous measurement. |

Default Value: VI_TRUE

Related Topics:

# NIDCPOWER_ATTR_POWER_LINE_FREQUENCY

Specifies the power line frequency for specified channel(s). NI-DCPower uses this valueto select a timebase for setting the NIDCPOWER_ATTR_APERTURE_TIME attribute inpower line cycles (PLCs).

# Syntax

NIDCPOWER_ATTR_POWER_LINE_FREQUENCY

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150020 | ViReal64 | Read/Write | Channels |

# Remarks

Refer to the measurement configuration and timing topics and DC noise rejectiontopics of supported devices for more information about how to configure yourmeasurements.

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_50_HERTZ | 50.0 | Specifies a power line frequency of 50 Hz. |
| NIDCPOWER_VAL_60_HERTZ | 60.0 | Specifies a power line frequency of 60 Hz. |

Default Value:NIDCPOWER_VAL_60_HERTZ

High-Level Functions:

• niDCPower_ConfigurePowerLineFrequency

NIDCPOWER_ATTR_SAMPLES_T TTR_SAMPLES_TO_AVERAGE

Specifies the number of samples to average when you take a measurement.

# Syntax

NIDCPOWER_ATTR_SAMPLES_TO_AVERAGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150003 | VInt32 | Read/Write | Channels |

# Remarks

Increasing the number of samples to average decreases measurement noise butincreases the time required to take a measurement.

| Device | Range of Samples to Average |
| --- | --- |
| NI PXI-4110 and NI PXI-4130 | 1 to 511 samples |
| NI PXI-4132 | 1 to 127 samples |
| NI PXIe-4154 | 1 to 65,535 samples |
| All other supported instruments | 1 |

# Default Value:

Refer to Supported Attributes by Device for the default value by device.

# NIDCPOWER_ATTR_SENSE

Selects either local or remote sensing of the output voltage for the specifiedchannel(s).

# Syntax

NIDCPOWER_ATTR_SENSE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150013 | VInt32 | Read/Write | Channels |

# Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_LOCAL | 1008 (0x3f0) | Local sensing |
| NIDCPOWER_VALREMOTE | 1009 (0x3f1) | Remote sensing |

Default Value: The default value is NIDCPOWER_VAL_LOCAL if the device supportslocal sense. Otherwise, the default and only supported value isNIDCPOWER_VAL_REMOTE.

# High-Level Functions:

• niDCPower_ConfigureSense

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

# Attributes Support es Supported by the P ed by the PXI-4110 XI-4110

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for that

device. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXI-4110 |
| --- | --- |
| NIDCPOWER_ATTRActive_ADVANCEDSEQUENCE | X |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCESTEP | X |
| NIDCPOWER_ATTRACTUAL_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | X |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGEAPERTURETIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGEMAXIMUM_DELAY AFTER_RANGE_CHANGES | X |
| NIDCPOWER_ATTRAUTORANGEMINIMUMAPERTURE_TIME | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME.units | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_autORANGEThreshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR Constant Resistance Pole ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | Channel 0: 0.01 Chan |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 1 |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.1 |
| NIDCPOWER_ATTR CURRENT LIMIT AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LIMIT HIGH | 0.1 |
| NIDCPOWER_ATTR CURRENT LIMIT LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE_ADVANCE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE.SEQUENCE_ADVANCE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported.Sequence_ADVANCE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported_START_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTR Fetch.BackLOG | X |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR Custom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQENCY | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMOUNTITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | X |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | X |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_IS_FINE | X |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | NIDCPOWER_VAL_HI |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | X |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_AU |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | VI:true |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 10 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | X |
| NIDCPOWER_ATTRSENSE | X |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT | X |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT_ISFINITE | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s4 |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | X |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | Channel 0:-6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

4 Software timed.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXI-4130 XI-4130

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for that

device. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXI-4130 |
| --- | --- |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE | X |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE STEP | X |
| NIDCPOWER_ATTRACTUAL_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | X |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGEAPERTURETIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGEMAXIMUM_DELAY AFTER RANGECHANGE | X |
| NIDCPOWER_ATTRAUTORANGEMINIMUMAPERTURETIME | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME.units | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_autORANGEThreshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFF Threshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR Constant Resistance Pole ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | Channel 0: 0.02 Chan |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | Channel 1: 1 Channel |
| NIDCPOWER_ATTR CURRENT RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.1 |
| NIDCPOWER_ATTR CURRENT LIMIT AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LIMIT HIGH | 0.1 |
| NIDCPOWER_ATTR CURRENT LIMIT LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT | Channel 1:1 Channel |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE_ADVANCE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE.SEQUENCE_ADVANCE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported MEASURE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExported Sequence Advance TriggerOutputTerminal | X |
| NIDCPOWER_ATTRExported SOURCE TriggerOutputTerminal | X |
| NIDCPOWER_ATTRExported_START_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTR Fetch BackupLOG | X |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR Custom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQENCY | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMOUNTITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | X |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | X |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_IS_FINE | X |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | NIDCPOWER_VAL_HI |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | 0.0 |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true4 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | X |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_AU |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | VI:true |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 10 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | X |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLISWIDTH | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT | X |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT_ISFINITE | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s6 |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | X |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | Channel 0:6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | Channel 0:-6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value for channel 1 is NIDCPOWER_VAL_LOW.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

5 Channel 1.

6 Software timed.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXI-4132 XI-4132

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXI-4132 |
| --- | --- |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE | X |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE_STEP | X |
| NIDCPOWER_ATTRActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGEAPERTURETIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | X |
| NIDCPOWER_ATTR_AUTORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_APERTURE_TIME_UNITS | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR AutofORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.002 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 0.1 |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.02 |
| NIDCPOWER_ATTR CURRENT LIMIT AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.02 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.02 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_INPUT terminals | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTREXPORTED_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTREXPORTEDSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGEAMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 64000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 150 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length | VI_true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_D |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | NIDCPOWER_VAL_HI |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | 0.0 |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VIFalse |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_WIDTH | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_POLARITY | X |
| NIDCPOWER_ATTRReady_FOR_PULSE_TRIGGER_EVENT_POLSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSEQENCEENGINE_DONE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTRSEQENCEENGINE_DONE_EVENT_POLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTRSEQENCEENGINE_DONE_EVENT_POLSE_WIDTH | 150 ns |
| NIDCPOWER_ATTRSEQENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSequence最后一次(event_output_behavior) | "" |
| NIDCPOWER_ATTRSequence最后一次(event_OUTPUT terminals) | "" |
| NIDCPOWER_ATTRSequence最后一次(event激活程度) | NIDCPOWER_VAL_ACT |
| NIDCPOWER_ATTRSequence最后一次(event激活程度WIDTH) | 150 ns |
| NIDCPOWER_ATTRSequence最后一次(event_TOGGLE_INITIAL_STATE) | X |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_ISFinite | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VIFalse |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 150 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFICDriver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFICDriver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFICDriver_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV柽FIX | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver Vendor | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODEL5 | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 10 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

Attributes Support es Supported by the P ed by the PXIe-4051

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4051 |
| --- | --- |
| NIDCPOWER_ATTRActive_ADVANCEDSequence | "" |
| NIDCPOWER_ATTRActive_ADVANCEDSEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRACTUAL POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 0.01666666s |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTRAUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTRAUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR autopORANGE_MINIMUM_APERTURE_TIME.units | X |
| NIDCPOWER_ATTR autopORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR autopORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR autopORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | X |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | 0.05 V |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | 0.15 V |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | Determined by the value setting of the NIDCPCG attribute. |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | 0.8 A |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | Determined by the value setting of the NIDCPCG attribute. |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | 0.0 W |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | 300.0 W4 |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPCG attribute. |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | Determined by the value setting of the NIDCPCG attribute. |
| NIDCPOWER_ATTR Constant Resistance CURRENT LIMIT | 0.8 A |
| NIDCPOWER_ATTR Constant Resistance GAIN BANDWIDTH | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR Constant Resistance LEVEL | 1000.0 ohms |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | 1000.0 ohms |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | 24.0 A/us |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | 40 A |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | 24.0 A/us |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.8 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 40 A |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NOI |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTR-exportED_MEASURE_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR-exportED_PULSE_TRIGGER_OUTPUT-terminal | X |
| NIDCPOWER_ATTR-exportEDSequence_ADVANCE_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR-exportED_SOURCE_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR-exportED_START_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_E_ |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORTcustom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 1800130 |
| NIDCPOWER_ATTR_MEASURE_EVENT_DELAY | 0 s |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DIR |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUTResistance | 0.02 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | VI_FALSE |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | VI_FALSE2 |
| NIDCPOWER_ATTR_OVP_LIMIT | 0.02 |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE FREQUENCY | 60 Hz |
| NIDCPOWER_ATTR_POWER_SOURCE | X |
| NIDCPOWER_ATTR_POWER_SOURCE_INUse | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_before_MEASUREMENT | X |
| NIDCPOWER_ATTR_SAMPLE_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_W |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_L |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTRSEQUENCE_iteration_COMPLETE_EVENT_POLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_PULSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT | 1 |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT_ISFINITE | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | VI_FALSE2 |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUTTerminal | ''' |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_POLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns² |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANSIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 60.0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 60 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | INFINITY2 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 60 V |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPO attribute. |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannels orniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is VI_FALSE.

4 Default depends on the max DC sinking power of the instrument. Refer to thespecifications for your instrument for more information.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4112/4113 -4112/4113

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4112 |
| --- | --- |
| NIDCPOWER_ATTR Active ADVANCED SEQUENCE | X |
| NIDCPOWER_ATTR Active ADVANCED SEQUENCE STEP | X |
| NIDCPOWER_ATTR ACTUAL POWER ALLOCATION | X |
| NIDCPOWER_ATTR APERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTR APERTURE TIME AUTO MODE | X |
| NIDCPOWER_ATTR APERTURE TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTR AUTORANGE | X |
| NIDCPOWER_ATTR AUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTR_AUTORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTR_AUTOORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTR_AUTOORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR_AUTOORANGE_MINIMUM_APERTURE_TIME_UNITS | X |
| NIDCPOWER_ATTR_AUTOORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_AUTOORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_AUTOORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_AUXILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPULSION_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTRCONSTANT_POWER_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTRCONSTANT_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTRCONSTANT_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTRCONSTANT_POWER_LEVEL | X |
| NIDCPOWER_ATTRCONSTANT_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTRCONSTANT_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTRCONSTANTResistanceCompensation FREQUENCY | X |
| NIDCPOWER_ATTRCONSTANTResistance_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance Gain Bandwidth | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.01 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 1 |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_autORANGE | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT terminals | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT_TERM | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT_TERM | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT_TERM | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTR-exportED_MEASURE_TRIGGER_OUTPUT_TERM | "" |
| NIDCPOWER_ATTR-exportED_PULSE_TRIGGER_OUTPUT_TERM | X |
| NIDCPOWER_ATTR_exportEDSequence_ADVANCE_TRIGGER_OUTPUT_TERM | "" |
| NIDCPOWER_ATTR_exportED_SOURCE_TRIGGER_OUTPUT_TERM | "" |
| NIDCPOWER_ATTR_exportED_START_TRIGGER_OUTPUT_TERM | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VI=False |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMOUNTITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 10500 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length_ISFinite | VI_true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_D |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VIFalse |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQENCY | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_AU |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY FOR PULSE TRIGGER EVENT PULSE WIDTH | X |
| NIDCPOWER_ATTR RECORD COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR REQUESTED POWER ALLOCATION | X |
| NIDCPOWER_ATTR RESET AVERAGE BEFORE MEASUREMENT | X |
| NIDCPOWER_ATTR SAMPLES TO AVERAGE | 1 |
| NIDCPOWER_ATTR SELF CALIBRATION PERSISTENCE | X |
| NIDCPOWER_ATTR SENSE | NIDCPOWER_VAL_RE |
| NIDCPOWER_ATTR SEQUENCE ADVANCE TRIGGER TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE_EVENT_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUTBEHAVIOR | X |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUTTERMINAL | "" |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_ISFINITE | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.08 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajorVERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinorVERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver Prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DriverVASCTOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0.1 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 60 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE | NIDCPOWER_VAL_OPI |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 60 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

4 NIDCPOWER_VAL_AUXILIARY is the only valid value.

5 NIDCPOWER_VAL_REMOTE is the only valid value.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4135

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4135 |
| --- | --- |
| NIDCPOWER_ATTRIBUTE_ADVANCEDSequence | "" |
| NIDCPOWER_ATTRIBUTE_ADVANCEDSEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRIBUTEActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIME_AUTO_MODE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIME_UNITS | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTRIBUTE_AUTORANGE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_autORANGE_APERTURE_TIME_MODE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_autORANGE_BEHAVIOR | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGES | 0.5 s |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIMEUNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_threshold_MODE | NORMAL |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR Constant Resistance CURRENT LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the value of Response property. |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | Determined by the value of Response property. |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 3 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTORANGE | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value of Response property. |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NOI |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT terminals | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRnownLED_MEASURE_TRIGGER_OUTPUT terminals | "" |
| NIDCPOWER_ATTRnownLED_TRIGGER_OUTPUT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR-exportEDSequence_ADVANCEDTRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR-exportED_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR-exportED_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTRINTERLOCK_INPUT_OPEN | N/A |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORTResistance | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE BUFFER_SIZE | 1800000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length_IS_FINE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_D |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | 0.0 |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUTResistance | 0.0 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_LIMIT | 210 V |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_INUse | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | 16.67 mS |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | 10 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | 100 mA |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_ON_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | 6 V |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMAL | ''' |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_before_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTR_SENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTR_sequence_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequenceEngine-done_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceEngine-done_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIterationCOMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_IS_FINAL | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | Determined by the va Response property. |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the va Response property. |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOZONE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | Determined by the value of Response property. |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

4 NIDCPOWER_VAL_WRITE_TO_EEPROM is the only valid value.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4136/4137 -4136/4137

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4136 |
| --- | --- |
| NIDCPOWER_ATTR Active Advanced SEQUENCE | "" |
| NIDCPOWER_ATTR Active Advanced SEQUENCE STEP | 0 |
| NIDCPOWER_ATTR ACTUAL POWER ALLOCATION | X |
| NIDCPOWER_ATTR_APERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTR_APERTURE_TIME_AUTO_MODE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_APERTURE_TIME_UNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_AUTORANGE_APERTURE_TIME_MODE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR.autORANGE_BEHAVIOR | NIDCPOWER_VAL_RA |
| NIDCPOWER_ATTR.autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | 0.5 s |
| NIDCPOWER_ATTR.autORANGE_MINIMUM_APERTURE_TIME | 0 |
| NIDCPOWER_ATTR.autORANGE_MINIMUM_APERTURE_TIME_UNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR.autORANGE_MINIMUM_CURRENT_RANGE | 0 |
| NIDCPOWER_ATTR.autORANGE_MINIMUM_VOLTAGE_RANGE | 0 |
| NIDCPOWER_ATTR.autORANGE_threshold_MODE | NORMAL |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant POWER LEVEL | X |
| NIDCPOWER_ATTR Constant POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR Constant POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR Constant Resistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR Constant Resistance_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance_LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR Constant Resistance_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR CURRENT_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR CURRENT_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL | 0.0 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | 3 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse Trigger_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse Trigger_INPUT Terminal | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE Advance TriggerEDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE Advance Trigger_INPUT Terminal | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE SHUTDOWN Trigger_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE SHUTDOWN Trigger_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE SOURCE_TRIGGER_EDGE | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE SOURCE_TRIGGER_INPUT Terminal | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| Attribute | PXIe-4136 |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExportedSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR Fetch.BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTRINSTRUMENT FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| Attribute | PXle-4136 |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTRIBUTE_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTRIBUTE_INTERLOCK_INPUT_OPEN | N/A |
| NIDCPOWER_ATTRIBUTE_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTRIBUTE_ISOLATION_STATE | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTRIBUTE_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_IMPEDANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_IMPEDANCE_RANGE | X |
| NIDCPOWER_ATTR_IMPEDANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPENSHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| Attribute | PXIe-4136 |
| NIDCPOWER_ATTR_LCR SHORTCustom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE(amplitUTE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 1800000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| Attribute | PXle-4136 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""3 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | 0.0 |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true⁴ |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DG |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_LIMIT | 210 V |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | 16.67 mS |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | 10 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | 100 mA |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_ON_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | NIDCPOWER_VAL_D |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | 6 V |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_before_MEASUREMENT | X |
| NIDCPOWER_ATTR_samples_TO_AVERAGE | 1 |
| NIDCPOWER_ATTR SELF CALIBRATION PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTR Sense | NIDCPOWER_VAL_LCI |
| NIDCPOWER_ATTR SEQNEnce_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUREENGINE_DONE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQUREENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTRSEQUREENGINE_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AO |
| NIDCPOWER_ATTRSEQUREENGINE_DONE_EVENT_POLSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSEQUREENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQURE_iteration_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSEQURE_iteration_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTRSEQURE_iteration_COMPLETE_EVENT_POLSEPOLARITY | NIDCPOWER_VAL_AO |
| NIDCPOWER_ATTRSEQURE_iteration_COMPLETE_EVENT_POLSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_COUNT | 1 |
| NIDCPOWER_ATTRSEQUENCE_COUNT_IS_FINE | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SIE |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_models | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 NIDCPOWER_VAL_NORMAL is the only valid value.

2 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

3 Only valid value.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

5 NIDCPOWER_VAL_WRITE_TO_EEPROM is the only valid value.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4138/4139 -4138/4139

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for that

device. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4138 |
| --- | --- |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE | "" |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE STEP | 0 |
| NIDCPOWER_ATTRACTUAL_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTRAUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTRAUTORANGEAPERTURETIME_MODE | NIDCPOWER_VAL_AP |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | NIDCPOWER_VAL_RA |
| NIDCPOWER_ATTRAUTORANGEMAXIMUM_DELAY AFTER RANGECHANGE | 0.5s |
| NIDCPOWER_ATTRAUTORANGEMINIMUMAPERTURE_TIME | 0 |
| NIDCPOWER_ATTR_AUTORANGE_MINIMUM_APERTURE_TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_CURRENT_RANGE | 0 |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_VOLTAGE_RANGE | 0 |
| NIDCPOWER_ATTR AutofORANGE_threshold_MODE | NORMAL |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR Constant Resistance Pole ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 3 |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.1 |
| NIDCPOWER_ATTR CURRENT LIMIT AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LIMIT HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_INPUT terminals | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTREXPORTED_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_PULSE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTEDSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR_fetch.BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORTCustom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGEAMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 1800000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_recordDELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length | VI_true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...3 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | 0.0 |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | Yes |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | Yes |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true4 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | 16.67 mS |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | 0 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | 10 A |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | 100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | -100 mA |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | 100 mA |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_ON_TIME | 34 ms |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | 0 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | 6 V |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSequence最后一次(event_output_behavior) | "" |
| NIDCPOWER_ATTRSequence最后一次(event_OUTPUT terminals) | "" |
| NIDCPOWER_ATTRSequence最后一次(event激活程度) | NIDCPOWER_VAL_ACT |
| NIDCPOWER_ATTRSequence最后一次(event激活程度WIDTH) | 250 ns |
| NIDCPOWER_ATTRSequence最后一次(event Toggle INITIAL_STATE) | X |
| NIDCPOWER_ATTRSequence Loop_COUNT | 1 |
| NIDCPOWER_ATTRSequence Loop_COUNT_ISFinite | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | VIFalse |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VIFalse |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SIE |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFICDriver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFICDriver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFICDriver_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV柽FIX | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver Vendor | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORANGE | NIDCPOWER_VAL_OPI |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 NIDCPOWER_VAL_NORMAL is the only valid value.

2 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

3 Only valid value.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

5 NIDCPOWER_VAL_WRITE_TO_EEPROM is the only valid value.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4140/4141 -4140/4141

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4140 |
| --- | --- |
| NIDCPOWER_ATTRIBUTE_ADVANCEDSequence | "" |
| NIDCPOWER_ATTRIBUTE_ADVANCEDSEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRIBUTEActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRIBUTE_APERTURE_TIMEUNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTRIBUTE_AUTORANGE | X |
| NIDCPOWER_ATTR_AUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTR AutofORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTR AutofORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_APERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR AutofORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR AutofORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR Constant Resistance CURRENT LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.1 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_autORANGE | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.1 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_CURRENT_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTREXPORTED_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_PULSE_TRIGGER_OUTPUT_OUTPUT | X |
| NIDCPOWER_ATTR-exportEDSequence_ADVANCEDTRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR Exported Source Trigger Output Terminal | "" |
| NIDCPOWER_ATTR Exported START TRIGGER OUTPUT TERMINAL | "" |
| NIDCPOWER_ATTR FETCHBackLOG | N/A |
| NIDCPOWER ATTR GROUP CAPABILITIES | N/A |
| NIDCPOWER ATTR INSTRUMENT FIRMWARE REVISION | N/A |
| NIDCPOWER ATTR INSTRUMENT MANUFACTURER | N/A |
| NIDCPOWER ATTR INSTRUMENT MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER ATTR INSTRUMENT MODEL | N/A |
| NIDCPOWER ATTR INTERCHANGE CHECK | VI_FALSE |
| NIDCPOWER ATTR INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR IO RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_CUSTOM_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORTResistance | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE BUFFER_SIZE | 600000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length_IS_FINE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""3 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | NIDCPOWER_VAL_HI |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true4 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_INUse | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT Range | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_before_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_KEY |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTR_sequence_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequenceEngineergydoneeventPULSEWIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceEngineergydoneeventTOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEeventOUTPUTBEHAVIOR | X |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEeventOUTPUTTERMINAL | "" |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEeventPULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEeventPULSEWIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEeventTOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_IS_FINAL | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT Behavior | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER DESCRIPTION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -10 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 10 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 NIDCPOWER_VAL_NORMAL is the only valid value.

2 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

3 Only valid value.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4142/4143 -4142/4143

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4142 |
| --- | --- |
| NIDCPOWER_ATTR Active Advanced SEQUENCE | "" |
| NIDCPOWER_ATTR Active Advanced SEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_APERTURE_TIME | 0.01666666 s |
| NIDCPOWER_ATTR_APERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTR_APERTURE_TIME_UNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTR_AUTORANGE | X |
| NIDCPOWER_ATTR_AUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTR_autORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTR_autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME_UNITS | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant POWER LEVEL | X |
| NIDCPOWER_ATTR Constant Power Level Range | X |
| NIDCPOWER_ATTR Constant Power Pole ZERO RATIO | X |
| NIDCPOWER_ATTR Constant RESISTANCE COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR Constant RESISTANCE CURRENT LIMIT | X |
| NIDCPOWER_ATTR Constant RESISTANCE GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR Constant RESISTANCE LEVEL | X |
| NIDCPOWER_ATTR Constant RESISTANCE LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant RESISTANCE Pole ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL | 0.15 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | 0.15 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.15 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.15 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.15 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.15 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse Trigger Edge | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE Pulse Trigger_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE Advance Trigger Edge | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE SEQUENCE Advance Trigger_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE SHUTDOWN Trigger Edge | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE SHUTDOWN Trigger_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER Edge | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExportedSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRFETCHbacksLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTRINSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTRIBUTE_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTRIBUTE_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTRIBUTE_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTRIBUTE_ISOLATION_STATE | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTRIBUTE_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_IMPEDANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_IMPEDANCE_RANGE | X |
| NIDCPOWER_ATTR_IMPEDANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPENSHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORTCustom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE(amplitUTE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 600000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""3 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF VOLTAGE CHANGE LIMIT HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF VOLTAGE CHANGE LIMIT LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF VOLTAGE OUTPUT LIMIT HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF VOLTAGE OUTPUT LIMIT LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true⁴ |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DG |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTR_SAMPLE_TO_AVERAGE | 1 |
| NIDCPOWER_ATTR SELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_KE |
| NIDCPOWER_ATTR_SENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTR_sequence_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_sequenceENGINE动生成event Toggle INITIAL_STATE | X |
| NIDCPOWER_ATTR_sequencecompleteevent_output_BEHAVIOR | X |
| NIDCPOWER_ATTR_sequencecompleteeventOUTPUT terminals | "" |
| NIDCPOWER_ATTR_sequencecompleteeventPULSEPOLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTR_sequencecompleteeventPULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_COUNT | 1 |
| NIDCPOWER_ATTRSEQUENCE_COUNT_IS_FINE | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SIE |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_models | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 24 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 NIDCPOWER_VAL_NORMAL is the only valid value.

2 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

3 Only valid value.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4144/4145 -4144/4145

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4144 |
| --- | --- |
| NIDCPOWER_ATTRActive_ADVANCEDSequence | "" |
| NIDCPOWER_ATTRActive_ADVANCEDSEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRACTUAL_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 0.01666666s |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTRAUTORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTRAUTORANGE_MINIMUM_APERTURE_TIME_UNITS | X |
| NIDCPOWER_ATTR_AUTOCHANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_AUTOCHANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_AUTOCHANGEThreshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL | X |
| NIDCPOWER_ATTR_constant Resistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant Resistance_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_CURRENT_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_CURRENT_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL | 0 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | 0.5 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.5 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT_TERMAL | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT_TERMAL | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUT_TERMAL | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT_TERMAL | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | *** |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | *** |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExportEDMEASURETRIGGEROUTPUTTerminal | *** |
| NIDCPOWER_ATTREXPORTEDPULSETRIGGEROUTPUTTerminal | X |
| NIDCPOWER_ATTREXPORTEDSEQUENCEADVANCEDTRIGGEROUTPUTTerminal | *** |
| NIDCPOWER_ATTREXPORTEDSOURCETRIGGEROUTPUTTerminal | *** |
| NIDCPOWER_ATTREXPORTEDSTARTTRIGGEROUTPUTTerminal | *** |
| NIDCPOWER_ATTRFETCHBACKLOG | N/A |
| NIDCPOWER_ATTRGROUPCAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR Custom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGEAMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE buffersIZE | 600000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length | VI_true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...3 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT Change_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true4 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DG |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_KE |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCEIteration_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequence最后一次event_count | 250 ns |
| NIDCPOWER_ATTRSequence最后一次event_count_isFINITE | X |
| NIDCPOWER_ATTRSequence_COUNT | 1 |
| NIDCPOWER_ATTRSequence_COUNT_ISFinite | NIDCPOWER_VAL_TRIM |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUTBEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver Vendor | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 6 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR VOLTAGE LIMIT HIGH | 6 |
| NIDCPOWER_ATTR VOLTAGE LIMIT LOW | -6 |
| NIDCPOWER_ATTR VOLTAGE LIMIT RANGE | 6 |
| NIDCPOWER_ATTR VOLTAGE POLE ZERO RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 NIDCPOWER_VAL_NORMAL is the only valid value.

2 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

3 Only valid value.

4 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Rela• ted Topics:

# Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4147

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4147 |
| --- | --- |
| NIDCPOWER_ATTR ACTIVE Advanced SEQUENCE | "" |
| NIDCPOWER_ATTR ACTIVE Advanced SEQUENCE STEP | 0 |
| NIDCPOWER_ATTR ACTUAL POWER ALLOCATION | 0 |
| NIDCPOWER_ATTR APERTURE TIME | 0.01666666 s |
| NIDCPOWER_ATTR APERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTR APERTURE TIME UNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR AUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR AUTORANGE_APERTURE_TIME_MODE | NIDCPOWER_VAL_AP |
| NIDCPOWER_ATTR AUTORANGE_BEHAVIOR | NIDCPOWER_VAL_RB |
| NIDCPOWER_ATTR_autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | 0.5 s |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME.units | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_threshold_MODE | NIDCPOWER_VAL_TH |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the value setting of the NIDCPOW attribute. |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | Determined by the value setting of the NIDCPOW attribute. |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 3 A |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 0.001 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_autORANGE | NIDCPOWER_VAL_OPI |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.001 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.001 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 3 A |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NOI |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExportedSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR-exportED_START_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMOUNTURE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 100096 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 s |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | None |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | "" |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI:true2 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DG |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | 0.0 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VIFalse |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | NIDCPOWER_VAL_POS |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | 0 W |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTR_sequence_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_PULSE_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUT_TERMAL | "" |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_POLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_ISFinite | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | 50 ms |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver DESCRIPTION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DriverVASCTOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANSIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQENCY | Determined by the va setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the va setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 8 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 8 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMITAutorANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 8 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -8 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 8 V |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPOV attribute. |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4150/4151 -4150/4151

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4150 |
| --- | --- |
| NIDCPOWER_ATTR Active Advanced SEQUENCE | "" |
| NIDCPOWER_ATTR Active Advanced SEQUENCE STEP | 0 |
| NIDCPOWER_ATTR ACTUAL POWER ALLOCATION | N/A |
| NIDCPOWER_ATTR APERTURE TIME | 0.01666666 s |
| NIDCPOWER_ATTR APERTURE TIME AUTO MODE | X |
| NIDCPOWER_ATTR APERTURE TIME.units | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR AUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_autORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTR_autORANGE_BEHAVIOR | X |
| NIDCPOWER_ATTR_autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGES | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_threshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | X |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR Constant Resistance CURRENT LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance GAIN BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the value setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | Determined by the value setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 1 A |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 A |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 1 A |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NOI |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RISK |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTREXPORTED_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_PULSE_TRIGGER_OUTPUT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR-exportEDSequence_ADVANTIGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR-exportED_SOURCE_TRIGGERSOURCE_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR-exportED_START_TRIGGERSOURCE_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | X |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DCBIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORTResistance | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE BUFFER_SIZE | 1800130 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 s |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | "..."2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | 0.02 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| Attribute | PXIe-4150 |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | VI_FALSE2 |
| NIDCPOWER_ATTR_OVP_LIMIT | 0.02 |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | NIDCPOWER_VAL_POS |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hz |
| NIDCPOWER_ATTR_POWER_SOURCE | X |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| Attribute | PXle-4150 |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSEPOLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| Attribute | PXIe-4150 |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| Attribute | PXle-4150 |
| NIDCPOWER_ATTR READY FOR PULSE TRIGGER EVENT OUTPUT TERMINAL | X |
| NIDCPOWER_ATTR READY FOR PULSE TRIGGER EVENT PULSE POLARITY | X |
| NIDCPOWER_ATTR READY FOR PULSE TRIGGER EVENT PULSE_WIDTH | X |
| NIDCPOWER_ATTR RECORD COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR REQUESTED POWER ALLOCATION | N/A |
| NIDCPOWER_ATTR RESET AVERAGE BEFORE MEASUREMENT | X |
| NIDCPOWER_ATTR SAMPLES TO AVERAGE | 1 |
| NIDCPOWER_ATTR SELF CALIBRATION PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTR_SENSE | NIDCPOWER_VAL_LC |
| NIDCPOWER_ATTR SEQUENCE ADVANCE TRIGGER TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE EVENT OUTPUT BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR SEQUENCE ENGINE DONE EVENT OUTPUT TERMINAL | "" |
| Attribute | PXle-4150 |
| --- | --- |
| NIDCPOWER_ATTRSequence ENGINE DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequenceENGINE DONE_EVENT_PULSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTRSequenceENGINE DONE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVC |
| NIDCPOWER_ATTRSEQUENCE_iteration COMPLETE_EVENT_OUTPUT | NIDCPOWER_VAL_EVC |
| NIDCPOWER_ATTRSEQUENCE_iteration COMPLETE_EVENT_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRSEQUENCE_iteration COMPLETE_EVENT_POLARITY | NIDCPOWER_VAL_AQ |
| NIDCPOWER_ATTRSEQUENCE_iteration COMPLETE_EVENT_POLSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTRSEQUENCE_iteration COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVC |
| NIDCPOWER_ATTRSEQUENCE Loop_COUNT | 1 |
| NIDCPOWER_ATTRSEQUENCE Loop_COUNT_IS_FINAL | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSequence_STEP_DELAY_TIME_ENABLED | VI_FALSE2 |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUTBEHAVIOR | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL.Ac |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns2 |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EVAL |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SIE |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC_DRV_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | Determined by the va setting of the NIDCPO attribute. |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the value setting of the NIDCPOG attribute. |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0.01 V |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 6 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 6 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | 6 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -6 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 6 V |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | Determined by the value setting of the NIDCPOG attribute. |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannels orniDCPower_InitializeWithIndependentChannels function to open the session,otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4154

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4154 |
| --- | --- |
| NIDCPOWER_ATTR Active Advanced SEQUENCE | X |
| NIDCPOWER_ATTRActive_ADVANCEDSEQUENCE_STEP | X |
| NIDCPOWER_ATTRActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | X |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGEAPERTURE_TIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGEMAXIMUM_DELAY_AFTER_RANGE_CHANGES | X |
| NIDCPOWER_ATTRAUTORANGEMINIMUMAPERTURE_TIME | X |
| NIDCPOWER_ATTRAUTORANGEMINIMUMAPERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTRAUTORANGEMINIMUMCURRENT_RANGE | X |
| NIDCPOWER_ATTR_AUTORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR AutofORANGEThreshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_AUXILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | X |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constantResistance_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constantResistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant Resistance Level | X |
| NIDCPOWER_ATTR_constantResistance_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constantResistance_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_CURRENT_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_CURRENT_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | Channel 1:3 Channel |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -0.1 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | Channel 1:3 Channel |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_sequence_ADVANCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUTTerminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUTTerminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExportedSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR FetchBackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTRINSTRUMENT FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTRINSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTRIBUTE_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTRIBUTE_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTRIBUTE_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTRIBUTE_ISOLATION_STATE | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTRIBUTE_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTRIBUTE_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCRcustom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPENSHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORTCustom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE(amplitUTE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE_BUFFER_SIZE | 200000 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ""2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | NIDCPOWER_VAL_HI |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | 04 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | VI:true |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | X |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_INUse | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT:PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_before_MEASUREMENT | X |
| NIDCPOWER_ATTR_SAMPLE_TO_AVERAGE | 500 |
| NIDCPOWER_ATTR SELF_CALIBRATION_PERSISTENCE | X |
| NIDCPOWER_ATTR_SENSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTRSequence_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_sequenceENGINE_DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_sequenceENGINE动生成event Toggle INITIAL_STATE | X |
| NIDCPOWER_ATTR_sequence_iteration_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_sequence_iteration_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_sequence_iteration比率完成事件PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_sequence completionEventPULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT | 1 |
| NIDCPOWER_ATTRSEQUENCE_LOOP_COUNT_IS_FINE | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSEQUENCE_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SIE |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_models | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION FREQUENCY | X |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTOZONE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | Channel 0: -6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | Channel 0: 6 Channel |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | X |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

4 Channel 0.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4162/4163 -4162/4163

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4162 |
| --- | --- |
| NIDCPOWER_ATTR Active Advanced SEQUENCE | "" |
| NIDCPOWER_ATTRActive_ADVANCED_sequence_STEP | 0 |
| NIDCPOWER_ATTRActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 0.01666666s |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | NIDCPOWER_VAL_SE |
| NIDCPOWER_ATTRAUTORANGE | X |
| NIDCPOWER_ATTRAUTORANGE_APERTURE_TIME_MODE | X |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | X |
| NIDCPOWER_ATTRAUTORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | X |
| NIDCPOWER_ATTRAUTORANGE_MINIMUM_APERTURE_TIME | X |
| NIDCPOWER_ATTRAUTORANGE_MINIMUM_APERTURE_TIMEUNITS | X |
| NIDCPOWER_ATTRAUTORANGE_MINIMUM_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_autORANGEThreshold_MODE | X |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_AUXILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | VI_true |
| NIDCPOWER_ATTR_CACHE | VI_true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT LIMIT | X |
| NIDCPOWER_ATTR Constant Resistance Gain Bandwidth | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance Level RANGE | X |
| NIDCPOWER_ATTR Constant Resistance Pole ZERO_RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the va Response attribute. |
| NIDCPOWER_ATTR_CURRENT_GAIN_BANDWIDTH | Determined by the var Response attribute. |
| NIDCPOWER_ATTR_CURRENT_LEVEL | 0.0 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_AUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_CURRENT_LEVEL_FALLING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RANGE | 0.001 |
| NIDCPOWER_ATTR_CURRENT_LEVEL_RISING_SLEW_RATE | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT | 0.001 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_AUTOCHANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 0.001 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value of Response attribute. |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NOI |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_Sequence_ADVANCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExportED_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTREXPORTEDSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTREXPORTED_START_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTRIBUTE_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTRIBUTE_INTERCHANGE_CHECK | VI_FALSE |
| NIDCPOWER_ATTRIBUTE_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTRIBUTE_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTRIBUTE_ISOLATION_STATE | N/A |
| NIDCPOWER_ATTRIBUTE_LCR_AC_DITHER_ENABLED | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOAD_REACTANCE | X |
| NIDCPOWER_ATTRIBUTE_LCR_ACTUAL_LOADResistance | X |
| NIDCPOWER_ATTRIBUTE_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | X |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_CURRENT_AMOUNTURE | X |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR Custom_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LCR_FREQ | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_AUTO_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE | X |
| NIDCPOWER_ATTR_LCR_IMPENANCE_RANGE_SOURCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | X |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | X |
| NIDCPOWER_ATTR_LCR_MEASURED_LOADResistance | X |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | X |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | X |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | X |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT/custom_CABLE_COMPENSATION_ENABLED | X |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | X |
| NIDCPOWER_ATTR_LCR SHORT_RESISTANCE | X |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | X |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | X |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | X |
| NIDCPOWER_ATTR_LCR_VOLTAGEAMPLITUDE | X |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | X |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASUREBUFFER_SIZE | 100096 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT Behavior | X |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH_ISFINITE | VI_true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | NIDCPOWER_VAL_DI |
| NIDCPOWER_ATTR_MEASURE_when | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | "" |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DO |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | X |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hertz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_IN |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUTTerminal | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI:true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI:true |
| NIDCPOWER_ATTR_READY_FOR_PULSE_TRIGGER_EVENT_OUTPUT_TERMAL | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY_FOR_PULSE_TRIGGER_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_record_COERCIONS | VI=False |
| NIDCPOWER_ATTR_REQUESTED_POWER_ALLOCATION | X |
| NIDCPOWER_ATTR_RESET_AVERAGE_BEFORE_MEASUREMENT | X |
| NIDCPOWER_ATTRSAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTRSELF_CALIBRATION_PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTRSENSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTRSEQUENCE_ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLARITY | NIDCPOWER_VAL_AC |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_POLSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSEQUENCEENGINE_DONE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTRSEQUENCEIteration_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTRSequence_iteration COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_ACK |
| NIDCPOWER_ATTRSequence最后一次event_count | 250 ns |
| NIDCPOWER_ATTRSequence最后一次event_count_isFINITE | X |
| NIDCPOWER_ATTRSequence_COUNT | 1 |
| NIDCPOWER_ATTRSequence_COUNT_ISFinite | NIDCPOWER_VAL_TRUNK |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL_NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | X |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | X |
| NIDCPOWER_ATTR_SOURCE_DELAY | 0.01666666 s |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC_DRV_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver Vendor | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_MODELS | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | Determined by the value of Response attribute. |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the value of Response attribute. |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 24 |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_autORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR VOLTAGE LIMIT HIGH | X |
| NIDCPOWER_ATTR VOLTAGE LIMIT LOW | X |
| NIDCPOWER_ATTR VOLTAGE LIMIT RANGE | 24 |
| NIDCPOWER_ATTR VOLTAGE POLE ZERO RATIO | Determined by the value of Response attribute. |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if thesource mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

# Related Topics:

• Supported Attributes by Device

# Attributes Support es Supported by the P ed by the PXIe-4190

The following table lists the default values for each attribute you can configure for yourdevice. An X in a table cell indicates that the listed attribute is not supported for thatdevice. N/A in a table cell indicates that there is not a default value for the listedattribute because it is a read-only attribute.

| Attribute | PXle-4190 |
| --- | --- |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE | "" |
| NIDCPOWER_ATTRActiveADVANCEDSEQUENCE_STEP | 0 |
| NIDCPOWER_ATTRActual_POWER_ALLOCATION | X |
| NIDCPOWER_ATTRAPERTURE_TIME | 16.66e-3 |
| NIDCPOWER_ATTRAPERTURE_TIME_AUTO_MODE | X |
| NIDCPOWER_ATTRAPERTURE_TIMEUNITS | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTRAUTORANGE | NIDCPOWER_VAL_OP |
| NIDCPOWER_ATTRAUTORANGEAPERTURETIME_MODE | NIDCPOWER_VAL_AP |
| NIDCPOWER_ATTRAUTORANGEBEHAVIOR | NIDCPOWER_VAL_RB |
| NIDCPOWER_ATTR_autORANGE_MAXIMUM_DELAY_AFTER_RANGE_CHANGE | 5.0 s |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_APERTURE_TIME.units | NIDCPOWER_VAL_SEL |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_CURRENT_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_MINIMUM_VOLTAGE_RANGE | 0 |
| NIDCPOWER_ATTR_autORANGE_threshold_MODE | NIDCPOWER_VAL_TH |
| NIDCPOWER_ATTR_AUTO_ZERO | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTRAuxILIARY_POWER_SOURCE-available | N/A |
| NIDCPOWER_ATTR_CABLE_LENGTH | NIDCPOWER_VAL_NI |
| NIDCPOWER_ATTR_CACHE | VI:true |
| NIDCPOWER_ATTR_CHANNEL_COUNT | N/A |
| NIDCPOWER_ATTR_COMPLIANCE_LIMITSymmetry | NIDCPOWER_VAL_CO |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_MODE | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_OFFThreshold | X |
| NIDCPOWER_ATTR_CONDUCTION_VOLTAGE_ONThreshold | X |
| NIDCPOWER_ATTR_constant_POWER_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant_POWER_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant_POWER_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL | X |
| NIDCPOWER_ATTR_constant_POWER_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_constant_POWER_POLE_ZERO_RATIO | X |
| NIDCPOWER_ATTR_constantResistance_COMPENSATION_FREQ | X |
| NIDCPOWER_ATTR_constant Resistance CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_constant Resistance_GAIN_BANDWIDTH | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL | X |
| NIDCPOWER_ATTR Constant Resistance LEVEL RANGE | X |
| NIDCPOWER_ATTR Constant Resistance POLE ZERO RATIO | X |
| NIDCPOWER_ATTR CURRENT COMPENSATION FREQUENCY | Determined by the value of the NIDCPOWER_A |
| NIDCPOWER_ATTR CURRENT GAIN BANDWIDTH | Determined by the value of the NIDCPOWER_A |
| NIDCPOWER_ATTR CURRENT LEVEL | 0.0 |
| NIDCPOWER_ATTR CURRENT LEVEL AUTORANGE | NIDCPOWER_VAL_OF |
| NIDCPOWER_ATTR CURRENT LEVEL FALLING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LEVEL RANGE | 1.0e-3 |
| NIDCPOWER_ATTR CURRENT LEVEL RISING SLEW RATE | X |
| NIDCPOWER_ATTR CURRENT LIMIT | 1.0e-3 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_autORANGE | NIDCPOWER_VAL_O |
| NIDCPOWER_ATTR_CURRENT_LIMIT_HIGH | 1.e0-3 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_LOW | -1.0e-3 |
| NIDCPOWER_ATTR_CURRENT_LIMIT_RANGE | 1.0e-3 |
| NIDCPOWER_ATTR_CURRENT_POLE_ZERO_RATIO | Determined by the value of the NIDCPOWER_A |
| NIDCPOWER_ATTR_DC_NOISE_REJECTION | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_PULSE_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGESequence_ADVANCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_EDGE | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SHUTDOWN_TRIGGER_INPUT Terminal | X |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_SOURCE_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_EDGE | NIDCPOWER_VAL_RIS |
| NIDCPOWER_ATTR_DIGITAL_EDGE_START_TRIGGER_INPUT Terminal | "" |
| NIDCPOWER_ATTR_DRV_setup | N/A |
| NIDCPOWER_ATTRExported_MEASURE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_PULSE_TRIGGER_OUTPUTTerminal | X |
| NIDCPOWER_ATTRExportedSequence_ADVANCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTRExported_SOURCE_TRIGGER_OUTPUTTerminal | "" |
| NIDCPOWER_ATTR-exportED_START_TRIGGER_OUTPUT-terminal | "" |
| NIDCPOWER_ATTR Fetch_BackLOG | N/A |
| NIDCPOWER_ATTR_GROUP_CAPABILITIES | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_FIRMWARE_REVISION | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MANUFACTURER | N/A |
| NIDCPOWER_ATTR_INSTRUMENT_MODE | NIDCPOWER_VAL_SM |
| NIDCPOWER_ATTR_INSTRUMENT_MODEL | N/A |
| NIDCPOWER_ATTR_INTERCHANGE_CHECK | VIFalse |
| NIDCPOWER_ATTR_INTERLOCK_INPUT_OPEN | X |
| NIDCPOWER_ATTR_IO_RESOURCE Descriptor | N/A |
| NIDCPOWER_ATTR_ISOLATION_STATE | Isolated |
| NIDCPOWER_ATTR_LCR_AC_DITHER_ENABLED | VI_true |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_REACTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_ACTUAL_LOAD_RESISTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_AC_ELECTRICAL_CABLE_LENGTH_DELAY | Determined by the value of NIDCPOWER_ATTR_ON |
| NIDCPOWER_ATTR_LCR_AUTOMATIC_LEVEL_CONTROL | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_LCR_CURRENT_AMPLITUDE | 7.08e-9 A |
| NIDCPOWER_ATTR_LCR_CURRENT_RANGE | 700.0e-6 A |
| NIDCPOWER_ATTR_LCRCustom_MEASUREMENT_TIME | 0.01 s |
| NIDCPOWER_ATTR_LCR_DC_BIAS_AUTOOMATIC_LEVEL_CONTROL | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_LEVEL | 0.0 |
| NIDCPOWER_ATTR_LCR_DC_BIAS_CURRENT_RANGE | 1.0e-3 A |
| NIDCPOWER_ATTR_LCR_DC_BIAS_SOURCE | NIDCPOWER_VAL_DOC |
| NIDCPOWER_ATTR_LCR_DC_BIAS_TRANIENT_RESPONSE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_LEVEL | 0.0 |
| NIDCPOWER_ATTR_LCR_DC_BIAS_VOLTAGE_RANGE | 10 V |
| NIDCPOWER_ATTR_LCR_FREQ | 1000 |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_AUTO_RANGE | NIDCPOWER_VAL_AU |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE | 100.0 |
| NIDCPOWER_ATTR_LCR_IMPEDANCE_RANGE_SOURCE | NIDCPOWER_VAL_LO |
| NIDCPOWER_ATTR_LCR_LOAD_CAPACITANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_LOAD_COMPENSATION_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_LCR_LOAD_INDUCTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_LOADResistance | 0.0 |
| NIDCPOWER_ATTR_LCR_MEASURED_LOAD_REACTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_MEASURE_LOADResistance | 0.0 |
| NIDCPOWER_ATTR_LCR_MEASUREMENT_TIME | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_LCR_OPEN_COMPENSATION_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_LCR_OPEN_CONDUCTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR_OPEN SHORT_LOAD_COMPENSATION_DATA_SOURCE | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_LCR_OPEN_SUSCEPTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR SHORT_COMPENSATION_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_LCR SHORT/custom CABLE_COMPENSATION_ENABLED | VI:true |
| NIDCPOWER_ATTR_LCR SHORT_REACTANCE | 0.0 |
| NIDCPOWER_ATTR_LCR SHORTResistance | 0.0 |
| NIDCPOWER_ATTR_LCR_SOURCE_APERTURE_TIME | 50.0e-6s |
| NIDCPOWER_ATTR_LCR_SOURCE_DELAY_MODE | NIDCPOWER_VAL_VAL |
| Attribute | PXIe-4190 |
| NIDCPOWER_ATTR_LCR_STIMULUS_FUNCTION | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_LCR_VOLTAGE_AMPLITUDE | 7.08e-3 |
| NIDCPOWER_ATTR_LCR_VOLTAGE_RANGE | 7 V |
| NIDCPOWER_ATTR_LOGICAL_NAME | N/A |
| NIDCPOWER_ATTR_MEASURE BUFFER_SIZE | 60078 |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_DELAY | 0 s |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_MEASURE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_MEASURE_record_DELTA_TIME | N/A |
| Attribute | PXle-4190 |
| NIDCPOWER_ATTR_MEASURE_record_LENGTH | 1 |
| NIDCPOWER_ATTR_MEASURE_record_length_ISFINITE | VI:true |
| NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE | None |
| NIDCPOWER_ATTR_MEASURE WHEN | NIDCPOWER_VAL_ON |
| NIDCPOWER_ATTR_MERGED_channels | ...2 |
| NIDCPOWER_ATTR_OUTPUT_CAPACITANCE | X |
| NIDCPOWER_ATTR_OUTPUT_CONNECTED | VI:true |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_CHANGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_CURRENT_OVERRANGE_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_DELAY | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_ENABLED | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGES_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_CHANGES_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_OUTPUT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_OUTPUT_CUTOFF_VOLTAGE_MEASURE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_OUTPUT_ENABLED | VI_true3 |
| NIDCPOWER_ATTR_OUTPUT_FUNCTION | NIDCPOWER_VAL_DOC |
| NIDCPOWER_ATTR_OUTPUT_RESISTANCE | 0.0 |
| NIDCPOWER_ATTR_OUTPUT SHORTED | X |
| NIDCPOWER_ATTR_OVERRANGING_ENABLED | VI_FALSE |
| NIDCPOWER_ATTR_OVP_ENABLED | X |
| NIDCPOWER_ATTR_OVP_LIMIT | X |
| NIDCPOWER_ATTR_POWER_ALLOCATION_MODE | X |
| NIDCPOWER_ATTR_POWER_LINE_FREQ | 60 Hz |
| NIDCPOWER_ATTR_POWER_SOURCE | NIDCPOWER_VAL_AU |
| NIDCPOWER_ATTR_POWER_SOURCE_IN_USE | N/A |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_CURRENT_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_BIAS_DELAY | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_BIAS_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_OUTPUT terminals | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_POLARITY | X |
| NIDCPOWER_ATTR_PULSE_COMPLETE_EVENT_PULSE_WIDTH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_LOW | X |
| Attribute | PXIe-4190 |
| NIDCPOWER_ATTR_PULSE_CURRENT_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_PULSE_OFF_TIME | X |
| NIDCPOWER_ATTR_PULSE_ON_TIME | X |
| NIDCPOWER_ATTR_PULSE_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LEVEL_RANGE | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_HIGH | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_LOW | X |
| NIDCPOWER_ATTR_PULSE_VOLTAGE_LIMIT_RANGE | X |
| NIDCPOWER_ATTR_QUERY_INSTRUMENT_STATUS | VI_true |
| NIDCPOWER_ATTR_RANGE_CHECK | VI_true |
| Attribute | PXle-4190 |
| NIDCPOWER_ATTR READY FOR PULSE_TRIGGER_EVENT_OUTPUT-terminal | X |
| NIDCPOWER_ATTR READY FOR PULSE_TRIGGER_EVENT:PULSE_POLARITY | X |
| NIDCPOWER_ATTR READY FOR PULSE_TRIGGER_EVENT:PULSE_WIDTH | X |
| NIDCPOWER_ATTR RECORD_COERCIONS | VI_FALSE |
| NIDCPOWER_ATTR REQUESTED POWER ALLOCATION | X |
| NIDCPOWER_ATTR RESET AVERAGE BEFORE MEASUREMENT | X |
| NIDCPOWER_ATTR SAMPLES_TO_AVERAGE | 1 |
| NIDCPOWER_ATTR SELF CALIBRATION PERSISTENCE | NIDCPOWER_VAL_WI |
| NIDCPOWER_ATTR_SENSE | NIDCPOWER_VAL_RE |
| NIDCPOWER_ATTR SEQUENCE ADVANCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSequence ENGINE_DONE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR.SEQUENCEENGINE_DONE_EVENT_OUTPUT-terminal | "" |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceEngine_DONE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUTBEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_OUTPUTTERMINAL | "" |
| NIDCPOWER_ATTRSequenceIteration_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTRSequenceIterationCompleteEventPULSEWIDTH | 250 ns |
| NIDCPOWER_ATTRSequenceIterationCOMPLETEEventTOGGLE INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTRSequenceLoop_COUNT | 1 |
| NIDCPOWER_ATTRSequenceLoop_COUNT_ISFinite | NIDCPOWER_VAL_TR |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME | X |
| NIDCPOWER_ATTRSequence_STEP_DELTA_TIME_ENABLED | X |
| NIDCPOWER_ATTR SERIAL NUMBER | N/A |
| NIDCPOWER_ATTR_SHUTDOWN_TRIGGER_TYPE | X |
| NIDCPOWER_ATTR_SIMULATE | VI_FALSE |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT_BEHAVIOR | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_OUTPUT terminals | "" |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSEPOLARITY | NIDCPOWER_VAL_A |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_PULSE_WIDTH | 250 ns |
| NIDCPOWER_ATTR_SOURCE_COMPLETE_EVENT_TOGGLE_INITIAL_STATE | NIDCPOWER_VAL_EV |
| NIDCPOWER_ATTR_SOURCE_DELAY | 16.66e-3 s4 |
| NIDCPOWER_ATTR_SOURCE_MODE | NIDCPOWER_VAL_SII |
| NIDCPOWER_ATTR_SOURCE_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMajor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_CLASS_SPECMinor_VERSION | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_description | N/A |
| NIDCPOWER_ATTR_SPECIFIC Driver_prefix | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_REVISION | N/A |
| NIDCPOWER_ATTR_SPECIFIC DRIVER_VENDOR | N/A |
| NIDCPOWER_ATTR_START_TRIGGER_TYPE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTRSupported_INSTRUMENT_models | N/A |
| NIDCPOWER_ATTR_TRANIENT_RESPONSE | NIDCPOWER_VAL_NO |
| NIDCPOWER_ATTR_VOLTAGE_COMPENSATION_FREQ | Determined by the va of the NIDCPOWER_A |
| NIDCPOWER_ATTR_VOLTAGE_GAIN_BANDWIDTH | Determined by the va of the NIDCPOWER_A |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL | 0 |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_AUTORANGE | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_VOLTAGE_LEVEL_RANGE | 10.0 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT | 10.0 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_AUTORange | NIDCPOWER_VAL_VAL |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_HIGH | -10 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_LOW | -10 V |
| NIDCPOWER_ATTR_VOLTAGE_LIMIT_RANGE | 10.0 |
| NIDCPOWER_ATTR_VOLTAGE_POLE_ZERO_RATIO | Determined by the value of the NIDCPOWER_VAL |

# Note

Not all footnotes apply; refer only to those footnotes for which a numberappears in the table

1 Default depends on the setting of the NIDCPOWER_ATTR_SOURCE_MODE attribute.The default is NIDCPOWER_VAL_ON_DEMAND if the source mode is set to single point,or the default is NIDCPOWER_VAL_AUTOMATICALLY_AFTER_SOURCE_COMPLETE if the

source mode is set to sequence.

2 Only valid value.

3 The default value is VI_TRUE if you use the niDCPower_InitializeWithChannelsfunction to open the session, otherwise the default value is VI_FALSE.

4 Software timed.

# Related Topics:

• Supported Attributes by Device

# Triggers

# Measure Trigger

# NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TR

Specifies whether to configure the Measure trigger to assert on the rising or fallingedge.

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_EDGE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150035 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_RISING | 1016(0x3f8) | Asserts the trigger on the rising edge of the digital signal. |
| NIDCPOWER_VAL_FALLING | 1017(0x3f9) | Asserts the trigger on the falling edge of the digital signal. |

Default Value:NIDCPOWER_VAL_RISING

High-Level Functions:

• niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels

# NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TR

# Syntax

NIDCPOWER_ATTR_DIGITAL_EDGE_MEASURE_TRIGGER_INPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150036 | ViString | Read/Write | Channels |

# Remarks

Specifies the input terminal for the Measure trigger. This attribute is used only whenthe NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE attribute is set to

NIDCPOWER_VAL_DIGITAL_EDGE.

You can specify any valid input terminal for this attribute, and the driver will create aroute between it and the Measure trigger terminal at Commit. Valid terminals are listedin Measurement & Automation Explorer under the Device Routes tab. For thePXIe-4147, PXIe-4162, and PXIe-4163, refer to the Signal Routing topic for theinstrument to determine which routes are available (this information is not availableon a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal. The input terminal can also be a terminalfrom another instrument. For example, you can set the input terminal on Dev1 to be/Dev2/Engine0/SourceCompleteEvent, where Engine0 is channel 0.

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels

NIDCPOWER_ATTR_EXPORTED_MEASURE_TRIGGER_OUTPUT_TERMINAL

Specifies the output terminal for exporting the Measure trigger.

# Syntax

NIDCPOWER_ATTR_EXPORTED_MEASURE_TRIGGER_OUTPUT_TERMINAL

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150037 | ViString | Read/Write | Channels |

# Remarks

Refer to the Device Routes tab in Measurement & Automation Explorer for a list of theterminals available on your device. For the PXIe-4147, PXIe-4162, and PXIe-4163, referto the Signal Routing topic for the instrument to determine which routes are available(this information is not available on a Device Routes tab in MAX).

Specify the output terminal using the form /Dev1/PXI_Trig0, where Dev1 is theinstrument and PXI_Trig0 is the terminal.

initialize the session using theniDCPower_InitializeWithIndependentChannels function.

# High-Level Functions:

• niDCPower_ExportSignalWithChannels

NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE

Specifies the behavior of the Measure trigger.

# Syntax

NIDCPOWER_ATTR_MEASURE_TRIGGER_TYPE

| Numeric Value | Data Type | Access | Applies To |
| --- | --- | --- | --- |
| 1150034 | VInt32 | Read/Write | Channels |

# Remarks

Defined Values:

| Name | Value | Description |
| --- | --- | --- |
| NIDCPOWER_VAL_NONE | 1012(0x3f4) | No trigger is configured. |
| NIDCPOWER_VAL_DIGITAL_EDGE | 1014(0x3f6) | The data operation starts when a digital edge is detected. |
| NIDCPOWER_VAL.Software_EDGE | 1015(0x3f7) | The data operation starts when a software trigger occurs. |

# Default Value:NIDCPOWER_VAL_DIGITAL_EDGE

# High-Level Functions:

• niDCPower_ConfigureDigitalEdgeMeasureTriggerWithChannels

• niDCPower_ConfigureSoftwareEdgeMeasureTriggerWithChannels

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
