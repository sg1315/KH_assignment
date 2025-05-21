package com.kh.jpa.entity;

import com.kh.jpa.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Getter
@Table(name = "BOARD")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no")
    private Long boardNo;

    @Column(name = "board_title", nullable = false, length = 100)
    private String boardTitle;

    @Lob
    @Column(name = "board_content", nullable = false)
    private String boardContent;

    @Column(name = "origin_name", length = 100)
    private String originName;

    @Column(name = "change_name", length = 100)
    private String changeName;

    private Integer count;

    @Column(name = "create_date", updatable = false)
    private LocalDateTime createDate;

    @Column(length = 1, nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Status status;

    //Board : Member (N:1)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_writer", nullable = false)
    private Member member;

    public void changeMember(Member member) {
        this.member = member;
        if(!member.getBoards().contains(this)) {
            member.getBoards().add(this);
        }
    }

    public void changeTitle(String boardTitle) {
        if(boardTitle != null && !boardTitle.isEmpty()) {
            this.boardTitle = boardTitle;
        }
    }

    public void changeContent(String boardContent) {
        if(boardContent != null && !boardContent.isEmpty()) {
            this.boardContent = boardContent;
        }

    }

    //Board : Reply (1 : N)
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Reply> replies = new ArrayList<>();

    //Board : BoardTag (1 : N)
    //orphanRemoval = true  (N : 1 또는 1 : N) 연관관계에서 자식 생명주기를 부모가 완전히 통제하겠다.
    //부모 엔티티에서 자식과의 관계가 제거되면, 자식도 자동으로 삭제
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<BoardTag> boardTags = new ArrayList<>();

    public void changeFile(String originName, String changeName) {
        this.originName = originName;
        this.changeName = changeName;
    }

    @PrePersist
    protected void prePersist() {
        this.createDate = LocalDateTime.now();
        this.count = 0;
        if (this.status == null) {
            this.status = CommonEnums.Status.Y;
        }
    }
}
