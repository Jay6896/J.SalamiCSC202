import React from 'react';
import { FlatList, View, Text } from 'react-native';

const profileInfo = [
    {key:"name", label:"Name", value:"John Doe"},
    {key:"age", label:"Age", value: 30},
    {key:"location", label:"Location", value:"Lagos"},
    {key:"dob", label:"Date of Birth", value:"January 11, 2008"},
    {key:"marital", label:"Marital Status", value:"not married"},
    {key:"nation", label:"Nationality", value:"Nigerian"},
    {key:"stack", label:"Favorite Tech", value:"React, React Native, Expo, Prisma"},
]


export default function Profile() {
    return(
            <View style={{ flex: 1 }}>
        <FlatList
            data={profileInfo}
            keyExtractor={(item) => item.key}
            contentContainerStyle = {{paddingBottom: 25}}
            renderItem = {({item}) => (
                <View style={{
                    padding: 10,
                    borderBottomWidth: 1,
                                        borderBottomColor: "#ccc"}}>
                        <Text style={{fontSize: 18, fontWeight: "bold"}}>
                            {item.label}
                        </Text>
                        <Text style= {{fontSize: 16}}>{String(item.value)}</Text>
                    </View>
            )}
        >
        </FlatList>
      </View>
    );
  }
