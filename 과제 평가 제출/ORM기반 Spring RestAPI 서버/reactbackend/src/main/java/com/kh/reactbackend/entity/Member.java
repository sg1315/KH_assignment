package com.kh.reactbackend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Getter
@DynamicInsert
@DynamicUpdate
@Table(name = "MEMBER")
public class Member {

    @Id
    @Column(name = "user_id", length = 30)
    private String userId;

    @Column(name = "user_pwd", nullable = false, length = 100)
    private String userPwd;

    @Column(name = "user_name", nullable = false, length = 15)
    private String userName;

    @Column(length = 254)
    private String email;

    //1 : N 연관관계 주인 = Board
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Board> boards = new ArrayList<>();

    //1 : N 연관관게 주인 = Reply
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Reply> replies = new ArrayList<>();

    public void updateMemberInfo(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}
