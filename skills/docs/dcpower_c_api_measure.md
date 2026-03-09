# NI-DCPower C API — Measure

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

