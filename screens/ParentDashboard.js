import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../myAssets/theme';

import ParentViewSpendingOverview from '../components/ParentViewSpendingOverview';
import ParentViewChildrenList from '../components/ParentViewChildrenList';

export default function ParentDashboard({
  navigation,
  kids,
  totalSpent,
  totalSpentThisWeek,
  thisWeeksTrans,
  onRefresh,
  isRefreshing,
}) {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={colors.white}
          />
        }>
        <StatusBar barStyle="light-content" />
        <View style={[styles.container, styles.header]}>
          <View>
            <Text style={styles.textLarge}>Children</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddChild')}>
            <View style={styles.plusBorder}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.home}>
          <ParentViewChildrenList
            navigation={navigation}
            kids={kids}
            totalSpent={totalSpent}
          />
        </View>
        <View>
          <Text style={styles.textLarge}>Overview</Text>
        </View>
        <View>
          <Text style={styles.text}>Spending</Text>
        </View>
        <View>
          <ParentViewSpendingOverview
            totalSpentThisWeek={totalSpentThisWeek}
            kids={kids}
            thisWeeksTrans={thisWeeksTrans}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.toggleBtn}>
            <Text style={styles.text}>Child&apos;s View</Text>
            <Switch
              style={styles.toggleBtn}
              trackColor={{ false: colors.purple, true: colors.plum }}
              onValueChange={() => navigation.navigate('ChildDashboard')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginRight: 20,
  },
  toggleBtn: {
    margin: 10,
  },
  plusBorder: {
    borderRadius: 50,
    backgroundColor: colors.plum,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  text: {
    color: colors.white,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 19,
  },
  bg: {
    backgroundColor: colors.black,
    flex: 1,
  },
  textLarge: {
    color: colors.white,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 32,
  },
  plus: {
    color: colors.white,
    fontSize: 32,
  },
});