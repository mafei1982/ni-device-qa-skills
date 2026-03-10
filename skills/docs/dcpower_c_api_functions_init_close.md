# NI-DCPower C API — Functions: Initialize/Close


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

