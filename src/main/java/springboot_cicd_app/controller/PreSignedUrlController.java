//package springboot_cicd_app.controller;
//
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import springboot_cicd_app.service.PreSignedUrlService;
//
//@RestController
//@RequestMapping("/api/s3")
//public class PreSignedUrlController {
//
//    private final PreSignedUrlService preSignedUrlService;
//
//    public PreSignedUrlController(PreSignedUrlService preSignedUrlService) {
//        this.preSignedUrlService = preSignedUrlService;
//    }
//
//    @GetMapping("/generate-url")
//    public String generateUrl(@RequestParam String fileName) {
//
//        return preSignedUrlService.generatePreSignedUrl(fileName);
//    }
//}