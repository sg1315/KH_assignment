package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<String> createMember(@RequestBody MemberDto.Create createDto) {
        String userId = memberService.createMember(createDto);
        return ResponseEntity.ok(userId);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDto.Response> login(@RequestBody MemberDto.LoginRequestDto loginRequest) {
        MemberDto.Response member = memberService.login(loginRequest.getUser_id(), loginRequest.getUser_pwd());
        return ResponseEntity.ok(member);
    }

    //회원삭제
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteMember(@PathVariable String userId) {
        memberService.deleteMember(userId);
        return ResponseEntity.ok().build();
    }


}
