import React from "react"
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
} from "native-base"
import { colors } from "@Utils/Color/colors"
export const Example = () => {
    let [service, setService] = React.useState("")
    return (
        // <VStack alignItems="center" space={1}>
        <Select
            selectedValue={service}
            minWidth="90%"
            borderColor={colors.secondary}
            borderWidth="2"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
        >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
        </Select>
        // </VStack>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
        </NativeBaseProvider>
    )
}
