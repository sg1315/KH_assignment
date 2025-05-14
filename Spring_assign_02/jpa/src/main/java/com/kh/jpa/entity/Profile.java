package com.kh.jpa.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "PROFILE")
public class Profile {

    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private Member member;

    @Column(name = "profile_image", length = 100)
    private String profileImage;

    @Column(length = 300)
    private String intro;
}
