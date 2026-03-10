# NI-DCPower C API — Attributes: Device Specific

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

