# NI-DCPower C API — Attributes: LCR

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

