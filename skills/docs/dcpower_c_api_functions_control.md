# NI-DCPower C API — Functions: Control

# Control

# Syntax

ViStatus _VI_FUNC niDCPower_Abort(ViSession vi)

# Remarks

Transitions the NI-DCPower session from the Running state to the Uncommitted state.If a sequence is running, it is stopped. Any configuration functions called after thisfunction are not applied until the niDCPower_Initiate function is called. If poweroutput is enabled when you call the niDCPower_Abort function, the channels remainin their current state and continue providing power.

Use the niDCPower_ConfigureOutputEnabled function to disable power output on aper channel basis. Use the niDCPower_reset function to disable output on allchannels.

Refer to the Programming States topic in the NI DC Power Supplies and SMUs Help for information about the specific Nl-DCPower software states.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_AbortWithChannels

Transitions the specified channel(s) from the Running state to the Uncommitted state.If a sequence is running, it is stopped.

# Syntax

ViStatus _VI_FUNC niDCPower_AbortWithChannels(ViSession vi,ViConstString channelName)

# Remarks

Any configuration functions called after this function are not applied until theniDCPower_InitiateWithChannels function is called. If power output is enabled whenyou call this function, the channel(s) remain in their current state and continueproviding power.

Use the niDCPower_ConfigureOutputEnabled function or theniDCPower_ResetWithChannels function to disable power output on a per-channelbasis.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass ''' for this control, all channels in the session are used. |

# niDCPower_Commit

This function is deprecated. Use niDCPower_CommitWithChannels instead.

# Syntax

ViStatus _VI_FUNC niDCPower_Commit(ViSession vi)

# Remarks

Applies previously configured settings to the device. Calling this function moves theNI-DCPower session from the Uncommitted state into the Committed state. Aftercalling this function, modifying any attribute reverts the NI-DCPower session to theUncommitted state. Use the niDCPower_Initiate function to transition to the Runningstate. Refer to the Programming States topic in the NI DC Power Supplies and SMUs Help for details about the specific Nl-DCPower software states.

# Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_CommitWithChannels

Applies previously configured settings to the specified channel(s). Calling this functionmoves the channel(s) from the Uncommitted state into the Committed state. Aftercalling this function, modifying any attribute reverts the channel(s) to theUncommitted state. Use the niDCPower_InitiateWithChannels function to transition tothe Running state.

# Syntax

ViStatus _VI_FUNC niDCPower_CommitWithChannels(ViSessionvi, ViConstString channelName)

# Remarks

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0,2,and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Syntax

ViStatus _VI_FUNC niDCPower_Initiate(ViSession vi)

# Remarks

Starts generation or acquisition, causing the NI-DCPower session to leave theUncommitted state or Committed state and enter the Running state. To return to theUncommitted state call the niDCPower_Abort function. Refer to the ProgrammingStates topic in the NI DC Power Supplies and SMUs Help for information aboutthe specific NI-DCPower software states.

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |

# niDCPower_InitiateWithChannels

Starts generation or acquisition, causing the specified channel(s) to leave theUncommitted state or Committed state and enter the Running state. To return to theUncommitted state call the niDCPower_AbortWithChannels function.

# Syntax

ViStatus _VI_FUNC niDCPower_InitiateWithChannels(ViSessionvi, ViConstString channelName)

# Remarks

Related Topics:

Programming States

# Parameters

| Name | Direction | Type | Description |
| --- | --- | --- | --- |
| vi | [in] | ViSession | Identifies a particular instrument session. vi is obtained from the niDCPower_InitializeWithIndependentChannels function. |
| channelName | [in] | ViConstString | Specifies the channel(s) to use. Specify the channel(s) using the form PXI1Slot3/0,PXI1Slot3/2-3,PXI1Slot4/2-3 or PXI1Slot3/0,PXI1Slot3/2:3,PXI1Slot4/2:3, where PXI1Slot3 and PXI1Slot4 are instrument resource names and 0, 2, and 3 are channels. If you pass "" for this control, all channels in the session are used. |

# Initialize/Close

# niDCPower_close
