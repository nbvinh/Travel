import React, { useState } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
    const modalProfile = useSelector(store => store.people.modalProfile)
    const dispatch = useDispatch()
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalProfile}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <View style={styles.content2}>
                            <Text />
                            <Text />
                            <Text />
                            <Text style={styles.text1}>Chính sách bảo mật</Text>
                            <Text />
                            <Text />
                            <TouchableOpacity onPress={() => { dispatch({ type: 'MODALPROFILE' }) }}>
                                <Image
                                    source={require('../../img/X.png')}
                                    style={{ width: 18, height: 18 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Text style={styles.text2}> Chính sách Bảo mật ("sau đây gọi tắt là Chính Sách") quy định cách OKGO (sau đây gọi là "Chúng tôi") thu thập, sử dụng và chia sẻ thông tin về khách hàng khi khách hàng truy cập và tương tác với Trang Web (từ máy tính, thiết bị di động) và ứng dụng di động của Chúng tôi (sau đây gọi chung là "Trang Web") hoặc các phương thức khác có liên kết đến Trang Web của Chúng tôi (như liên hệ nhóm chăm sóc khách hàng qua chat hoặc email).</Text>
                            <Text style={styles.text2}> Tùy từng thời điểm, OKGO có thể sửa đổi Chính sách Bảo mật để tương thích với những thay đổi về pháp luật, các thực tiễn thu thập và sử dụng Thông tin Cá nhân của Chúng tôi, các tính năng của Trang Web, hoặc những tiến bộ về công nghệ. Nếu Chúng tôi thực hiện các sửa đổi mà làm thay đổi cách thức Chúng tôi thu thập hoặc sử dụng Thông tin Cá nhân của Người dùng, thì những sửa đổi đó sẽ được đăng trong Chính sách Bảo mật này và ngày có hiệu lực sẽ được nêu ở ngay phần đầu trang. Vì vậy, Người dùng nên xem một cách định kỳ Chính sách Bảo mật này để được cập nhật về các chính sách và thực tiễn hiện hành của Chúng tôi.</Text>
                            <Text style={styles.text3}>1. Thông tin chúng tôi thu thập</Text>
                            <Text style={styles.text2}>"Thông tin Cá nhân" có thể được hiểu là dữ liệu, cho dù là đúng hoặc không đúng, về một cá nhân có thể được nhận dạng từ dữ liệu đó, hoặc từ dữ liệu và các thông tin khác mà OKGO có được hoặc có quyền truy cập. Nói cách khác là thông tin về bạn, bao gồm nhưng không giới hạn tên, quốc tịch, địa chỉ, số điện thoại, email, thông tin đăng nhập, thông tin công ty (tùy chọn trong việc xuất hóa đơn), thông tin xoay quanh về việc đặt Dịch vụ (như thời gian lưu trú, tên khách sạn, số phòng, tên hãng hàng không sử dụng, ngày khởi hành, ngày về,...). Chúng tôi cũng có thể yêu cầu Người dùng cung cấp thông tin về sở thích du lịch, và phản hồi về những trải nghiệm du lịch của Người dùng thông qua việc đặt Dịch vụ của Người dùng trên Trang Web...</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        top: 50,
        borderRadius: 5,
    },
    content1: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    content2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    text2: {
        marginVertical: 10,
        fontSize: 14
    },
    text3:{
        fontSize:14,
        fontWeight:'bold'
    }
})