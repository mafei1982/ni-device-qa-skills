# NI-DCPower C API — Functions: Utility


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
