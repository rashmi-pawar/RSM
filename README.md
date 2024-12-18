# rsm_mobile_app

####RSM App Setup
1) Clone source code from bitbucket
2) Install dependency packages via “npm install” command
3) Add platform via “ionic cordova platform add ios” command(In Mac OS)
    - Changes in Plugin.xml
    ```
    <config>
         <source url="https://github.com/CocoaPods/Specs.git"/>
    </config>
    ```
    With
    ```
    <config>
        <source url="https://cdn.cocoapods.org/>
    </config>
    ```
 4) Download master branch code from “https://github.com/apache/cordova-plugin-inappbrowser”
    
    - Go to plugins -> cordova-plugin-inappbrowser folder. Replace files and folder with downloaded code
  
 5) Run command “ionic cordova build ios” or  “ionic cordova prepare ios”
 6) Go to platform -> ios -> Open “RSM.xcworkspace” in xcode and build project
 7) Paste given android folder to “platform”
 8) Run command “ionic cordova prepare android”
 9) Open Android Studio and import project from -> platform -> android
10) Android Studio -> Build 
