# NI-DCPower C API — Attributes: Advanced

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

