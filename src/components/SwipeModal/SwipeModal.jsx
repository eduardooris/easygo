import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '../Text/Text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {DesignSystem} from '../../util/Style/DesignSystem';
const SwipeModalWithText = ({
  visible,
  closeModal,
  titleHeader,
  height,
  icon,
  background = DesignSystem.colors.primary,
  children,
  borderColor = DesignSystem.colors.primary,
}) => {
  return (
    <SwipeUpDownModal
      modalVisible={visible}
      ContentModal={
        <View
          style={[
            styles.containerContent,
            {marginTop: `${height}%`, backgroundColor: borderColor},
          ]}>
          <View style={[styles.container, {backgroundColor: background}]}>
            <TouchableOpacity
              onPress={() => closeModal(false)}
              style={styles.containerHeader}>
              {icon && (
                <View>
                  <MaterialIcon
                    allowFontScaling={false}
                    name={icon}
                    color={DesignSystem.colors.disabled}
                    size={DesignSystem.icons.small}
                  />
                </View>
              )}
              <View>
                <Text typography="medium">{titleHeader}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.containerChildren}>{children}</View>
          </View>
        </View>
      }
      onClose={() => {
        closeModal(false);
      }}
    />
  );
};

export const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    backgroundColor: DesignSystem.colors.white,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: cssGlobal.grayLight,
    borderRadius: 30,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  containerChildren: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default SwipeModalWithText;
