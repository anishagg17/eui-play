const codes = [
  ` <div>  
    <EuiFlexGroup gutterSize="s" alignItems="center">    
      <EuiFlexItem grow={false}>    
          <EuiButton onClick={() => window.alert('Button clicked')}> 
                   Primary    
          </EuiButton>  
      </EuiFlexItem>   
      <EuiFlexItem grow={false}>      
          <EuiButton fill onClick={() => window.alert('Button clicked')}>   
               Filled    
          </EuiButton> 
      </EuiFlexItem>   
      <EuiFlexItem grow={false}>     
            <EuiButton size="s" onClick={() => window.alert('Button clicked')}>
                Small   
            </EuiButton>  
      </EuiFlexItem>   
        
    </EuiFlexGroup> 
    <EuiFlexGroup gutterSize="s" alignItems="center">   
       <EuiFlexItem grow={false}> 
             <EuiButton    color="secondary"      onClick={() => window.alert('Button clicked')}> 
                  Secondary  
              </EuiButton>  
        </EuiFlexItem>   
        <EuiFlexItem grow={false}>    
            <EuiButton color="secondary"     fill onClick={() => window.alert('Button clicked')}>
               Filled       
            </EuiButton>    
        </EuiFlexItem>    
        <EuiFlexItem grow={false}>    
            <EuiButton color="secondary" size="s" onClick={() => window.alert('Button clicked')}>
                 Small      
            </EuiButton>      
        </EuiFlexItem>   
       
      </EuiFlexGroup>  
      <EuiFlexGroup gutterSize="s" alignItems="center">    
        <EuiFlexItem grow={false}>       
            <EuiButton          color="warning"          onClick={() => window.alert('Button clicked')}>       
              Warning     
            </EuiButton>   
        </EuiFlexItem>   
        <EuiFlexItem grow={false}>    
            <EuiButton          color="warning"          fill          onClick={() => window.alert('Button clicked')}>       
               Filled    
            </EuiButton>    
        </EuiFlexItem>  
        <EuiFlexItem grow={false}>    
            <EuiButton          color="warning"          size="s"          onClick={() => window.alert('Button clicked')}>       
               Small     
            </EuiButton>   
        </EuiFlexItem>     
       
      </EuiFlexGroup>   
      <EuiFlexGroup gutterSize="s" alignItems="center">   
         <EuiFlexItem grow={false}>      
            <EuiButton          color="danger"          onClick={() => window.alert('Button clicked')}>       
              Danger      
            </EuiButton>  
          </EuiFlexItem>     
          <EuiFlexItem grow={false}>       
            <EuiButton          color="danger"          fill          onClick={() => window.alert('Button clicked')}>         
               Filled        
            </EuiButton>     
          </EuiFlexItem>     
          <EuiFlexItem grow={false}>      
            <EuiButton          color="danger"          size="s"          onClick={() => window.alert('Button clicked')}>       
               Small      
            </EuiButton>      
          </EuiFlexItem>     
        </EuiFlexGroup>   
        <EuiFlexGroup gutterSize="s" alignItems="center">  
            <EuiFlexItem grow={false}>     
              <EuiButton isDisabled onClick={() => window.alert('Button clicked')}>
                    Disabled   
              </EuiButton>   
            </EuiFlexItem>   
            <EuiFlexItem grow={false}> 
              <EuiButton          isDisabled          fill          onClick={() => window.alert('Button clicked')}>
                  Filled      
              </EuiButton>    
            </EuiFlexItem>   
            <EuiFlexItem grow={false}>     
              <EuiButton          isDisabled          size="s"          onClick={() => window.alert('Button clicked')}>       
                 Small       
              </EuiButton>     
            </EuiFlexItem>   
          </EuiFlexGroup>  
        </div>`,
  "<div><EuiButton onClick={() => window.alert('Button clicked')}> Primary </EuiButton></div>",
  "<div><CircularProgress />\n<CircularProgress color='secondary' /></div>",
  "class Popover extends React.Component {\n    constructor(props) {\n      super(props);\n  \n      this.state = {\n        isPopoverOpen: false,\n      };\n    }\n  \n    onButtonClick() {\n      this.setState({\n        isPopoverOpen: !this.state.isPopoverOpen,\n      });\n    }\n  \n    closePopover() {\n      this.setState({\n        isPopoverOpen: false,\n      });\n    }\n  \n    render() {\n      const button = (\n        <EuiButton          iconType='arrowDown'          iconSide='right'          onClick={this.onButtonClick.bind(this)}>\n          Show popover\n       </EuiButton>\n      );\n        return (\n     <div>   <EuiPopover\n          id='trapFocus'\n          ownFocus\n          button={button}\n          isOpen={this.state.isPopoverOpen}\n          closePopover={this.closePopover.bind(this)}\n          initialFocus='[id=asdf2]'>\n          <EuiFormRow\n            label='Generate a public snapshot?'\n            id='asdf'\n            hasChildLabel={false}>\n            <EuiSwitch\n              name='switch'\n              label='Snapshot data'\n              checked={true}\n              onChange={() => {}}\n \n \n        />\n          </EuiFormRow>\n \n          <EuiFormRow label='Include the following in the embed' id='asdf2'>\n            <EuiSwitch\n              name='switch' \n            label='Current time range'\n              checked={true}\n             onChange={() => {}}\n            />\n          </EuiFormRow>\n  \n         <EuiSpacer />\n  \n         <EuiButton fill>Copy IFRAME code</EuiButton>\n        </EuiPopover>\n    </div>  );\n    }\n  }",
  '<div>\n <EuiBadge color="hollow" iconType="cross" iconSide="right">\n   Hollow\n </EuiBadge>\n <EuiBadge iconType="check">Default</EuiBadge>\n </div>',
];
export default codes;
