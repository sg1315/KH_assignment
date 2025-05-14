package com.kh.jpa.entity;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "MEMBER")
public class Member {

    @Id
    @Column(name = "user_id", length = 30)
    private String userId;

    @Column(name = "user_pwd", nullable = false, length = 100)
    private String userPwd;

    @Column(name = "user_name", nullable = false, length = 15)
    private String userName;

    private String email;

    private Character gender;

    private int age;

    @Column(length = 13)
    private String phone;

    @Column(length = 100)
    private String address;

    @CreationTimestamp
    @Column(name = "enroll_date", updatable = false)
    private LocalDateTime enrollDate;

    @CreationTimestamp
    @Column(name = "modify_date", updatable = false)
    private LocalDateTime modifyDate;

    @ColumnDefault("'Y'")
    @Column(nullable = false)
    private Character status;


    @OneToOne(mappedBy = "member", cascade = CascadeType.ALL)
    private Profile profile;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Reply> replies = new ArrayList<>();
}
