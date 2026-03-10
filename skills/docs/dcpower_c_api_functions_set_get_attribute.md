# NI-DCPower C API — Functions: Set/Get Attribute

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
