# NI-DCPower C API — Attributes: Inherent IVI

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

