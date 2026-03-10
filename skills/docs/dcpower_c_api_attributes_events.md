# NI-DCPower C API — Attributes: Events

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

