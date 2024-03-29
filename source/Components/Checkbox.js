import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';
const Checkbox = ({navigation, route}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {color, icon, title} = route.params;

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          backgroundColor: color,
          height: 60,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}>
          {title}
        </Text>
        <FontAwesomeIcon icon={icon} size={30}></FontAwesomeIcon>
      </View>
      <View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text>{toggleCheckBox ? 'Checked' : 'Unchecked'}</Text>
      </View>
    </View>
  );
};

export default Checkbox;
