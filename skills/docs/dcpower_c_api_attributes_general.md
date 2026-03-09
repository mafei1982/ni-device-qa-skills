# NI-DCPower C API — General Attributes & Events

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

