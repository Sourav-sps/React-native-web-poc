//import liraries
import React, {  useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform,Image, ScrollView, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router';
import { fs, hp, wp } from '../../../utils/theme'



const HomeHeader = ({ }) => {
    const navigation = useNavigation()
    return <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={32} color="#000000" />
        </TouchableOpacity>
        <TextInput
        placeholder='Search employee or action'
        placeholderTextColor={"#909191"}
        style={styles.searchBar}
        />
        {/* <View style={styles.searchBar}></View> */}
    </View>
}

const PostCard = () => {
    return <View style={styles.postCardContainer}>
        <View style={styles.avatarContainer}>
            <View style={styles.avatar}></View>
            <View style={{ marginLeft: '3%' }}>
                <Text style={styles.text}>HR <Text style={[styles.text, { color: '#909191' }]}>Created a post</Text></Text>
                <Text style={[styles.text, { marginTop: '1%', color: '#909191' }]}>5 days ago</Text>
            </View>
        </View>
        <View style={{
            flex: 1,
            marginVertical: hp(1)
        }}>
            <Text style={[styles.text,]}>
                Wishing a very happy birthday to Justin Bhamra and Avac Kumar 🎂💐 May all your wishes come true, and may the year ahead be filled with exciting adventures, personal growth, and an abundance of love and success. Keep shining your lights and making the world a better place!🎉
                💐</Text>

            <View style={{ marginTop:hp(0.5), width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                   resizeMode='cover'
                    source={require('../../../../assets/60111.jpg')}
                    style={{ height: hp(30), width: hp(30) }}
                />
            </View>
        </View>
    </View>
}

const RoundIcon = ({ title, value }) => {
    return <View style={{ justifyContent: 'center', alignItems: 'center' }}><View style={styles.roundIcon}><Text style={styles.text}>{value}</Text></View>
        <Text style={[styles.text, { marginTop: hp(0.5) }]}>{title}</Text>
    </View>
}

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState()
    const [isLogin, setisLogin] = useState(false)
    useEffect(() => {
        setInterval(() => {
            const d2 = new Date()
            const curretnDate = d2.getHours() + ":" + d2.getMinutes() + ':' + d2.getSeconds();

            setCurrentDate(curretnDate)
        }, 1000)
    }, [])
    return <View>
        <Text style={[styles.text, { fontSize: fs(4.5), marginTop: hp(1) }]}>Current Date</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.text, { fontSize: fs(4), marginVertical: hp(0.5) }]}>{`${currentDate || ''}`}</Text>
            <TouchableOpacity onPress={() => setisLogin((prev) => !prev)} style={[{ alignSelf: 'flex-start', padding: hp(1), borderRadius: hp(0.5), backgroundColor: isLogin ? 'red' : '#076cfa' }]}>
                <Text style={styles.text}>{isLogin ? 'Clock out' : 'Clock in'}</Text>
            </TouchableOpacity>
        </View>
    </View>
}


const ClockTimer = () => {


    const d = new Date()
    const datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

    return (
        <View style={[styles.quickAction, { backgroundColor: '#f5a6e5' }]}>
            <Text style={[styles.text, { fontSize: fs(3.5) }]}>{`Time Today - ${datestring}`}</Text>
            <CurrentDate />
        </View>
    )
}


// create a component
const Home = () => {
    const [tabActive, setTabActive] = useState(0)
    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.content}>

                    <View style={styles.leftContent}>
                        <Text style={styles.text}>Quick Access</Text>
                        <View style={styles.quickAction}>
                            <Text style={styles.text}>Inbox</Text>
                            <View style={{ marginVertical: hp(2), alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.text}>1 task is  waiting for your approval</Text>
                                <TouchableOpacity style={{ backgroundColor: '#076cfa', padding: wp(1), marginHorizontal: '2%' }}>
                                    <Text style={styles.text}>Action</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.quickAction, { backgroundColor: '#68ccf2' }]}>
                            <Text>Holiday</Text>

                            <View style={{ marginVertical: hp(2), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='chevron-left' size={hp(2.5)} color={'#ffffff'} />
                                    <View>
                                        <Text style={[styles.text, { fontSize: fs(3.5), marginLeft: wp(2) }]}>Independance day</Text>
                                        <Text style={[styles.text, { marginLeft: wp(2), fontSize: fs(2.8), marginTop: hp(0.5) }]}>15 Tue, 2023</Text>
                                    </View>
                                </View>
                                <MaterialIcons name='chevron-right' size={hp(2.5)} color={'#ffffff'} />
                            </View>
                        </View>


                        <ClockTimer />

                        <View style={styles.quickAction}>
                            <Text style={styles.text}>Leave Balance</Text>
                            <View style={styles.roundIconContainer}>
                                <RoundIcon value={'10'} title="Unpaid leave" />
                                <RoundIcon value={'12'} title="SP_leave" />
                                <RoundIcon value={'5'} title="Paid leave" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.rightContent}>
                        <View style={styles.tab}>
                            <TouchableOpacity onPress={() => setTabActive(0)} style={{ padding: wp(2), borderWidth: 2, height: '100%', borderColor: tabActive === 0 ? 'blue' : 'transparent' }}>
                                <Text style={styles.text}>Organization</Text>
                            </TouchableOpacity>
                            <View style={{ width: 5 }} />
                            <TouchableOpacity onPress={() => setTabActive(1)} style={{ padding: wp(2), borderWidth: 2, borderColor: tabActive === 1 ? 'blue' : 'transparent' }}>
                                <Text style={styles.text}>MSS</Text>
                            </TouchableOpacity>
                        </View>

                        <PostCard />
                        <PostCard />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        height: '8.5%',
        alignItems: 'center',
        backgroundColor: '#ADF5FF',
    },
    searchBar: {
        backgroundColor:'#323333',
        paddingHorizontal:'3%',
        height: '80%',
        marginHorizontal: '3%',
        width: Platform.OS === 'web' ? '60%' : '80%',
        borderRadius: 30
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '3%',
        backgroundColor: '#0075A2'
    },
    text: {
        fontSize: fs(3),
        color: '#ffffff',
    },
    quickAction: {
        backgroundColor: '#01445e',
        marginVertical: hp(2),
        width: '100%',
        padding: wp(2)

    },
    leftContent: { flexGrow: Platform.OS === 'web' ? 0.24 : 1 },
    rightContent: {
        flex: 0,
        flexGrow: 1,
        marginLeft: Platform.OS === 'web' ? '3%' : 0,

    },
    tab: {
        alignSelf: 'flex-start',
        backgroundColor: '#01445e',
        flexDirection: 'row'
    },
    roundIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: hp(1)
    },
    roundIcon: {
        height: hp(9),
        width: hp(9),
        borderRadius: hp(5),
        borderWidth: hp(0.8),
        borderColor: '#ADF5FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: hp(5),
        height: hp(5),
        borderRadius: hp(3),
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    postCardContainer: {

        marginVertical: '2%',
        backgroundColor: '#01445e',
        padding: '3%'
    },
    avatarContainer: {
        flexDirection: 'row'
    }

});

//make this component available to the app
export default Home;
