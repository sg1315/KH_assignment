package com.kh.jpa.entity;

import com.kh.jpa.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED) //JPA 스팩상 필수 + 외부 상세
@Builder
@AllArgsConstructor
//(Entity, NoArgsConstructor, Builder, AllArgsConstructor) 하나의 세트 수준
@Getter
@DynamicInsert //insert시에 null이 아닌 필드만 쿼리에 포함, default값 활용
@DynamicUpdate //변경된 필드만 update문에 포함
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

    @Column(length = 1)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer age;

    @Column(length = 13)
    private String phone;

    @Column(length = 100)
    private String address;

    @Column(name = "enroll_date", updatable = false)
    private LocalDateTime enrollDate;

    @Column(name = "modify_date", updatable = false)
    private LocalDateTime modifyDate;

    @Column(length = 1, nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Status status;

    @OneToOne(mappedBy = "member")
    private Profile profile;

    @OneToMany(mappedBy = "member")
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Reply> replies = new ArrayList<>();

    public enum Gender {
        M, F
    }

    //엔티티가 영속성 컨텍스트에 저장되기 전(eml.persist())에 실행되는 메서드
    //초기설정을 해두는 용도로 사용
    //default값 같은 느낌
    @PrePersist
    public void prePersist() {
        this.enrollDate = LocalDateTime.now();
        this.modifyDate = LocalDateTime.now();
        if (status == null) {
            this.status = CommonEnums.Status.Y;
        }
    }

    @PreUpdate
    public void preUpdate() {
        this.modifyDate = LocalDateTime.now();
    }
}
