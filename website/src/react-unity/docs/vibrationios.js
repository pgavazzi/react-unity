/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 30,
      "source": "vibrate: function() \{\\n    invariant(\\n      arguments[0] === undefined,\\n      'Vibration patterns not supported.'\\n    );\\n    RCTVibration.vibrate();\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "vibrate"
    }
  ],
  "properties": [],
  "superClass": null,
  "type": "api",
  "line": 29,
  "name": "VibrationIOS",
  "docblock": "/**\\n * The Vibration API is exposed at \`VibrationIOS.vibrate()\`. On iOS, calling this\\n * function will trigger a one second vibration. The vibration is asynchronous\\n * so this method will return immediately.\\n *\\n * There will be no effect on devices that do not support Vibration, eg. the iOS\\n * simulator.\\n *\\n * Vibration patterns are currently unsupported.\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "invariant"
    }
  ],
  "filepath": "Libraries/Vibration/VibrationIOS.ios.js",
  "componentName": "VibrationIOS",
  "example": \{
    "path": "Examples/UIExplorer/VibrationIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  View,\\n  Text,\\n  TouchableHighlight,\\n  VibrationIOS\\n} = React;\\n\\nexports.framework = 'React';\\nexports.title = 'VibrationIOS';\\nexports.description = 'Vibration API for iOS';\\nexports.examples = [\{\\n  title: 'VibrationIOS.vibrate()',\\n  render() \{\\n    return (\\n      <TouchableHighlight\\n        style=\{styles.wrapper}\\n        onPress=\{() => VibrationIOS.vibrate()}>\\n        <View style=\{styles.button}>\\n          <Text>Vibrate</Text>\\n        </View>\\n      </TouchableHighlight>\\n    );\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"vibrationios","title":"VibrationIOS","layout":"autodocs","category":"apis","permalink":"docs/vibrationios.html","next":"flexbox"}}, content);
  }
});
Post.content = content;
module.exports = Post;
